import React from 'react';
import { Link } from 'react-router-dom';

const Emp = (props) => {

    const  {id, empname,userprofilepicture, email, empsalary,empdesignation,joindate,bank_user_id} = props.empDetails;
    return(
        <tr>
            <td>{id}</td>
            <td>{empname}</td>
            <td>{userprofilepicture}</td>
            <td>{email}</td>
            <td>{empsalary}</td>
            <td>{empdesignation}</td>
			<td>{joindate}</td>
            <td>
                <Link to={"/admin/employeeList/edit/"+id}><button className="btn btn-primary" style={{width:'84px',textTransform:'uppercase'}}>Edit</button></Link>
                <br/> <Link to={"/admin/employeeList/edit/"+bank_user_id+"/"+id}><button className="btn btn-danger" style={{width:'85px',textTransform:'uppercase'}}>Delete</button></Link>
            </td>
        </tr>
    );
}
export default Emp;