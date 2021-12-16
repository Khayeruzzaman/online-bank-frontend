import React from 'react';
import { Link } from 'react-router-dom';

const Account = (props) => {

    const  {id, accountname, accounttype, accountbalance,accountinterestrate,bank_user_id} = props.details;
    return(
        
        <tr>
            <td>{accountname}</td>
            
            <td>{accounttype}</td>
            <td>{accountbalance}</td>
            <td>{accountbalance}</td>
            <td>{accountinterestrate}</td>
            
            <td>
                <Link to={"/admin/customerlist/edit/"+id}><button className="btn btn-primary" style={{width:'84px',textTransform:'uppercase'}}>Edit</button></Link><br/>
                <Link to={"/admin/customerlist/disable/"+bank_user_id+"/"+id}><button className="btn btn-danger" style={{width:'85px',textTransform:'uppercase'}}>Delete</button></Link>
            </td>
        </tr>
    );
}
export default Account;