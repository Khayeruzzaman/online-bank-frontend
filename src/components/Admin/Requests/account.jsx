import React from 'react';
import { Link } from 'react-router-dom';

const AccReq = (props) => {

    const  {id, accountname, accounttype, accountbalance,accountinterestrate,bank_user_id} = props.details;
    return(
        
        <tr>
            <td>{accountname}</td>
            
            <td>{accounttype}</td>
            <td>{accountbalance}</td>
            <td>{accountbalance}</td>
            <td>{accountinterestrate}</td>
            
            <td>
                <Link to={"/admin/customer/requests/"+id}><button className="btn btn-primary" style={{width:'94px',textTransform:'uppercase'}}>Accept</button></Link><br/>
                <Link to={"/admin/customer/requests/"+bank_user_id+"/"+id}><button className="btn btn-danger" style={{width:'95px',textTransform:'uppercase'}}>Disable</button></Link>
            </td>
        </tr>
    );
}
export default AccReq;