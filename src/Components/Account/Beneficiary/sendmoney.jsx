import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useHistory, useParams } from 'react-router-dom';
import swal from 'sweetalert';
import styles from '../Dashboard/dashboard.module.css';

const SendMoney = () => {

    const{name, accname} = useParams();
    const[amount, setAmount] = useState();
    const[pass, setPass] = useState('');
    const[errmsg, setErrmsg] = useState([]);
    const hiss = useHistory();

    useEffect(() => {
        document.title = "Send Money";
    }, []);

    const sendAttempt = async (e) => {
        e.preventDefault();
        var obj = {
            'amount': amount,
            'password': pass,
            'id': localStorage.getItem('customerId'),
            'bid': accname,
        };

        const response = await axios.post("account-send-money", obj);
        console.log(response);
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
        else if(response.data.sm_validation_error){
            setErrmsg(response.data.sm_validation_error);
            console.log(errmsg);
        }
        else{
            if(response.data.sm_error){
                swal({
                    title: "Sorry!",
                    text: response.data.sm_error,
                    icon: "error",
                });
            }
            else if(response.data.smsuccess)
            {
                swal({
                    title: "Amount Transferred Successfully!",
                    icon: "success",
                });
                hiss.push('/account/my-transections');
            }
        }
    }

    return(
        <div className={styles.flexContainerDash}>
            <div className={styles.flexItemDash} style={{ width: '85%', marginLeft:'150px' }}>
                <form className="form form-control" onSubmit={sendAttempt}>
                    <table id="transactions" className="table table-condensed">
                        <thead>
                            <tr style={{ backgroundColor: '#263238', color: 'white' }}>
                                <td>
                                    Transfer Fund:
                                </td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>
                                    Beneficiary Name:
                                </td>
                                <td>
                                    { name }
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    Beneficiary Account Name:
                                </td>
                                <td>
                                    { accname }
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    Tranfer Amount:
                                </td>
                                <td>
                                    <input type="text" className="form form-control" onChange={(event)=>setAmount(event.target.value)} name="amount" id="amount" style={{ borderBottom: '2px solid black' }} placeholder="Amount" />
                                </td>

                                    <td>
                                        <span className="text text-danger" id="validation_msg">{errmsg.amount}</span>
                                    </td>

                            </tr>
                            <tr>
                                <td>
                                    Your Password:
                                </td>
                                <td>
                                    <input type="password" className="form form-control" onChange={(event)=>setPass(event.target.value)} name="password" id="password" style={{ borderBottom: '2px solid black' }} placeholder="Enter Password" />
                                </td>

                                    <td>
                                        <span className="text text-danger" id="validation_msg">{errmsg.password}</span>
                                    </td>

                            </tr>
                        </tbody>
                    </table>
                    <br />
                    <div className="col-md-3 col-sm-4" style={{ margin: 'auto', marginRight: '0px' }}>
                        <button type="submit" className="btn btn-outline-dark">Send</button>
                        <Link to='/account/beneficiary/List'><strong className="btn btn-outline-dark">Go Back</strong></Link>
                        <br /><br /><br /><br />
                    </div>
                </form>
            </div>
        </div>
    );
}
export default SendMoney;