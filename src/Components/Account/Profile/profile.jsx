import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import swal from 'sweetalert';
import styles from '../Dashboard/dashboard.module.css';

const AccountProfile = () => {

    const[accountdetails, setAccountdetails] = useState([]);
    const[userdetails, setUserdetails] = useState([]);
    const[createtime, setCreatetime] = useState("");

    const handleprofileData = async() => {
        const response = await axios.get(["account-profile",localStorage.getItem('customerId')].join('/'));
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
                    localStorage.removeItem("customerId");
                    localStorage.removeItem("customerBankId");
                    localStorage.removeItem("customerName");
                    localStorage.removeItem("customerPic");
                    localStorage.removeItem("userkey");
                    window.location.href = '/login';
                    break;
               
                  default:
                    localStorage.removeItem("customerId");
                    localStorage.removeItem("customerBankId");
                    localStorage.removeItem("customerName");
                    localStorage.removeItem("customerPic");
                    localStorage.removeItem("userkey");
                    window.location.href = '/';
                }
              });
        }
        else{
            setAccountdetails(response.data.accountdetails);
            setUserdetails(response.data.user);
            setCreatetime(response.data.created);
        }
    }

    useEffect(() => {
        document.title = "Profile Details";
        handleprofileData();
      }, []);

    return(
        <div className={styles.flexContainerDash}>
            <div className={styles.flexItemDash} style={{ width: '85%', marginLeft:'150px' }}>
                <div className="col-md-2 col-sm-4" style={{ margin: 'auto', marginRight: '0px' }}>
                    <img src={["http://127.0.0.1:8000/storage/account/profilepictures/",userdetails.userprofilepicture].join('')} id="user_profile_img" style={{ maxHeight: '200px', maxWidth:'200px', border:'2px solid black', borderRadius:'20px' }} />
                </div>
                <br />
                <table id="transactions" className="table table-condensed">
                    <thead>
                         <tr style={{ backgroundColor: '#263238', color: 'white' }}>
                            <td>
                                Personal Details:
                            </td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                    </thead>
                   
                    <tbody>
                        <tr>
                            <td style={{ backgroundColor: '#263238', color: 'white' }}>
                                First Name:
                            </td>
                            <td>
                                {userdetails.firstname} 
                            </td>
                            <td style={{ backgroundColor: '#263238', color: 'white' }}>
                                Last Name:
                            </td>
                            <td>
                                {userdetails.lastname}
                            </td>
                        </tr>
                        <tr>
                            <td style={{ backgroundColor: '#263238', color: 'white' }}>
                                Gender:
                            </td>
                            <td>
                                {userdetails.gender}
                            </td>
                            <td style={{ backgroundColor: '#263238', color: 'white' }}>
                                Date of Birth:
                            </td>
                            <td>
                                {userdetails.dateofbirth}
                            </td>
                        </tr>
                        <tr>
                            <td style={{ backgroundColor: '#263238', color: 'white' }}>
                                Phone Number:
                            </td>
                            <td>
                                {userdetails.phone}
                            </td>
                            <td style={{ backgroundColor: '#263238', color: 'white' }}>
                                Email:
                            </td>
                            <td>
                                {userdetails.email}
                            </td>
                        </tr>
                        <tr>
                            <td style={{ backgroundColor: '#263238', color: 'white' }}>
                                National Identity Number:
                            </td>
                            <td>
                                {userdetails.nid}
                            </td>
                            <td></td>
                            <td></td>
                        </tr>
                    </tbody>
                </table>

                <br />
                <table id="transactions" className="table table-condensed">
                    <thead>
                        <tr style={{ backgroundColor: '#263238', color: 'white' }}>
                            <td>
                                Account Details:
                            </td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td style={{ backgroundColor: '#263238', color: 'white' }}>
                                Account Name:
                            </td>
                            <td>
                                {accountdetails.accountname}
                            </td>
                        </tr>
                        <tr>
                            <td style={{ backgroundColor: '#263238', color: 'white' }}>
                                Account Type:
                            </td>
                            <td>
                                {accountdetails.accounttype}
                            </td>
                        </tr>
                        <tr>
                            <td style={{ backgroundColor: '#263238', color: 'white' }}>
                                Interest Rate:
                            </td>
                            <td>
                                {accountdetails.accountinterestrate }%
                            </td>
                        </tr>
                        <tr>
                            <td style={{ backgroundColor: '#263238', color: 'white' }}>
                                Account Balance:
                            </td>
                            <td>
                                {accountdetails.accountbalance }/- BDT
                            </td>
                        </tr>
                        <tr>
                            <td style={{ backgroundColor: '#263238', color: 'white' }}>
                                Account Created:
                            </td>
                            <td>
                                {createtime}
                            </td>
                        </tr>
                    </tbody>
                </table>
                <br />
                <table id="transactions" className="table table-condensed">
                    <thead>
                        <tr style={{ backgroundColor: '#263238', color: 'white' }}>
                            <td>Documents:</td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                <div className="col-md-8 col-sm-4" style={{ margin: 'auto', marginRight: '0px' }}>
                                    <img src={["http://127.0.0.1:8000/storage/account/accountdocuments/",accountdetails.accountdocument].join('')} id="user_profile_img" style={{ maxHeight: '400px', maxWidth:'400px', margin:'auto', marginRight:'0px', border:'2px solid black', borderRadius:'20px' }} />
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <br />
                <div className="col-md-3 col-sm-4" style={{ margin: 'auto', marginRight: '0px' }}>
                    <Link to='/account/profile/edit'><button className="btn btn-outline-dark">Edit Profile</button></Link>
                    <Link to='/account/profile/change-password'><button className="btn btn-outline-dark">Change Password</button></Link>
                    <br /><br /><br /><br />
                </div>
            </div>
        </div>
    );
}
export default AccountProfile;