import React from 'react';
import { Link } from 'react-router-dom';
import swal from 'sweetalert';
import axios from 'axios';

const Account = (props) => {

    const  {id, accountname, accounttype, accountbalance,accountinterestrate,accountstate} = props.details;
    
    const disableAcc = (e, id) =>{
        e.preventDefault();

        const thisClicked = e.currentTarget;
        thisClicked.innerText = "Disabling";

        axios.get("/admin/customerlist/disable/"+id)
        .then(res=>{
            if (res.data.status === 200){
                
                swal('Success',res.data.message,'success');
                thisClicked.closest('tr').remove();
            
            }else if(res.data.status === 420){
               
                swal('Success',res.data.message,'disable');
                thisClicked.innerText= "Disable";

            }
        })
    }
    
    
    return(
        
        <tr>
            <td>{accountname}</td>
            <td>{accounttype}</td>
            <td>{accountbalance}</td>
            <td>{accountinterestrate}</td>
            <td style={{color:'green' ,fontWeight:'bold'}}>{accountstate}</td>
            
            <td>
                <Link to={"/admin/customerlist/edit/"+id}><button className="btn btn-primary" style={{textTransform:'uppercase'}}>Edit</button></Link>
            </td>
            <td>
                <button type='button' onClick={(e) => disableAcc(e, id) } className="btn btn-danger" style={{textTransform:'uppercase'}}>Disable</button>
            </td>
        </tr>
    );
}
export default Account;