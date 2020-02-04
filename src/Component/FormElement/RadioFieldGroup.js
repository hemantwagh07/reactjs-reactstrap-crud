import React from 'react'
import { FormGroup, Col, Label, Input } from 'reactstrap';

export default function RadioFieldGroup(props) {
    let radiobtns = [];
    for (let index = 0; index < props.radiobtninfo.length; index++) {
        radiobtns.push(
            <FormGroup check inline key={index + 1}>
                <Label for={props.radiobtninfo[index].id}>
                    <Input name={props.radiobtninfo[index].name}
                        type="radio"
                        id={props.radiobtninfo[index].id}
                        onChange={props.onchangefun}
                        value={props.radiobtninfo[index].value}
                        checked={props.fieldvalue === props.radiobtninfo[index].value}>
                    </Input>
                    {props.radiobtninfo[index].displaylbl}
                </Label>
            </FormGroup>);
    }
    return (
        <FormGroup row>
            <Col sm="2">
                <Label for="gender">{props.radioGrouplbl}</Label>
            </Col>
            <Col sm="10">
                {radiobtns.map((item, ind) => {
                    return <React.Fragment key={ind}>{item}</React.Fragment>;
                })}
                {props.validationError !== undefined && props.validationError !== '' ? <span className='errormsg'>{props.validationError}</span> : ''}
            </Col>
        </FormGroup>
    )
}
