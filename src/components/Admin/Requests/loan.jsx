import React from 'react';
import { Link } from 'react-router-dom';

const LoanReq = (props) => {

    const  {account_id, loantype, loanamount, loanrequeststatus} = props.details;
    
    
        return(
        
            <tr>
            <td>{account_id}</td>
            <td>{loantype}</td>
            
            <td>{loanamount}</td>
            <td>{loanrequeststatus}</td>
            
            
            <td>
                <Link to={"/admin/loan/requests/accept/"+account_id}><button className="btn btn-primary" style={{width:'94px',textTransform:'uppercase'}}>Accept</button></Link><br/>
                <Link to={"/admin/loan/requests/reject/"+account_id}><button className="btn btn-danger" style={{width:'95px',textTransform:'uppercase'}}>Reject</button></Link>
            </td>
        </tr>
        
        
    );
  
    
}
export default LoanReq;