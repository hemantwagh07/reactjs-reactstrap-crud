import React, { Component } from 'react'
import Table from '../Table/UserTable';
import InputField from '../FormElement/InputField';
import RadioFieldGroup from '../FormElement/RadioFieldGroup';
import CheckboxFieldGroup from '../FormElement/CheckboxFieldGroup';
import DropdownField from '../FormElement/DropdownField';
import helper from './RegisterHelper';
import ModalPopup from '../FormElement/ModalPopup';
import { Col, FormGroup, Button, Form, Alert } from 'reactstrap';

export default class Register extends Component {
    currentEdit = false;
    modalconfig = {
        title: '',
        body: '',
        btntext: '',
        pbtnAction: () => 0,
    };
    constructor(props) {
        super(props);
        this.state = helper.initialState;
        this.toggle = this.toggle.bind(this);
    }
    toggle() {
        this.setState({
            modal: !this.state.modal
        });
    }
    submitHandler = (e) => {
        e.preventDefault();
        let validate = helper.validation(this.state);
        if (validate.status) {
            let { fname, lname, emailid, mobileno, gender, language, location, userData } = this.state;
            userData.push({ fname, lname, emailid, mobileno, gender, language, location });
            fname = lname = emailid = mobileno = gender = location = '';
            language = [];
            this.setState({ fname, lname, emailid, mobileno, gender, language, location, userData });
            this.showAlert('Record inserted successfully');
        } else {
            this.setState({ errors: validate.errors });
        }
    }

    updateHandler = (e) => {
        e.preventDefault();
        let { fname, lname, emailid, mobileno, gender, language, location, userData } = this.state;
        userData[this.currentEdit] = {
            fname: fname, lname: lname,
            emailid: emailid, mobileno: mobileno,
            gender: gender, language: language,
            location: location,
        }
        fname = lname = emailid = mobileno = gender = location = '';
        language = [];
        this.setState({ fname, lname, emailid, mobileno, gender, language, location, userData });
        this.currentEdit = false;
        this.showAlert('Record updated successfully');
        this.toggle();
    }
    textChangeHandler = (e) => {
        let { name, value } = e.target;
        let errors = { ...this.state.errors };
        if (value !== '') {
            errors[name] = '';
            this.setState({ errors });
        } else {
            errors[name] = helper.errormessages.required[name];
            this.setState({ errors });
        }
        this.setState({
            [name]: value,
        });
    }
    radioChangeHandler = (e) => {
        let { name, value } = e.target;
        this.setState({
            [name]: value,
        });
    }
    checkboxChangeHandler = (e) => {
        let echecked = this.state.language;
        if (e.target.checked) { //If it is checked
            echecked.push(e.target.value);
        } else {
            let arrindex = echecked.indexOf(e.target.value);
            if (arrindex > -1) {
                echecked.splice(arrindex, 1);
            }
        }
        this.setState({
            [e.target.name]: echecked,
        });
    }
    onEditClick = (id) => {
        let currentUserData = this.state.userData[id];
        this.setState({ ...currentUserData });
        this.currentEdit = id;
    }
    deleteHandler = (id) => {
        let { userData } = this.state;
        userData.splice(id, 1);
        this.setState({ userData });
        this.toggle();
        this.showAlert('Record deleted successfully');
    }
    showUpdatePopup = (e) => {
        e.preventDefault();
        let validate = helper.validation(this.state);
        if (validate.status) {
            helper.updatePopupConfig.pbtnAction = this.updateHandler;
            helper.modalConfig = helper.updatePopupConfig;
            this.toggle();
        } else {
            this.setState({ errors: validate.errors });
        }
    }
    showDeletePopup = (id) => {
        helper.deletePopupConfig.pbtnAction = () => this.deleteHandler(id);
        helper.modalConfig = helper.deletePopupConfig;
        this.toggle();
    }
    showAlert = (message) => {
        this.setState({ alertvisible: true, alertmessage: message }, () => {
            window.setTimeout(() => {
                this.setState({ alertvisible: false, alertmessage: '' })
            }, 2000)
        });
    }

    render() {
        return (
            <Col sm="10">
                <Form>
                    <h1>Register</h1>
                    <Alert color="info" isOpen={this.state.alertvisible} fade={true}>{this.state.alertmessage}</Alert>
                    <InputField type="text" name="fname" id="fname"
                        placeholder="Enter first name" onchangefun={this.textChangeHandler}
                        fieldvalue={this.state.fname} displaylbl="First Name"
                        validationError={this.state.errors.fname}
                    />
                    <InputField type="text" name="lname" id="lname"
                        placeholder="Enter Last name" onchangefun={this.textChangeHandler}
                        fieldvalue={this.state.lname} displaylbl="Last Name"
                        validationError={this.state.errors.lname}
                    />
                    <InputField type="text" name="emailid" id="emailid"
                        placeholder="Enter your Email address" onchangefun={this.textChangeHandler}
                        fieldvalue={this.state.emailid} displaylbl="Email"
                        validationError={this.state.errors.emailid}
                    />
                    <InputField type="number" name="mobileno" id="mobileno"
                        placeholder="Enter your Mobile Number" onchangefun={this.textChangeHandler}
                        fieldvalue={this.state.mobileno} displaylbl="Mobile No"
                        validationError={this.state.errors.mobileno}
                    />
                    <RadioFieldGroup radiobtninfo={helper.radioGroup} radioGrouplbl="Gender"
                        onchangefun={this.radioChangeHandler}
                        fieldvalue={this.state.gender}
                        validationError={this.state.errors.gender}></RadioFieldGroup>

                    <CheckboxFieldGroup checkboxinfo={helper.checkboxGroup} checkboxGrouplbl="Language"
                        onchangefun={this.checkboxChangeHandler}
                        fieldvalue={this.state.language}
                        validationError={this.state.errors.language}></CheckboxFieldGroup>

                    <DropdownField dropdownoptions={helper.languageDD} name="location" id="location"
                        fieldvalue={this.state.location} displaylbl="Location"
                        onchangefun={this.textChangeHandler}
                        validationError={this.state.errors.location}></DropdownField>

                    <FormGroup row>
                        <Col sm="2"></Col>
                        <Col sm="10">
                            {this.currentEdit === false ?
                                <Button color="primary" type="submit" onClick={this.submitHandler}>Submit</Button> :
                                <Button color="primary" type="submit" onClick={this.showUpdatePopup}>Update</Button>}
                        </Col>
                    </FormGroup>
                    <ModalPopup isOpen={this.state.modal} toggle={this.toggle}
                        modaltitle={helper.modalConfig.title} modalbody={helper.modalConfig.body} btntext={helper.modalConfig.btntext} pbtnaction={helper.modalConfig.pbtnAction}></ModalPopup>
                </Form>
                <br />
                {this.state.userData.length > 0 ? <Table deleteclicked={this.showDeletePopup} data={this.state.userData} editclicked={this.onEditClick} /> : ''}
            </Col>
        )
    }
}