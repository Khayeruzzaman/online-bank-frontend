import React,{useEffect, useState} from "react";
import axios from "axios";

import SideBar from "../Navbar/sidebar";
import Emp from "./emp";

const EmpList = () =>{

    const [emp, setEmp] = useState([]);
    useEffect(() => {
        axios.get("admin/dashboard/employeeList")
        .then(resp=>{
            setEmp(resp.data);
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
        <h1 style={{color: '#2e4154', textTransform: 'uppercase'}}>Employee Lists</h1>

        </center>

        <div className="viewUsers">

        <table id="tb" className="table table-striped table-hover table-bordered border-dark" >
        <thead>
            <tr>
				<th> Employee Id </th>
				<th>Employee Name</th>
				<th>Employee Picture</th>
				<th>Email</th>
				<th>Salary</th>
				<th>Designation</th>
				<th>join Date</th>
				<th>Actions</th>
			</tr>
        </thead>

        <tbody>
        {emp.map((e)=>(
                    
                    <Emp key={e.id} empDetails={e}/>
                ))}
       
       </tbody>
        </table>

        </div>

        </div>
    </div>     
    );
}

export default EmpList;