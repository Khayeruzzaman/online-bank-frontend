

import axios from "axios";
import React,{useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import swal from 'sweetalert';
import SideBar from "../Navbar/sidebar";


const AccountListEdit = () =>{

    const  {id} = useParams();

    const [errorList,setError]= useState([]); 
    const [fname,setFname]= useState();
    const [lname,setLname]= useState();
    const [gender,setGender]= useState();
    const [dob, setDob] = useState(new Date());
    const [phone,setPhone]= useState();
    const [email,setEmail]= useState();
    const [nid,setNid]= useState();
    const [acc_name,setAccname]= useState();
    const [type,setType]= useState();
    const [password,setPassword]= useState();
    const [bal,setBal]= useState();
    const [status,setStatus]= useState();
 
    const [bank, setBank] = useState([]);

    

    useEffect(()=>{

        
        axios.get( '/admin/customerlist/edit/'+id).then(response=>{
            if(response.data.status === 200){

                setBank(response.data.bank);
                setFname(response.data.bank.firstname);
                setLname(response.data.bank.lastname);
                setGender(response.data.bank.gender);
                setDob(response.data.bank.dateofbirth);
                setPhone(response.data.bank.phone);
                setEmail(response.data.bank.email);
                setNid(response.data.bank.nid);
                setAccname(response.data.account.accountname);
                setType(response.data.account.accounttype);
                setPassword(response.data.account.password);
                setBal(response.data.account.accountbalance)
                setStatus(response.data.account.accountstate)
            }

            
        });
        
    }, [id]);


    

    const handleUpdate = async (e) => {
        e.preventDefault();
        
        
            
            const data = {

                'fname': fname,
                'lname': lname,
                'gender': gender,
                'dob': dob,
                'phone': phone,
                'email': email,
                'nid': nid,
                'acc_name': acc_name,
                'type': type,
                'password': password,
                'bal': bal,
                'state': status,


            }
                
                
            console.log(fname)
            

                const res = await axios.post('admin/customerlist/update/'+bank.id,data);
                if(res.data.status === 200){
                    
                    swal('Updated',res.data.message,'success');
                    
                    
                }

                else if(res.data.status === 422){

                    setError(res.data.errors)
                }
           
    }
   
        return(
            <div >
                <SideBar/>
                <link href="/assets/admin/css/AddUsers.css" rel="stylesheet" type="text/css" />
                <div className= "form" >
                

                    <form >
                        
                        <div className='form-group md-3'>
                            <label style={{float:'left'}}>First Name</label>
                            <input type='text' name='fname' onChange={(e)=>setFname(e.target.value)} defaultValue={fname} className='form-control' />
                            <span style={{color:'red'}}>{errorList.fname}</span>
                        </div>
                        <br/>

                        <div className='form-group md-3'>
                            <label style={{float:'left'}}>Last Name</label>
                            <input type='text' name='lname' onChange={(e)=>setLname(e.target.value)} defaultValue={lname} className='form-control' />
                            <span style={{color:'red'}}>{errorList.lname}</span>
                        </div>
                        <br/>

                        <div className='form-group md-3'>
                            <label>Gender</label>
                            <input type="radio" onChange={(e)=>setGender(e.target.value)} checked={gender === 'Male'} name="gender" style={{display: 'inline-block', width: '15%'}} defaultValue="Male" /> Male
                            <input type="radio" onChange={(e)=>setGender(e.target.value)} checked={gender === 'Female'} name="gender" style={{display: 'inline-block', width: '15%'}} defaultValue="Female" /> Female
                            <input type="radio" onChange={(e)=>setGender(e.target.value)} checked={gender === 'Others'} name="gender" style={{display: 'inline-block', width: '15%'}} defaultValue="Others" /> Others
                        </div>
                        <br/>


                        <div className='form-group md-3'>
                            <label style={{float:'left'}}>Date Of Birth</label>
                            <input type='date' name='dob' onChange={(e)=>setDob(e.target.value)} defaultValue={bank.dateofbirth} className='form-control' />
                            <span style={{color:'red'}}>{errorList.dob}</span>
                        </div>
                        
                        <br/>

                        <div className='form-group md-3'>
                            <label style={{float:'left'}}>Phone Number</label>
                            <input type='text' name='phone' onChange={(e)=>setPhone(e.target.value)} defaultValue={phone} className='form-control' />
                            <span style={{color:'red'}}>{errorList.phone}</span>
                        </div>
                        
                        <br/>

                        <div className='form-group md-3'>
                            <label style={{float:'left'}}>Email</label>
                            <input type='text' name='email' onChange={(e)=>setEmail(e.target.value)} defaultValue={email} className='form-control' />
                            <span style={{color:'red'}}>{errorList.email}</span>
                        </div>
                        
                        <br/>


                        <div className='form-group md-3'>
                            <label style={{float:'left'}}>Nid No</label>
                            <input type='text' name='nid' onChange={(e)=>setNid(e.target.value)} defaultValue={nid} className='form-control' />
                            <span style={{color:'red'}}>{errorList.nid}</span>
                        </div>
                        <br/>

                        <div className='form-group md-3'>
                            <label style={{float:'left'}}>Account Owners Name</label>
                            <input type='text' name='acc_name' onChange={(e)=>setAccname(e.target.value)} defaultValue={acc_name} className='form-control' />
                            <span style={{color:'red'}}>{errorList.ad_name}</span>
                        </div>
                        <br/>

                        <div className='form-group md-3'>

                        <label>Account Type</label>
                            <input type="radio" name="type" onChange={(e)=>setType(e.target.value)} defaultValue="Savings Account" style={{display: 'inline-block', width: '15%'}} checked={type === 'Savings Account'}/> Savings Account
                            <input type="radio" name="type" onChange={(e)=>setType(e.target.value)} defaultValue="Student Account" style={{display: 'inline-block', width: '15%'}} checked={type === 'Student Account'} /> Student Account
                            <input type="radio" name="type" onChange={(e)=>setType(e.target.value)} defaultValue="Business Account" style={{display: 'inline-block', width: '15%'}} checked={type === 'Business Account'} /> Business Account
                        </div>
                        <br/>

                        <div className='form-group md-3'>
                            <label style={{float:'left'}}>Password</label>
                            <input type='password' name='password' onChange={(e)=>setPassword(e.target.value)} defaultValue={password} className='form-control' />
                            <span style={{color:'red'}}>{errorList.password}</span>
                        </div>
                        
                        <br/>

                        <div className='form-group md-3'>
                            <label style={{float:'left'}}>Balance</label>
                            <input type='text' name='bal' onChange={(e)=>setBal(e.target.value)} defaultValue={bal} className='form-control' />
                            <span style={{color:'red'}}>{errorList.sal}</span>
                        </div>
                        <br/>

                        <div className='form-group md-3'>
                            <label>Account Status</label>
                            <input type="radio" name="status" onChange={(e)=>setStatus(e.target.value)} defaultValue="ACTIVE" style={{display: 'inline-block', width: '10%'}} checked={status === 'ACTIVE'}/> ACTIVE
                            <input type="radio" name="status" onChange={(e)=>setStatus(e.target.value)} defaultValue="INACTIVE" style={{display: 'inline-block', width: '10%'}} checked={status === 'INACTIVE'} /> INACTIVE
                            <input type="radio" name="status" onChange={(e)=>setStatus(e.target.value)} defaultValue="DISABLED" style={{display: 'inline-block', width: '10%'}} checked={status === 'DISABLED'} /> DISABLED
                        </div>

    
                        <br/>

                        <input className= "btn1" type="Submit" onClick={handleUpdate} name="update" value="Update"></input>

                    </form>
                
                </div>
            </div>
        );
    

}

export default AccountListEdit;