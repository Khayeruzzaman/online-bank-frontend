import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import swal from 'sweetalert';
import styles from '../Dashboard/dashboard.module.css';
import classes from './edit.module.css';

const EditAccountProfile = () => {

    const[accountdetails, setAccountdetails] = useState([]);
    const[userdetails, setUserdetails] = useState([]);
    const[createtime, setCreatetime] = useState("");
    const[errmsg, setErrmsg] = useState([]);
    const[pcss, setPcss] = useState(classes.blcss);

    const[prpc, setPrpc] = useState();
    const[phn, setPhn] = useState('');
    const[eml, setEml] = useState('');
    const[acnm, setAcnm] = useState('');

    const hiss = useHistory();

    const changepcss = () => {
        setPcss(classes.discss);
    }

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
            //setPhn(userdetails.phone);
        }
    }

    useEffect(() => {
        document.title = "Edit Profile";
        handleprofileData();
    }, []);

    const editAttempt = async (e) => {
        e.preventDefault();
        const obj = new FormData();
        console.log(prpc);
        if(prpc != null)
        {
            obj.append('profilepicture', prpc);
        }
        if(phn != ''){ obj.append('phone', phn); }
        if(eml != ''){ obj.append('email', eml); }
        if(acnm != ''){ obj.append('accountname', acnm); }
        
        obj.append('id', localStorage.getItem('customerId'));
        console.log(obj);

        const response = await axios.post("account-profile/edit", obj);
        console.log(obj);
        if(response.data.edit_validation_error){
            setErrmsg(response.data.edit_validation_error);
            console.log(errmsg);
        }
        else{
            if(response.data.editsuccess){
                swal({
                    title: "Profile Updated",
                    icon: "success",
                  });
                //localStorage.removeItem('customerPic');
                if(response.data.editsuccess != "Success"){ localStorage.setItem('customerPic', response.data.editsuccess); }
                console.log(localStorage.getItem('customerPic'));
                hiss.push('/account/profile');
            }
        }
    }

    return(
        <div>
            <div className={styles.flexContainerDash}>
                <div className={styles.flexItemDash} style={{ width: '85%', marginLeft:'150px' }}>
                    <form className="form form-control" encType="multipart/form-data" onSubmit={editAttempt}>

                        <div className="col-md-3 col-sm-4" style={{ margin: 'auto', marginRight: '0px' }}>
                            <img src={["http://127.0.0.1:8000/storage/account/profilepictures/",userdetails.userprofilepicture].join('')} id="user_profile_img" style={{ maxHeight: '200px', maxWidth:'200px', border:'2px solid black', borderRadius:'20px' }} />
                            <br /><br />
                        </div>
                        <div className="col-md-3 col-sm-4" style={{ margin: 'auto', marginRight: '25px' }}>
                            <input type="file" onChange={(event)=>setPrpc(event.target.files[0])} name="profilepicture" className={pcss} id="profile" onClick={changepcss} />
                            <label for="profile"><strong className="btn btn-outline-dark">Change Profile picture</strong></label>
                            <br />
                            
                                    <span className="text text-danger" id="validation_msg">{errmsg.profilepicture}</span>
                            
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
                                    <td>
                                        First Name:
                                    </td>
                                    <td>
                                        {userdetails.firstname}
                                    </td>
                                    <td>
                                        Last Name:
                                    </td>
                                    <td>
                                        {userdetails.lastname}
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        Gender:
                                    </td>
                                    <td>
                                        {userdetails.gender}
                                    </td>
                                    <td>
                                        Date of Birth:
                                    </td>
                                    <td>
                                        {userdetails.dateofbirth}
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        Phone Number:
                                    </td>
                                    <td>
                                        {userdetails.phone}
                                    </td>
                                    <td>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        New Phone Number:
                                    </td>
                                    <td>
                                        <input type="text" className="form form-control" name="phone" id="phone" style= {{ borderBottom: '2px solid black' }} onChange={(event)=>setPhn(event.target.value)} value={phn} />
                                    </td>
                                    <td>
                                    
                                            <span className="text text-danger" id="validation_msg">{errmsg.phone}</span>
                                    
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        Email:
                                    </td>
                                    <td>
                                        {userdetails.email}
                                    </td>
                                    <td>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        New Email:
                                    </td>
                                    <td>
                                        <input type="text" className="form form-control" name="email" id="email" style= {{ borderBottom: '2px solid black' }} onChange={(event)=>setEml(event.target.value)} value={eml} />
                                    </td>
                                    <td>
                                    
                                            <span className="text text-danger" id="validation_msg">{errmsg.email}</span>
                                    
                                    </td>
                                </tr>
                                <tr>
                                    <td>
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
                                    <td>
                                        Account Name:
                                    </td>
                                    <td>
                                        {accountdetails.accountname}
                                    </td>
                                    <td>
                                    </td>
                                    
                                </tr>
                                <tr>
                                    <td>
                                        New Account Name:
                                    </td>
                                    <td>
                                        <input type="text" className="form form-control" name="accountname" id="accountname" style= {{ borderBottom: '2px solid black' }} onChange={(event)=>setAcnm(event.target.value)} value={acnm} />
                                    </td>
                                    
                                        <td>
                                            <span className="text text-danger" id="validation_msg">{errmsg.accountname}</span>
                                        </td>
                                    
                                </tr>
                                <tr>
                                    <td>
                                        Account Type:
                                    </td>
                                    <td>
                                        {accountdetails.accounttype}
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        Interest Rate:
                                    </td>
                                    <td>
                                        {accountdetails.accountinterestrate }%
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        Account Balance:
                                    </td>
                                    <td>
                                        {accountdetails.accountbalance }/- BDT
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        <br />
                        <div className="col-md-3 col-sm-4" style={{ margin: 'auto', marginRight: '0px' }}>
                            <button type="submit" className="btn btn-outline-dark">Update Profile</button>
                            <Link to='/account/profile'><button className="btn btn-outline-dark">Go Back</button></Link>
                            <br /><br /><br /><br />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
export default EditAccountProfile;