import React from "react";



const Navbar = () =>{

    return(
        <div style={{backgroundImage: 'assets/image/background_images/back1.png'}}>

            
            <link href="/assets/admin/css/navbar.css" rel="stylesheet" type="text/css" />

            <nav className="navbar" style={{textTransform: "uppercase", backgroundColor: "#252525"}}>
	
                <div className="container-fluid" style={{justifyContent: "end"}}>
                    
                    <ul className="nav justify-content-end" id="navA">

                    <li className="nav-item">
                        <a className="nav-link"  href=" ">Admin Name</a>
                    </li>

                    <li className="nav-item">
                        <a className="nav-link" href=" "> Logout </a>
                    </li>
                    </ul>
                    
                </div>


            </nav>
        </div>
    );

}

export default Navbar;