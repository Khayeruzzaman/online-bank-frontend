import React,{useEffect, useState} from "react";
import axios from "axios";
import SideBar from "../Navbar/sidebar";
import LoanReq from "./loan";

const LoanRequest = () => {

    const [loan, setLoan] = useState([]);
    useEffect(() => {
        axios.get("http://127.0.0.1:8000/api/admin/loan/requests")
        .then(resp=>{
            setLoan(resp.data);
        }).catch(err=>{
            console.log(err);
        });
    }, []);


    return(
        <div>
            <SideBar/>
            <link href="/assets/admin/css/requests.css" rel="stylesheet" type="text/css" />

            <div className="dashContent">
            
            <center>
            <h1 style={{color: '#2e4154', textTransform: 'uppercase'}}>Loan Requests</h1>
            </center>

            <div className="viewUsers">

            <table id="tb" style={{borderWidth:'1px',borderColor:"#aaaaaa", borderStyle:'solid'}} className="table table-striped table-hover table-bordered border-dark" >
                <thead>
                    <tr>
                        <th>Account Id</th>
                        <th>Loan Type</th>
                        <th>Loan Amount</th>
                        <th>Status</th>
                        <th colSpan='2'>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {loan.map((e)=>(
                        <LoanReq key={e.id} details={e}/>
                    ))}
                </tbody>
        
            </table>

    

            </div>
            </div>
        </div>
    );
}

export default LoanRequest;