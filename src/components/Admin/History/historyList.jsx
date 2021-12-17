import React,{useEffect, useState} from "react";
import SideBar from "../Navbar/sidebar";
import History from "./history";
import axios from "axios";
import {useRef} from 'react';
import { PDFExport } from "@progress/kendo-react-pdf";

const HistoryList = () =>{

    const [his, setHis] = useState([]);
    const [credit, setCredit] = useState([]);
    const [debit, setDebit] = useState([]);
    const [bal, setBal] = useState([]);
    const pdfExportComponent = useRef(null);
    
    const pdfGenerate = (e) =>{
        pdfExportComponent.current.save();
        console.log("clicked");
    }
    
    useEffect(() => {

        axios.get("admin/history")
        .then(resp=>{
            setHis(resp.data.history);
            setCredit(resp.data.credit)
            setDebit(resp.data.debit)
            setBal(resp.data.balance)
        }).catch(err=>{
            console.log(err);
        });
    }, []);

    

    return(
            <div>
            <SideBar/>
            <link href="/assets/admin/css/history.css" rel="stylesheet" type="text/css" />
            <div className="dashContent">

            <div className="history">

            <br/>

            <i style={{float:'right', marginBottom:'10px'}} onClick={pdfGenerate} className="fa fa-download" aria-hidden="true"></i>
            <PDFExport ref = {pdfExportComponent} paperSize = "A2">

            <p>
                <center>

                <h1 style={{color:'#2e4154'}}> Transaction Report</h1>
                    <hr/>
                    <br/>
                </center>
            
            </p>
            <table id="tb" className="table table-striped table-hover table-bordered border-dark" >
            
            
            
            <thead>

                <tr>
                    
                    <th>History Id</th>
                    <th>History Date</th>
                    <th>Transction Id</th>
                    <th>Remarks</th>
                    <th>Debits</th>
                    <th>Credits</th>
                    <th>Transaction Time</th>
            
                </tr>
            </thead>

            <tbody>
                {his.map((e)=>(
                        
                        <History Key={e.id} details={e}/>
                    ))}
            </tbody>
            <tfoot>

                <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td style={{background:'#373b8b', color:'white', fontWeight:'bold'}}>Total</td>
                    <td>{debit}</td>
                    <td>{credit}</td>
                </tr>
                <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td style={{background:'#373b8b', color:'white', fontWeight:'bold'}}>Current Balance</td>
                    <td colSpan='2'>{bal}</td>
                </tr>

            </tfoot>
            

            </table>
        </PDFExport>

            </div>

            </div>
            </div>
    );
}
export default HistoryList;