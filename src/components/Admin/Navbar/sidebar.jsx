import React,{useState} from "react";
import Navbar from "./navbar";
import { Link } from 'react-router-dom';



const SideBar = () =>{

    const[fbtn, setFbtn] = useState("false");
    const[ubtn, setUbtn] = useState("false");
    const[rbtn, setRbtn] = useState("false");

    const handleFbtn = () => {
        setFbtn(!fbtn);
    }

    const handleUbtn = () => {
        setUbtn(!ubtn);
    }

    const handleRbtn = () => {
        setRbtn(!rbtn);
    }

    return(
        <div>
            <Navbar />
            <link href="/assets/admin/css/sideBar.css" rel="stylesheet" type="text/css" />
            
            <div className="col-md-1" id ='dash'>


                <h2 id="admin"> Admin Panel </h2>

                <ul>
                    <li> <Link to= "/admin/dashboard"> <i className="fa fa-reorder"> Dashboard </i> </Link> </li>
                    <li> <Link to= "/admin/viewprofile"> <i className="fa fa-user-circle"> View Profile </i> </Link> </li>
                    <li> 
                        <a href="#Users" className="feat-btn" onClick={handleFbtn}>
                            <i className="fa fa-users"> Users <span className={fbtn ? "fa fa-caret-down first" : ["fa fa-caret-down first", "rotate"].join(' ')}> </span> </i> 
                        </a>
                        <ul className={fbtn ? "feat-show" : ["feat-show", "show"].join(' ')}>
                            <li>
                                <Link to= "#addusers" className="user-btn" onClick={handleUbtn}> 
                                    <i className="fa fa-user-plus"> Add Users <span className={ubtn ? "fa fa-caret-down second" : ["fa fa-caret-down second", "rotate"].join(' ')}> 
                                    </span> </i> 
                                </Link> 
                                <ul className={ubtn ? "user-show" : ["user-show", "show1"].join(' ')}> 
                                    <li><a href="/admin/create/admin/users"><i className="fa fa-user-plus"> Admin </i></a></li>
                                    <li><a href="/admin/create/employee/users"><i className="fa fa-user-plus"> Employee </i></a></li>
                                    <li><a href=" "><i className="fa fa-user-plus"> Customer </i></a></li>
                                </ul>

                            </li>

                            <li> <Link to= "/admin/dashboard/allUserList"> <i className="fa fa-list"> All Users List </i> </Link> </li>    
                        
                        </ul>
                    </li> 
                    <li>
                        <Link to= "#request" className="req-btn"  onClick={handleRbtn} > 
                            <i  className="fa fa-paper-plane"> Requests <span className="fa fa-caret-down third">
                            </span></i> 
                        </Link>
                        <ul className={rbtn ? "req-show" : ["req-show", "show3"].join(' ')}>
                            <li> <Link to= "/admin/customer/requests"> <i className="fa fa-users"> Account Request </i> </Link> </li>
                            <li> <Link to= "/admin/loan/requests"> <i className="fa fa-users"> Loan Request </i> </Link> </li>
                        </ul> 
                    </li>
                    
                    <li> <Link to= "/admin/history"><i className="fa fa-history"> History</i> </Link> </li>
                    <li> <Link to= "/admin/news/create"><i className="fa fa-upload"> News</i> </Link> </li>
                </ul>
              

            
            </div>
        </div>
    );
   
}



export default SideBar;