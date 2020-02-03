import React from 'react'
import { FormGroup, Col, Label, Input } from 'reactstrap';

export default function DropdownField(props) {
    let dropdownop = [];
    for (let index = 0; index < props.dropdownoptions.length; index++) {
        dropdownop.push(<><option value={props.dropdownoptions[index].optionValue}>{props.dropdownoptions[index].optionText}</option></>);
    }
    return (
        <FormGroup row>
            <Col sm="2">
                <Label for={props.name}>{props.displaylbl}</Label>
            </Col>
            <Col sm="10">
                <Input type="select" value={props.fieldvalue} name={props.name} id={props.id} onChange={props.onchangefun}>
                    {dropdownop.map((item, ind) => {
                        return <React.Fragment key={ind}>{item}</React.Fragment>;
                    })}
                </Input>
                {props.validationError !== undefined && props.validationError !== '' ? <span className='errormsg'>{props.validationError}</span> : ''}
            </Col>
        </FormGroup>
        // <div className="form-group row">
        //     <label className="col-sm-2 col-form-label" htmlFor={props.name}>{props.displaylbl}</label>
        //     <div className="col-sm-10">
        //         <select value={props.fieldvalue} className="custom-select" name={props.name} id={props.id} onChange={props.onchangefun}>
        //             {dropdownop.map((item, ind) => {
        //                 return <React.Fragment key={ind}>{item}</React.Fragment>;
        //             })}
        //         </select>
        //         {props.validationError !== undefined && props.validationError !== '' ? <span className='errormsg'>{props.validationError}</span> : ''}
        //     </div>
        // </div>
    )
}
