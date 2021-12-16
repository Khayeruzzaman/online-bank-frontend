import React from 'react';
import { Link } from 'react-router-dom';

const Admin = (props) => {

    const  {id, adminname, userprofilepicture, email, adminsalary,bank_user_id} = props.adDetails;
    return(
        <tr key={id}>
            <td>{id}</td>
            <td>{adminname}</td>
            <td>{userprofilepicture}</td>
            <td>{email}</td>
            <td>{adminsalary}</td>
            <td>
                <Link to={"/admin/adminlist/edit/"+id}><button className="btn btn-primary" style={{width:'84px',textTransform:'uppercase'}}>Edit</button></Link><br/>
                <Link to={"/admin/adminlist/edit/"+bank_user_id+"/"+id}><button className="btn btn-danger" style={{width:'85px',textTransform:'uppercase'}}>Delete</button></Link>
            </td>
        </tr>
    );
}
export default Admin;