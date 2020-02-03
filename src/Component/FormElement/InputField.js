import React from 'react'
import { Col, Label, Input, FormGroup } from 'reactstrap';

export default function InputField(props) {
    
    const { id, displaylbl, type, name, placeholder, onchangefun, fieldvalue } = props;
    return (
        <FormGroup row>
            <Col sm="2">
                <Label for={id}>{displaylbl}</Label>
            </Col>
            <Col sm="10">
                <Input type={type} name={name} id={id} placeholder={placeholder}
                    onChange={onchangefun} value={fieldvalue}>
                </Input>
                {props.validationError !== undefined && props.validationError !== '' ? <span className='errormsg'>{props.validationError}</span> : ''}
            </Col>
        </FormGroup>
        // <div className="form-group row">
        //     <label className="col-sm-2 col-form-label" htmlFor={id}>{displaylbl}</label>
        //     <div className="col-sm-10">
        //         <input type={type} name={name} className="form-control"
        //             id={id} placeholder={placeholder}
        //             onChange={onchangefun}
        //             value={fieldvalue} />
        //         {props.validationError !== undefined && props.validationError !== '' ? <span className='errormsg'>{props.validationError}</span> : ''}
        //     </div>
        // </div>
    )
}
