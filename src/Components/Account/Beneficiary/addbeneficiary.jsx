import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import swal from 'sweetalert';
import styles from '../Dashboard/dashboard.module.css';

const AddBeneficiary = () => {
    
    const hiss = useHistory();
    const[errmsg, setErrmsg] = useState([]);
    const[bennam, setBennam] = useState('');
    const[benaccnam, setBenaccnam] = useState('');

    useEffect(() => {
        document.title = "Add Beneficiary Account";
        if(localStorage.getItem('customerId')){
            
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
    }, []);

    const addAttempt = async (e) => {
        e.preventDefault();
        var obj = {
            'beneficiaryname': bennam,
            'beneficiaryaccountname': benaccnam,
            'id': localStorage.getItem('customerId'),
        };

        const response = await axios.post("account-add-beneficiary", obj);

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
        else if(response.data.ben_validation_error){
            setErrmsg(response.data.ben_validation_error);
            console.log(errmsg);
        }
        else{
            if(response.data.ben_error){
                swal({
                    title: "Invalid Attempt!",
                    text: response.data.ben_error,
                    icon: "error",
                  });
            }
            else if(response.data.bensuccess)
            {
                swal({
                    title: "Beneficiary Added Successfully!",
                    icon: "success",
                  });
                hiss.push('/account/beneficiary/List');
            }
        }
    }

    return(
        <div className={styles.flexContainerDash}>
            <div className={styles.flexItemDash} style={{ width: '85%', marginLeft:'150px' }}>
                <form class="form form-control" onSubmit={addAttempt}>
                    <table id="transactions" class="table table-condensed">
                        <thead>
                            <tr style={{ backgroundColor: '#263238', color: 'white' }}>
                                <td>
                                    Add Beneficiary:
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
                                    <input type="text" class="form form-control" onChange={(event)=>setBennam(event.target.value)} name="beneficiaryname" id="beneficiaryname" style={{ borderBottom: '2px solid black' }} placeholder="Beneficiary Name" />
                                </td>

                                    <td>
                                        <span class="text text-danger" id="validation_msg">{errmsg.beneficiaryname}</span>
                                    </td>

                            </tr>
                            <tr>
                                <td>
                                    Beneficiary Account Name:
                                </td>
                                <td>
                                    <input type="text" class="form form-control" onChange={(event)=>setBenaccnam(event.target.value)} name="beneficiaryaccountname" id="beneficiaryaccountname" style={{ borderBottom: '2px solid black' }} placeholder="Beneficiary Account Name" />
                                </td>

                                    <td>
                                        <span class="text text-danger" id="validation_msg">{errmsg.beneficiaryaccountname}</span>
                                    </td>

                            </tr>
                        </tbody>
                    </table>
                    <br />
                    <div class="col-md-3 col-sm-4" style={{ margin: 'auto', marginRight: '0px' }}>
                        <button type="submit" class="btn btn-outline-dark">Add To Beneficiary</button>
                        <Link to='/account/dashboard'><strong class="btn btn-outline-dark">Go Back</strong></Link>
                        <br /><br /><br /><br />
                    </div>
                </form>
            </div>
        </div>
    );
}
export default AddBeneficiary;