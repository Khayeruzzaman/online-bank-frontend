import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import swal from 'sweetalert';
import styles from '../Dashboard/dashboard.module.css';

const ChangeAccountPassword = () => {

    const[opss, setOpss] = useState('');
    const[pss, setPss] = useState('');
    const[pssc, setPssc] = useState('');
    const[errmsg, setErrmsg] = useState([]);

    const hiss = useHistory();

    useEffect(() => {
        document.title = "Change Account Password";
    }, []);

    const passAttempt = async (e) => {
        e.preventDefault();
        var obj = {
            'oldpassword': opss,
            'password': pss,
            'password_confirmation': pssc,
            'id': localStorage.getItem('customerId'),
        };

        const response = await axios.post("account-profile/change-password", obj);

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
        else if(response.data.pass_validation_error){
            setErrmsg(response.data.pass_validation_error);
            console.log(errmsg);
        }
        else{
            if(response.data.pass_error){
                swal({
                    title: "Invalid Password!",
                    text: response.data.pass_error,
                    icon: "error",
                  });
            }
            else if(response.data.passsuccess)
            {
                swal({
                    title: "Password Changed",
                    icon: "success",
                  });
                hiss.push('/account/profile');
            }
        }
    }

    return(
        <div className={styles.flexContainerDash}>
            <div className={styles.flexItemDash} style={{ width: '85%', marginLeft:'150px' }}>
                <form className="form form-control" onSubmit={passAttempt}>
                    <table id="transactions" className="table table-condensed">
                        <thead>
                            <tr style={{ backgroundColor: '#263238', color: 'white' }}>
                                <td>
                                    Change Password:
                                </td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>
                                    Old Password:
                                </td>
                                <td>
                                    <input type="password" className="form form-control" onChange={(event)=>setOpss(event.target.value)} name="oldpassword" id="oldpassword" style={{ borderBottom: '2px solid black' }} placeholder="Old Password" />
                                </td>

                                <td>
                                    <span className="text text-danger" id="validation_msg">{errmsg.oldpassword}</span>
                                </td>

                            </tr>
                            <tr>
                                <td>
                                    New Password:
                                </td>
                                <td>
                                    <input type="password" className="form form-control" onChange={(event)=>setPss(event.target.value)} name="password" id="password" style={{ borderBottom: '2px solid black' }} placeholder="New Password" />
                                </td>

                                <td>
                                    <span className="text text-danger" id="validation_msg">{errmsg.password}</span>
                                </td>

                            </tr>
                            <tr>
                                <td>
                                    Confirm New Password:
                                </td>
                                <td>
                                    <input type="password" className="form form-control" onChange={(event)=>setPssc(event.target.value)} name="password_confirmation" id="password_confirmation" style={{ borderBottom: '2px solid black' }} placeholder="Confirm New Password" />
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <br />
                    <div className="col-md-3 col-sm-4" style={{ margin: 'auto', marginRight: '0px' }}>
                        <button type="submit" className="btn btn-outline-dark">Change Password</button>
                        <Link to='/account/profile'><strong className="btn btn-outline-dark">Go Back</strong></Link>
                        <br /><br /><br /><br />
                    </div>
                </form>
            </div>
        </div>
    );
}
export default ChangeAccountPassword;