import React from 'react';
import { Link } from 'react-router-dom';
import swal from 'sweetalert';
import axios from 'axios';

const Emp = (props) => {

    const  {id, empname, email, empsalary,empdesignation,joindate} = props.details;
    
    const deleteEmp = (e, id) =>{
        e.preventDefault();

        const thisClicked = e.currentTarget;
        thisClicked.innerText = "Deleting";

        axios.get("/admin/employees/delete-employee/"+id)
        .then(res=>{
            if (res.data.status === 200){
                
                swal('Success',res.data.message,'success');
                thisClicked.closest('tr').remove();
            
            }else if(res.data.status === 420){
               
                swal('Success',res.data.message,'delete');
                thisClicked.innerText= "Delete";

            }
        })
    }
    
    return(
        <tr>
            <td>{id}</td>
            <td>{empname}</td>
            <td>{email}</td>
            <td>{empsalary}</td>
            <td>{empdesignation}</td>
			<td>{joindate}</td>
            <td>
                <Link to={"/admin/emplist/edit/"+id}><button className="btn btn-primary" style={{textTransform:'uppercase'}}>Edit</button></Link>
            </td> 
            <td>
            <button type='button'onClick={(e) => deleteEmp(e, id) } className="btn btn-danger" style={{textTransform:'uppercase'}}>Delete</button>
            </td>
        </tr>
    );
}
export default Emp;