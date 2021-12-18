import React, {useState, useEffect} from "react";
import axios from "axios";
import SideBar from "../Navbar/sidebar";
import { Link } from 'react-router-dom';
import swal from 'sweetalert';

const Dashboard = () => {


    const [adminsNo, setAdmin] = useState();
    const [employeesNo, setEmp] = useState();
    const [accountsNo, setCus] = useState();

    const handledashboardData = async() => {


        const response = await  axios.get("admin/dashboard")
        if(response.data.autherror){
            swal(response.data.autherror, {
                buttons: {
                  cancel: "Go Home",
                  Login: true,
                },
              })
              .then((value) => {
                switch (value) {
               
                  case "Login":
                    localStorage.removeItem("AdminId");
                    localStorage.removeItem("BankId");
                    localStorage.removeItem("AdminName");
                    localStorage.removeItem("userkey");
                    window.location.href = '/login';
                    break;
               
                  default:
                    localStorage.removeItem("AdminId");
                    localStorage.removeItem("BankId");
                    localStorage.removeItem("AdminName");
                    localStorage.removeItem("userkey");
                    window.location.href = '/';
                }
              });
        }
        else if(response.data.status === 200){
                setAdmin(response.data.adminsNo);
                setEmp(response.data.employeesNo);
                setCus(response.data.accountNo);
            }
        }



    useEffect(() => {
        document.title = "Account Dashboard";
        if(localStorage.getItem('AdminId')){
            handledashboardData();
        }
        else{
            swal("Please Login First!!!", {
                buttons: {
                  cancel: "Go Home",
                  Login: true,
                },
              })
              .then((value) => {
                switch (value) {
               
                  case "Login":
                    window.location.href = '/login';
                    break;
               
                  default:
                    window.location.href = '/';
                }
              });
        }
      }, [])
   

    

    return (
        
<div >
    
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
