import axios from 'axios';
import React, { useState, useEffect } from 'react';
import swal from 'sweetalert';
import styles from './allbeneficiary.module.css';
import BeneficiaryItem from './beneficiaryitem';

const AllBeneficiaryList = () => {

    const[benData, setBenData] = useState([]);

    useEffect(() => {
        document.title = "Beneficiary List";
        handlebenData();
    }, []);

    const handlebenData = async() => {
        const response = await axios.get(["account-beneficiary-list",localStorage.getItem('customerId')].join('/'));
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
            console.log(response.data.benlist);
            setBenData(response.data.benlist);
        }
    }

    if(benData.length > 0){
        return(
            <div className={styles.flexContainerBen}>
                <p id="infoben">Transfer Funds to a Beneficiary</p>
                {benData.map(b=>(
                        <BeneficiaryItem name = {b.beneficiaryname} accname = {b.accountname} benaccid = {b.beneficiaryaccountid} benid = {b.id} key={b.id} />
                ))}
            </div>
        );
    }
    else{
        return(
            <div className={styles.flexContainerBen}>
                <p id="infoben">Transfer Funds to a Beneficiary</p>
                    
                    <div className={styles.flexItemBen}>
                        <div className={styles.flexItemBen2}>
                            <p id="nameben">Sorry</p>
                            <br />
                            <p id="acnoben">You have no beneficiaries</p>
                        </div>
                    </div>
            </div>
        );
    }
}
export default AllBeneficiaryList;