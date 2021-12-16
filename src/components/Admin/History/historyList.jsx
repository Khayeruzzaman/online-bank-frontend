import React,{useEffect, useState} from "react";
import { Link } from "react-router-dom";
import SideBar from "../Navbar/sidebar";
import History from "./history";
import axios from "axios";

const HistoryList = () =>{

    const [his, setHis] = useState([]);
    useEffect(() => {
        axios.get("admin/history")
        .then(resp=>{
            setHis(resp.data);
        }).catch(err=>{
            console.log(err);
        });
    }, []);

    return(
            <div>
            <SideBar/>
            <link href="/assets/admin/css/history.css" rel="stylesheet" type="text/css" />
            <div className="dashContent">

            <center>
            <h1 style={{color: '#2e4154', textTransform: 'uppercase'}} >Transaction History </h1>
            <br/>
            </center>


            <div className="history">

            <form>
                <center>
                    <div className = "searchDiv">
                        <i className="fa fa-search"> </i>
                        <input id="search" type="text" autoComplete="off" name="search" placeholder="SEARCH ACCOUNT ID.." />

                    </div>
                </center>
            </form>


            <br/>

            <Link className="PDFDownload" to=" "><i className="fa fa-download" aria-hidden="true"></i></Link>

            <table id="tb" className="table table-striped table-hover table-bordered border-dark" >
            <thead>
                <tr>
                    
                    <th>History Id</th>
                    <th>History Date</th>
                    <th>Transction Id</th>
                    <th>Remarks</th>
                    <th>Debit</th>
                    <th>Credits</th>
                    <th>Transaction Time</th>
            
                </tr>
            </thead>

            <tbody>
                {his.map((e)=>(
                        
                        <History Key={e.id} details={e}/>
                    ))}
            </tbody>

            </table>

            </div>

            </div>
            </div>
    );
}
export default HistoryList;