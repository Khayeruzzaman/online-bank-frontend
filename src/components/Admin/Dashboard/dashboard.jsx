import React, {useState, useEffect} from "react";
import axios from "axios";
import SideBar from "../Navbar/sidebar";
import { Link } from 'react-router-dom';


const Dashboard = () => {

    

    const [data, setData] = useState([['0'],['1'],['2']]);
    useEffect(() => {
        axios.get("http://127.0.0.1:8000/api/admin/dashboard")
        .then(resp=>{
            setData(resp.data);
        }).catch(err=>{
            console.log(err);
        });
    }, []);

    var adminsNo = data[0].length;
    var employeesNo = data[1].length;
    var accountsNo = data[2].length;

    return (
        
<div>
    
    <SideBar />
    
    <link href="/assets/admin/css/dashboard.css" rel="stylesheet" type="text/css" />
 
    <div className="dashContent">
    
        <div className="Users">	


                <Link to={"/admin/dashboard/adminList"} style={{textDecoration:"none", color: "black"}}>
                <div className="ad">
                    
                
                    <div className="box">
                        <h3>ADMINS</h3>
                        <h4>
                        <center>
                            {adminsNo}
                        </center>
                        </h4>
                    </div>

                    <div className="icon-case">
                        <img src="/assets/admin/image/admin_dashboard/administrator.png" alt=""/>
                    </div>
                
                </div>
                </Link>   

                <Link to={"/admin/dashboard/employeeList"} style={{textDecoration:"none", color: "black"}}>
                <div className="emp">
                    <div className="box">
                        <h3>EMPLOYEES</h3>
                        <h4>
                        <center>
                            {employeesNo}
                        </center>
                        </h4>
                    </div>

                    <div className="icon-case">
                        <img src="/assets/admin/image/admin_dashboard/employee.png" alt="" />
                    </div>    
                </div>
                </Link>

                <Link to="/admin/dashboard/customerList" style={{textDecoration:"none", color: "black"}}>
                <div className="cus">
                    <div className="box">
                        <h3>ACCOUNTS</h3>
                        <h4>
                        <center>
                            {accountsNo}
                        </center>
                        </h4>
                    </div>

                    <div className="icon-case">
                        <img src="/assets/admin/image/admin_dashboard/customer.png" alt=""/>
                    </div>    
                </div>
                </Link>

        </div>

    </div>  
 </div>      
    );
}

export default Dashboard;
