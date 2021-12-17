import axios from 'axios';
import React, { useEffect, useState } from 'react';
import swal from 'sweetalert';
import styles from '../Dashboard/dashboard.module.css';
import TransectionItem from './historyitem';

const MyTransections = () => {

    const[history, setHistory] = useState([]);

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
        document.title = "My Transections";
        handleHistorydData();
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
                    <table id="transactions" className="table table-hover">
                        <thead>
                            <th><div onClick={historysortbydate}>Date & Time (+6.00)  <i className="fas fa-sort" style={{ fontSize: '20px', justifyContent:'right' }}></i></div></th>
                            <th><div onClick={historysortbyremark}>Remarks  <i className="fas fa-sort" style={{ fontSize: '20px', justifyContent:'right' }}></i></div></th>
                            <th><div onClick={historysortbydebit}>Debit (TK)  <i className="fas fa-sort" style={{ fontSize: '20px', justifyContent:'right' }}></i></div></th>
                            <th><div onClick={historysortbycredit}>Credit (TK)  <i className="fas fa-sort" style={{ fontSize: '20px', justifyContent:'right' }}></i></div></th>
                        </thead>
                        <tbody>
                        {history.map(h=>(
                        <TransectionItem created_at={new Date(h.created_at)} remarks={h.remarks} debit={h.debit} credit={h.credit} key={h.id} />
                        ))}
                        </tbody>
                    </table>
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
export default MyTransections;