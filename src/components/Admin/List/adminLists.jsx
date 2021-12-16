import React,{useEffect, useState} from "react";
import axios from "axios";
import Admin from "./admin";
import SideBar from "../Navbar/sidebar";


const AdminList = () =>{

    const [admin, setAdmin] = useState([]);
    useEffect(() => {
        axios.get("http://127.0.0.1:8000/api/admin/dashboard/adminList")
        .then(resp=>{
            setAdmin(resp.data);
        }).catch(err=>{
            console.log(err);
        });
    }, []);

    return(
    <div>
        <SideBar/>
        <link href="/assets/admin/css/adminList.css" rel="stylesheet" type="text/css" />
        
        <div className="dashContent">

        <center>
        <h1 style={{color: '#2e4154', textTransform: 'uppercase'}}>Admin Lists</h1>

        </center>

        <div className="viewUsers">

        <table id="tb" className="table table-striped table-hover table-bordered border-dark" >
        <thead>
        <tr>
            <th> Admin Id </th>
            <th>Admin Name</th>
            <th>Admin Picture</th>
            <th>Email</th>
            <th>Salary</th>
            <th>Actions</th>
        </tr>
        </thead>
        <tbody>
        {admin.map((ad)=>(
                    
                    <Admin key={ad.id} adDetails={ad}/>
                ))}
       
       </tbody>
        </table>

        </div>

        </div>
    </div>     
    );
}

export default AdminList;