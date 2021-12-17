import React from 'react';
import swal from 'sweetalert';
import axios from 'axios';


const LoanReq = (props) => {

    const  {id, loantype, loanamount, loanrequeststatus} = props.details;
    
   

    const acceptReq = (e, id) =>{
        e.preventDefault();

        const thisClicked = e.currentTarget;
        thisClicked.innerText = "Accepting";

        axios.get("/admin/loan/requests/accept/"+id)
        .then(res=>{
            if (res.data.status === 200){
                
                swal('Success',res.data.message,'success');
                thisClicked.closest('tr').remove();
                
            
            }else if(res.data.status === 420){
               
                swal('Can Not Found',res.data.message,'error');
                thisClicked.innerText= "Accept";

            }
        })
    } 

    const rejectReq = (e, id) =>{
        e.preventDefault();

        const thisClicked = e.currentTarget;
        thisClicked.innerText = "Rejecting";

        axios.get("/admin/loan/requests/reject/"+id)
        .then(res=>{
            if (res.data.status === 200){
                
                swal('Success',res.data.message,'success');
                thisClicked.closest('tr').remove();
                
            
            }else if(res.data.status === 420){
               
                swal('Can Not Found',res.data.message,'error');
                thisClicked.innerText= "Reject";

            }
        })
    } 
    
        return(
        
            <tr>
            <td>{id}</td>
            <td>{loantype}</td>
            
            <td>{loanamount}</td>
            <td>{loanrequeststatus}</td>
            
            
            <td>
                <button onClick={(e)=> acceptReq(e,id)} className="btn btn-primary" style={{textTransform:'uppercase'}}>Accept</button>
            </td>
            <td>
                <button onClick={(e)=> rejectReq(e,id)} className="btn btn-danger" style={{textTransform:'uppercase'}}>Reject</button>
            </td>
        </tr>
        
        
    );
  
    
}
export default LoanReq;