import React from 'react'

export default function Table(props) {
    let rows = [];
    for (let index = 0; index < props.data.length; index++) {
        rows.push(<><td>{index + 1}</td>
        <td>{props.data[index].fname}</td>
        <td>{props.data[index].lname}</td>
        <td>{props.data[index].emailid}</td>
        <td>{props.data[index].mobileno}</td>
        <td>{props.data[index].gender}</td>
        <td>{props.data[index].language.join(',')}</td>
        <td>{props.data[index].location}</td>
        <td onClick={(evt) => props.editclicked(index)}>Edit</td>
        <td onClick={(evt) => props.deleteclicked(index)}>Delete</td></>);
    }

    return (
        <div>
            <table className="table table-striped table-bordered" style={{ textAlign: "center" }}>
                <thead className="thead-dark">
                    <tr>
                        <th>#</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Email</th>
                        <th>Mobile Number</th>
                        <th>Gender</th>
                        <th>Language</th>
                        <th>Location</th>
                        <th colSpan="2">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {rows.map((item, ind) => {
                        return <tr key={ind}>{item}</tr>;
                    })}
                </tbody>
            </table>
        </div>
    )
}
