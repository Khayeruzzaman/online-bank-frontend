import React from "react";
import Navbar from "./navbar";
import { Link } from 'react-router-dom';



const SideBar = () =>{

    return(
        <div>
            <Navbar />
            <link href="/assets/admin/css/sideBar.css" rel="stylesheet" type="text/css" />
            
            <div className="col-md-1" id ='dashboard'>


                <h2 id="admin"> Admin Panel </h2>

                <ul>
                    <li> <Link to= "/admin/dashboard"> <i className="fa fa-reorder"> Dashboard </i> </Link> </li>
                    <li> <Link to= "/admin/viewprofile"> <i className="fa fa-user-circle"> View Profile </i> </Link> </li>
                    <li> 
                        <a href="#Users" className="feat-btn">
                            <i className="fa fa-users"> Users <span className="fa fa-caret-down first"> </span> </i> 
                        </a>
                        <ul className="feat-show">
                            <li>
                                <a href= "{}" className="user-btn"> 
                                    <i className="fa fa-user-plus"> Add Users <span className="fa fa-caret-down second"> 
                                    </span> </i> 
                                </a> 
                                <ul className="user-show"> 
                                    <li><a href=" "><i className="fa fa-user-plus"> Admin </i></a></li>
                                    <li><a href=" "><i className="fa fa-user-plus"> Employee </i></a></li>
                                    <li><a href=" "><i className="fa fa-user-plus"> Customer </i></a></li>
                                </ul>

                            </li>

                            <li> <a href= " "> <i className="fa fa-list"> All Users List </i> </a> </li>    
                        
                        </ul>
                    </li> 
                    <li>
                        <a href= " " className="req-btn"> 
                            <i className="fa fa-paper-plane"> Requests <span className="fa fa-caret-down third">
                            </span></i> 
                        </a>
                        <ul className="req-show">
                            <li> <a href= " "> <i className="fa fa-users"> Account Request </i> </a> </li>
                            <li> <a href= " "> <i className="fa fa-users"> Loan Request </i> </a> </li>
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