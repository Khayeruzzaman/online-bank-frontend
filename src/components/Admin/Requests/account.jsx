import React from 'react';
import swal from 'sweetalert';
import axios from 'axios';

const AccReq = (props) => {

    const  {id, accountname, accounttype, accountbalance,accountinterestrate, accountstate} = props.details;
    
    const acceptReq = (e, id) =>{
        e.preventDefault();

        const thisClicked = e.currentTarget;
        thisClicked.innerText = "Accepting";

        axios.get("/admin/customer/requests/accept/"+id)
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
        thisClicked.innerText = "Disabling";

        axios.get("/admin/customer/requests/disable/"+id)
        .then(res=>{
            if (res.data.status === 200){
                
                swal('Success',res.data.message,'success');
                thisClicked.closest('tr').remove();
                
            
            }else if(res.data.status === 420){
               
                swal('Can Not Found',res.data.message,'error');
                thisClicked.innerText= "disable";

            }
        })
    } 
    
    
    
    return(
        
        <tr>
            <td>{accountname}</td>
            <td>{accounttype}</td>
            <td>{accountbalance}</td>
            <td>{accountinterestrate}</td>
            <td style = {{color: '#800080', fontWeight:'bold'}}>{accountstate}</td>
            
            <td>
               <button onClick={(e)=> acceptReq(e,id)} className="btn btn-primary" style={{textTransform:'uppercase'}}>Accept</button>
            </td>
            <td>
                <button onClick={(e)=> rejectReq(e,id)} className="btn btn-danger" style={{textTransform:'uppercase'}}>Disable</button>
            </td>
        </tr>
    );
}
export default AccReq;