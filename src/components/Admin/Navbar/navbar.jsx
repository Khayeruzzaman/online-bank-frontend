import React from "react";
import swal from 'sweetalert';
import axios from 'axios';
import { Link } from "react-router-dom";

const Navbar = () =>{


    const handleLogout = () => {
        swal("Are you sure that you want to log out?", {
            icon: "warning",
            buttons: {
              cancel: "No",
              Yes: true,
            },
          })
          .then((value) => {
            switch (value) {
           
              case "Yes":
                axios.get(["apilogout", localStorage.getItem('userkey')].join('/'))
                .then(response=>{
                    localStorage.removeItem("AdminId");
                    localStorage.removeItem("BankId");
                    localStorage.removeItem("AdminName");
                    localStorage.removeItem("userkey");
                    window.location.href = '/login';
                }).catch(error=>{
                    console.log(error);
                });
                break;
           
              default:
                
            }
          });
    }

    return(
        
        <div >

            
            <link href="/assets/admin/css/navbar.css" rel="stylesheet" type="text/css" />

            <nav className="navbar" style={{textTransform: "uppercase", backgroundColor: "#252525"}}>
	
                <div className="container-fluid" style={{justifyContent: "end"}}>
                    
                    <ul className="nav justify-content-end" id="navA">

                    <li className="nav-item">
                        <Link className="nav-link"  to= {'/admin/viewprofile'}>{localStorage.getItem('AdminName')}</Link>
                    </li>

                    <li className="nav-item">
                        <a className="nav-link" href="#logout" onClick={handleLogout}> Logout </a>
                    </li>
                    </ul>
                    
                </div>


            </nav>
        </div>
    );

}

export default Navbar;