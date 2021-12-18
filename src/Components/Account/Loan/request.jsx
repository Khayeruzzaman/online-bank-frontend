import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import swal from 'sweetalert';
import styles from '../Dashboard/dashboard.module.css';
import OptionValue from './options';
import TypeRow from './typerow';

const AccountLoanRequest = () => {

    const[loantype, setLoanType] = useState([]);
    const[ltype, setLtype] = useState('');
    const[lamount, setLamount] = useState('');
    const[ldoc, setLdoc] = useState();
    const[pass, setPass] = useState('');
    const[errmsg, setErrmsg] = useState([]);
    const hiss = useHistory();

    
    const loanreqAttempt = async (e) => {
        e.preventDefault();
        const obj = new FormData();
        if(ldoc != null){ obj.append('loandoc', ldoc); }
        if(ltype != ''){ obj.append('loantype', ltype); }
        if(lamount != ''){ obj.append('amount', lamount); }
        if(pass != ''){ obj.append('password', pass); }
        obj.append('id', localStorage.getItem('customerId'));
        //console.log(ltype);

        const response = await axios.post("account-loan-request", obj);
        console.log(obj);
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
        else if(response.data.lreq_validation_error){
            setErrmsg(response.data.lreq_validation_error);
            console.log(errmsg);
        }
        else{
            if(response.data.lreq_error){
                swal({
                    title: "Sorry!",
                    text: response.data.lreq_error,
                    icon: "error",
                });
            }
            else if(response.data.lreqSuccess)
            {
                swal({
                    title: "Loan Request Placed. Please, Wait until the approval...",
                    icon: "success",
                  });
                hiss.push('/account/loan/status');
            }
        }
    }

    useEffect(() => {
        document.title = "Loan Request Form"
        
        if(localStorage.getItem('customerId')){
            axios.get("loan-types")
        .then(response=>{
            setLoanType(response.data);
        }).catch(error=>{
            console.log(error);
        });
        }
        else{
            swal("Please Login First!!!", {
                buttons: {
                  cancel: "Go Home",
                  Login: true,
                },
              })
              .then((value) => {
                switch (value) {
               
                  case "Login":
                    window.location.href = '/login';
                    break;
               
                  default:
                    window.location.href = '/';
                }
              });
        }
    }, [])

    if(loantype.length > 0){
        return(
            <div className={styles.flexContainerDash}>
                <div className={styles.flexItemDash} style={{ width: '85%', marginLeft:'150px' }}>
                    <table id="transactions" className="table table-condensed">
                        <thead>
                            <tr style={{ backgroundColor: '#263238', color: 'white' }}>
                                <td>
                                    Available Loan Types:
                                </td>
                                <td></td>
                            </tr>
                        </thead>
    
                        <tbody>
                            {loantype.map(l=>(
                                <TypeRow type = {l.type} rate = {l.rate} key={l.id} />
                            ))}
                        </tbody>
                    </table>
                    <form className="form form-control" encType="multipart/form-data" onSubmit={loanreqAttempt}>
                        <table id="transactions" className="table table-condensed">
                            <thead>
                                <tr style={{ backgroundColor: '#263238', color: 'white' }}>
                                    <td>
                                        Request Loan:
                                    </td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>
                                        Loan Type:
                                    </td>
                                    <td>
                                        <select className="form form-control" onChange={(event)=>setLtype(event.target.selectedOptions[0].value)} name="loantype" id="loantype" style={{ border: '2px solid black', textAlign: 'center' }}>
                                            <option hidden disabled selected>--Select a Loan Type--</option>

                                                {loantype.map(l=>(
                                                    <OptionValue type = {l.type} key = {l.id} />
                                                ))}
    
                                        </select>
                                    </td>
    
                                        <td>
                                            <span className="text text-danger" id="validation_msg">{errmsg.loantype}</span>
                                        </td>
    
                                </tr>
                                <tr>
                                    <td>
                                        Loan Amount:
                                    </td>
                                    <td>
                                        <input type="text" className="form form-control" onChange={(event)=>setLamount(event.target.value)} name="amount" id="amount" style={{ borderBottom: '2px solid black' }} placeholder="Amount" />
                                    </td>
    
                                        <td>
                                            <span className="text text-danger" id="validation_msg">{errmsg.amount}</span>
                                        </td>
    
                                </tr>
                                <tr>
                                    <td>
                                        Loan Document:
                                    </td>
                                    <td>
                                        <input type="file" className="form form-control" onChange={(event)=>setLdoc(event.target.files[0])} name="loandoc" id="loandoc" style={{ border: '2px solid black', backgroundColor: 'rgba(0, 0, 0, 0.096)' }} />
                                    </td>
    
                                        <td>
                                            <span className="text text-danger" id="validation_msg">{errmsg.loandoc}</span>
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
                            <button type="submit" className="btn btn-outline-dark">Place Request</button>
                            <Link to='/account/dashboard'><strong className="btn btn-outline-dark">Go Back</strong></Link>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
    else{
        return(
            <div className={styles.flexContainerDash}>
                <div className={styles.flexItemDash} style={{ width: '85%', marginLeft:'150px' }}>
                    <table id="transactions" className="table table-condensed">
                        <thead>
                            <tr style={{ backgroundColor: '#263238', color: 'white' }}>
                                <td>
                                    Available Loan Types:
                                </td>
                                <td></td>
                            </tr>
                        </thead>
    
                        <tbody>
                            <tr>
                                <td>
                                    No loan Record Found
                                </td>
                                <td></td>
                            </tr>
                        </tbody>
    
                        
                    </table>
                </div>
            </div>
        );
    }
}
export default AccountLoanRequest;