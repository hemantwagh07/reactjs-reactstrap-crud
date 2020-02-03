import React from 'react'

export default function RadioFieldGroup(props) {
    let radiobtns = [];
    for (let index = 0; index < props.radiobtninfo.length; index++) {
        radiobtns.push(
            <div key={index+1} className="form-check form-check-inline">
                <input className="form-check-input"
                    name={props.radiobtninfo[index].name}
                    type="radio"
                    id={props.radiobtninfo[index].id}
                    onChange={props.onchangefun}
                    value={props.radiobtninfo[index].value}
                    checked={props.fieldvalue === props.radiobtninfo[index].value} />
                <label className="form-check-label"
                    htmlFor={props.radiobtninfo[index].id}>{props.radiobtninfo[index].displaylbl}</label>
            </div>);
    }
    return (
        <div className="form-group row">
            <label className="col-sm-2 col-form-label" htmlFor="gender">{props.radioGrouplbl}</label>
            <div className="col-sm-10">
                {radiobtns.map((item, ind) => {
                    return <React.Fragment key={ind}>{item}</React.Fragment>;
                })}
                {props.validationError !== undefined && props.validationError !== '' ? <span className='errormsg'>{props.validationError}</span> : ''}
            </div>
        </div>
    )
}
