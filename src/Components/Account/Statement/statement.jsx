import axios from 'axios';
import React, { useEffect, useState, useRef } from 'react';
import swal from 'sweetalert';
import styles from '../Dashboard/dashboard.module.css';
import { PDFExport } from "@progress/kendo-react-pdf";
import StateItem from './stateitem';

const AccountStatement = () => {

    const[history, setHistory] = useState([]);
    const pdfExportComponent = useRef(null);
    
    const pdfGenerate = (e) =>{
        pdfExportComponent.current.save();
    }

    const handleHistorydData = async() => {
        const response = await axios.get(["account-history",localStorage.getItem('customerId')].join('/'));
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
            setHistory(response.data.history);
        }
    }

    const compareObjects = (object1, object2, key) => {
        const obj1 = object1[key];
        const obj2 = object2[key];

        if (obj1 < obj2) {
            return -1;
        }
        if (obj1 > obj2) {
            return 1;
        }
        return 0;
    }
    
    useEffect(() => {
        document.title = "E-Statement";
        
        if(localStorage.getItem('customerId')){
            handleHistorydData();
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
        //console.log(history);
      }, []);

    useEffect(() => {
    
    }, [history]);

    const historysortbydate = () => {
        const data = history.map(x => x);
        setHistory([]);
        data.sort((h1, h2) => { return compareObjects(h1, h2, 'historydate') })
        setHistory(data);
    }

    const historysortbyremark = () => {
        const data = history.map(x => x);
        setHistory([]);
        data.sort((h1, h2) => { return compareObjects(h1, h2, 'remarks') });
        setHistory(data);
    }

    const historysortbydebit = () => {
        const data = history.map(x => x);
        setHistory([]);
        data.sort((h1, h2) => { return compareObjects(h1, h2, 'debit') });
        setHistory(data);
    }

    const historysortbycredit = () => {
        const data = history.map(x => x);
        setHistory([]);
        data.sort((h1, h2) => { return compareObjects(h1, h2, 'credit') });
        setHistory(data);
    }

    if(history.length > 0){
        return(
            <div className={styles.flexContainerDash}>
                <div className={styles.flexItemDash} style={{ width: '85%', marginLeft:'150px' }}>
                    <button className='btn btn-outline-danger col-sm-12' onClick={pdfGenerate}>Download E-Statement</button>
                    <PDFExport ref = {pdfExportComponent} paperSize = "A2">
                    <div style={{ marginLeft: '50px', marginTop:'100px' }}>
                    <center><h1>Castle Internet Bank</h1></center><br />
                    <h5>Account Holder's Name: {localStorage.getItem('customerName')}</h5>
                    <h6>Download Time: {String(new Date())}</h6>
                    
                    <table id="transactions" className="table table-hover">
                        <thead>
                            <th><div onClick={historysortbydate}>Date & Time (+6.00)  <i className="fas fa-sort" style={{ fontSize: '20px', justifyContent:'right' }}></i></div></th>
                            <th><div onClick={historysortbyremark}>Remarks  <i className="fas fa-sort" style={{ fontSize: '20px', justifyContent:'right' }}></i></div></th>
                            <th><div onClick={historysortbydebit}>Debit (TK)  <i className="fas fa-sort" style={{ fontSize: '20px', justifyContent:'right' }}></i></div></th>
                            <th><div onClick={historysortbycredit}>Credit (TK)  <i className="fas fa-sort" style={{ fontSize: '20px', justifyContent:'right' }}></i></div></th>
                        </thead>
                        <tbody>
                        {history.map(h=>(
                        <StateItem created_at={new Date(h.created_at)} remarks={h.remarks} debit={h.debit} credit={h.credit} key={h.id} />
                        ))}
                        </tbody>
                    </table>
                    <center>---------------------------------------------------------------------End of Statement---------------------------------------------------------------------</center>
                    </div>
                    </PDFExport>
                </div>
            </div>
        );
    }
    else{
        return(
            <div className={styles.flexContainerDash}>
                <div className={styles.flexItemDash} style={{ width: '85%', marginLeft:'150px' }}>
                    <p id="none"> No results found :(</p>
                </div>
            </div>
        );
    }
}
export default AccountStatement;