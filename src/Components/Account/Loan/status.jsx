import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import swal from 'sweetalert';
import styles from '../Dashboard/dashboard.module.css';
import StatusItem from './statusitem';

const AccountLoanStatus = () => {

    const[loanreqs, setLoanreqs] = useState([]);

    useEffect(() => {
        document.title = "Loan Status Check";
        handleLoanData();
    }, []);

    const handleLoanData = async() => {
        const response = await axios.get(["account-loan-status",localStorage.getItem('customerId')].join('/'));
        //console.log(response);
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
            setLoanreqs(response.data.loanreqs);
        }
    }

    if(loanreqs.length > 0)
    {
        return(
            <div className={styles.flexContainerDash}>
                <div className={styles.flexItemDash} style={{ width: '85%', marginLeft:'150px' }}>
                    <table id="transactions" className="table table-condensed">
                        <thead>
                            <tr style={{ backgroundColor: '#263238', color: 'white' }}>
                                <td>
                                    Loan Requests:
                                </td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th>Loan Request Date</th>
                                <th>Loan Type</th>
                                <th>Loan Amount</th>
                                <th>Loan Status</th>
                                <th></th>
                            </tr>
                            {loanreqs.map(l=>(
                                <StatusItem id={l.id} created_at={new Date(l.created_at)} loantype={l.loantype} loanamount={l.loanamount} loanrequeststatus={l.loanrequeststatus} key={l.id} />
                            ))}
                        </tbody>
                    </table>
                    
                    <div className="col-md-3 col-sm-4" style={{ margin: 'auto', marginRight: '0px' }}>
                        <Link to='/account/dashboard'><strong className="btn btn-outline-dark">Go Back</strong></Link>
                    </div>
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
                                    Loan Requests:
                                </td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th>Loan Request Date</th>
                                <th>Loan Type</th>
                                <th>Loan Amount</th>
                                <th>Loan Status</th>
                                <th></th>
                            </tr>
                            <tr>
                                <td>
                                    No loan Record Found
                                </td>
                                <td></td>
                            </tr>
                        </tbody>
                    </table>
                    
                    <div className="col-md-3 col-sm-4" style={{ margin: 'auto', marginRight: '0px' }}>
                        <Link to='/account/dashboard'><strong className="btn btn-outline-dark">Go Back</strong></Link>
                    </div>
                </div>
            </div>
        );
    }
}
export default AccountLoanStatus;