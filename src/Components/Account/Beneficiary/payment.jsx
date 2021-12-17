import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import swal from 'sweetalert';
import styles from '../Dashboard/dashboard.module.css';

const ExternalPayment = () => {

    const[pcode, setPcode] = useState();
    const[rmrk, setRmrk] = useState();
    const[amount, setAmount] = useState();
    const[pass, setPass] = useState('');
    const[errmsg, setErrmsg] = useState([]);
    const hiss = useHistory();

    useEffect(() => {
        document.title = "Payment";
    }, []);

    const payAttempt = async (e) => {
        e.preventDefault();
        var obj = {
            'paymentcode': pcode,
            'remarks': rmrk,
            'amount': amount,
            'password': pass,
            'id': localStorage.getItem('customerId'),
        };

        const response = await axios.post("account-payment", obj);
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
        else if(response.data.pay_validation_error){
            setErrmsg(response.data.pay_validation_error);
            console.log(errmsg);
        }
        else{
            if(response.data.payerror){
                swal({
                    title: "Sorry!",
                    text: response.data.payerror,
                    icon: "error",
                });
            }
            else if(response.data.paysuccess)
            {
                swal({
                    title: "Payment Successful!",
                    icon: "success",
                });
                hiss.push('/account/my-transections');
            }
        }
    }

    return(
        <div className={styles.flexContainerDash}>
            <div className={styles.flexItemDash} style={{ width: '85%', marginLeft:'150px' }}>
                <form class="form form-control" onSubmit={payAttempt}>
                    <table id="transactions" class="table table-condensed">
                        <thead>
                            <tr style={{ backgroundColor: '#263238', color: 'white' }}>
                                <td>
                                    Payment:
                                </td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>
                                    Payment code:
                                </td>
                                <td>
                                    <input type="text" class="form form-control" onChange={(event)=>setPcode(event.target.value)} name="paymentcode" id="paymentcode" style={{ borderBottom: '2px solid black' }} placeholder="Payment Code" />
                                </td>

                                    <td>
                                        <span class="text text-danger" id="validation_msg">{errmsg.paymentcode}</span>
                                    </td>

                            </tr>
                            <tr>
                                <td>
                                    Remarks:
                                </td>
                                <td>
                                    <input type="text" class="form form-control" onChange={(event)=>setRmrk(event.target.value)} name="remarks" id="remarks" style={{ borderBottom: '2px solid black' }} placeholder="Remarks (Optional)" />
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    Payment Amount:
                                </td>
                                <td>
                                    <input type="text" class="form form-control" onChange={(event)=>setAmount(event.target.value)} name="amount" id="amount" style={{ borderBottom: '2px solid black' }} placeholder="Amount" />
                                </td>

                                    <td>
                                        <span class="text text-danger" id="validation_msg">{errmsg.amount}</span>
                                    </td>

                            </tr>
                            <tr>
                                <td>
                                    Your Password:
                                </td>
                                <td>
                                    <input type="password" class="form form-control" onChange={(event)=>setPass(event.target.value)} name="password" id="password" style={{ borderBottom: '2px solid black' }} placeholder="Enter Password" />
                                </td>

                                    <td>
                                        <span class="text text-danger" id="validation_msg">{errmsg.password}</span>
                                    </td>

                            </tr>
                        </tbody>
                    </table>
                    <br />
                    <div class="col-md-3 col-sm-4" style={{ margin: 'auto', marginRight: '0px' }}>
                        <button type="submit" class="btn btn-outline-dark">Pay</button>
                        <a href="{{ route('account.dashboard') }}"><strong class="btn btn-outline-dark">Go Back</strong></a>
                    </div>
                </form>
            </div>
        </div>
    );
}
export default ExternalPayment;