import axios from 'axios';
import React from 'react';
import swal from 'sweetalert';
import styles from './customernavbar.module.css';

const AccountNavbar = () => {

    const handleLogout = () => {
        swal("Areyou sure you want to log out?", {
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
                    localStorage.removeItem("customerId");
                    localStorage.removeItem("customerBankId");
                    localStorage.removeItem("customerName");
                    localStorage.removeItem("customerPic");
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
        <div className={styles.bodydiv}>
            <div className={styles.flexContainerHeaderTop}>
                <div className={styles.flexItemHeaderTop}>
                    <img src="http://127.0.0.1:8000/sysimages/logo.png" width="100" height="100" />
                </div>
                <div className={styles.flexItemHeader}>
                    <h1 id='acchead'><b>Castle Internet Bank</b></h1>
                </div>
            </div>




            <nav className="navbar" style={{ textTransform: 'uppercase', backgroundColor: '#263238' }} >
                
                <div className="container-fluid" style={{ justifyContent: 'end' }}>
                    <ul className="nav justify-content-end" style={{ marginRight:'auto', fontSize:'20px' }}>
                        <li className="nav-item">
                            <a className = "nav-link active"  href="#"><i className="fas fa-door-open" id={styles["navA"]}>&nbsp;Welcome {localStorage.getItem('customerName')} </i></a>
                        </li>
                    </ul>
                    <ul className="nav justify-content-end"  style={{ fontSize:'20px' }}>
                    <li className="nav-item">
                        <a className = "nav-link active"  href=""><img src={["http://127.0.0.1:8000/storage/account/profilepictures/",localStorage.getItem('customerPic')].join('')} style={{ maxHeight: '30px', maxWidth:'30px', border:'2px solid #263238', borderRadius:'20px' }} id={styles["navP"]} /><strong id={styles["navP"]}>&nbsp;Account Details</strong></a>
                    </li>

                    <li className="nav-item">
                        <a className="nav-link" onClick={handleLogout}><i className="fa fa-sign-out" id={styles["navlogout"]}>&nbsp;Log Out</i></a>
                    </li>
                    </ul>
                    
                </div>


            </nav>
        </div>
    );
}
export default AccountNavbar;