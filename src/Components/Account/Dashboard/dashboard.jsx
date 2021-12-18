import axios from 'axios';
import React, { useEffect, useState } from 'react';
import swal from 'sweetalert';
import styles from './dashboard.module.css';

const AccountDashboard = () => {

    const[dashboardData, setDashboardData] = useState([]);

    const handledashboardData = async() => {
        const response = await axios.get(["account-dashboard",localStorage.getItem('customerId')].join('/'));
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
            setDashboardData({
                name: response.data.name,
                balance: response.data.balance,
                ben: response.data.bencount,
                date: response.data.date,
                type: response.data.history.credit!=0 ? "credit" : "debit",
                amount: response.data.history.credit!=0 ? response.data.history.credit : response.data.history.debit,
                remarks: response.data.history.remarks,
            });
        }
    }

    useEffect(() => {
        document.title = "Account Dashboard";
        if(localStorage.getItem('customerId')){
            handledashboardData();
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

    return(
        <div>
            <div className={styles.flexContainerDash}>
                <div className={styles.flexItemDash}>
                    <h1 id="customeriddash">
                        Welcome, {dashboardData.name}!
                    </h1>
                    <p id="customeriddash">
                        &#9656; Balance (BDT): {dashboardData.balance}/-
                        <br />&#9656; You have {dashboardData.ben} beneficiaries.
                        <br />&#9656; Your last transection ({dashboardData.type}) of TK. {dashboardData.amount} on {dashboardData.date}, was: {dashboardData.remarks}.
                    </p>
                </div>
            </div>
        </div>
    );
}
export default AccountDashboard;