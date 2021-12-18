import axios from 'axios';
import React from 'react';
import { Link } from 'react-router-dom';
import swal from 'sweetalert';

const Admin = (props) => {

    const  {id, adminname, userprofilepicture, email, adminsalary} = props.adDetails;

    const deleteAdmin = (e, id) =>{
        e.preventDefault();

        const thisClicked = e.currentTarget;
        thisClicked.innerText = "Deleting";

        axios.get("/admin/adminlist/delete-admin/"+id)
        .then(res=>{
            if (res.data.status === 200){
                
                swal('Success',res.data.message,'success');
                thisClicked.closest('tr').remove();
            
            }else if(res.data.status === 420){
               
                swal('Success',res.data.message,'success');
                thisClicked.innerText= "Delete";

            }
        })
    }


    return(
        <tr key={id}>
            <td>{id}</td>
            <td>{adminname}</td>
            <td>
                <a href={"http://127.0.0.1:8000/storage/admin/admin_cover_images/"+userprofilepicture}>
                <img src={"http://127.0.0.1:8000/storage/admin/admin_cover_images/"+userprofilepicture}
                                            style={{width: '40px', height:'40px'}} alt="" />
                </a>
            </td>
            <td>{email}</td>
            <td>{adminsalary}</td>
            <td>
                <Link to={"/admin/adminlist/edit/"+id}><button className="btn btn-primary" style={{width:'84px',textTransform:'uppercase'}}>Edit</button></Link><br/>
            </td>
            <td>
                <button type='button' onClick={(e) => deleteAdmin(e, id) } className="btn btn-danger" style={{textTransform:'uppercase'}}>Delete</button>
            </td>
        </tr>
    );
}
export default Admin;