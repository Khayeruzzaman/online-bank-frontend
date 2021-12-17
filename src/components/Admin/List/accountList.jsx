import React,{useEffect, useState} from "react";
import axios from "axios";

import SideBar from "../Navbar/sidebar";
import Account from "./account";

const AccountList = () =>{

    const [acc, setAcc] = useState([]);
    useEffect(() => {
        axios.get("admin/dashboard/customerList")
        .then(resp=>{
            setAcc(resp.data);
        }).catch(err=>{
            console.log(err);
        });
    }, []);

    return(
    <div>
        <SideBar/>
        <link href="/assets/admin/css/adminList.css" rel="stylesheet" type="text/css" />
        
        <div className="dashContent">

        <center>
        <h1 style={{color: '#2e4154', textTransform: 'uppercase'}}>Account Lists</h1>

        </center>

        <div className="viewUsers">

        <table id="tb" className="table table-striped table-hover table-bordered border-dark" >
        <thead>
            <tr>
                <th>Account Name</th>
				
				<th>Account Type</th>
				<th>Balance</th>
				<th>Interest Rate</th>
				
				<th>State</th>
				<th colSpan='2'>Actions</th>
			</tr>
        </thead>

        <tbody>
        {acc.map((e)=>(
                    
                    <Account key={e.id} details={e}/>
                ))}
       
       </tbody>
        </table>

        </div>

        </div>
    </div>     
    );
}

export default AccountList;