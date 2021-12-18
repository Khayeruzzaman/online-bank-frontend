

import axios from "axios";
import React,{useState, useEffect} from "react";
import { Link } from "react-router-dom";

import SideBar from "../Navbar/sidebar";


const EditProfile = (props) =>{

    

    const [errorList,setError]= useState([]); 
    const [fname,setFname]= useState();
    const [lname,setLname]= useState();

    const [dob, setDob] = useState(new Date());
    const [phone,setPhone]= useState();
    const [email,setEmail]= useState();
    const [nid,setNid]= useState();
    const [ad_name,setAdname]= useState();
    const [password,setPassword]= useState();
    const [sal,setSal]= useState();

    const [admin, setAdmin] = useState([]);
    const [bank, setBank] = useState([]);

    const id = localStorage.getItem('AdminId');

    useEffect(()=>{
        axios.get( 'admin/profileinfo/'+id).then(response=>{
            if(response.data.status === 200){

                setAdmin(response.data.admin);
                setBank(response.data.bank);

                setFname(response.data.bank.firstname);
                setLname(response.data.bank.lastname);
                setDob(response.data.bank.dateofbirth);
                setPhone(response.data.bank.phone);
                setEmail(response.data.bank.email);
                setNid(response.data.bank.nid);
                setAdname(response.data.admin.adminname);
                setPassword(response.data.admin.password);
                setSal(response.data.admin.adminsalary)
            }

            
        });
        
        

    }, [id]);


    

    const handleUpdate = async (e) => {
        e.preventDefault();
        
        
            
            const data = {

                'fname': fname,
                'lname': lname,
                'dob': dob,
                'phone': phone,
                'email': email,
                'nid': nid,
                'ad_name': ad_name,
                'password': password,
                'sal': sal,

            }
                
                
            console.log(fname)
            

                const res = await axios.post('admin/editprofile/'+bank.id+'/'+admin.id,data);
                if(res.data.status === 200){
                    
                    alert(res.data.message);
                    
                }

                else if(res.data.status === 422){

                    setError(res.data.errors)
                }
           
    }
   
        return(
            <div>
                <SideBar/>
                <link href="/assets/admin/css/AddUsers.css" rel="stylesheet" type="text/css" />
                <div className= "form">
                

                    <form >
                        <center>
                        <img src={"http://127.0.0.1:8000/storage/admin/admin_cover_images/"+bank.userprofilepicture}
                                            style={{width: '180px', height:'180px'}} alt="" /><br/>
                        <Link style={{textDecoration: 'none'}} to={"/admin/editPicture/"+bank.id}>Update Profile Pictrue</Link>
                        </center>

                        <br/>
                    
                        
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
                            <label style={{float:'left'}}>Admin Name</label>
                            <input type='text' name='ad_name' onChange={(e)=>setAdname(e.target.value)} defaultValue={ad_name} className='form-control' />
                            <span style={{color:'red'}}>{errorList.ad_name}</span>
                        </div>
                        
                        <br/>

                        <div className='form-group md-3'>
                            <label style={{float:'left'}}>Password</label>
                            <input type='password' name='password' onChange={(e)=>setPassword(e.target.value)} defaultValue={password} className='form-control' />
                            <span style={{color:'red'}}>{errorList.password}</span>
                        </div>
                        
                        <br/>

                        <div className='form-group md-3'>
                            <label style={{float:'left'}}>Salary</label>
                            <input type='text' name='sal' onChange={(e)=>setSal(e.target.value)} defaultValue={sal} className='form-control' />
                            <span style={{color:'red'}}>{errorList.sal}</span>
                        </div>
                        
                        <br/>

                        <input className= "btn1" type="Submit" onClick={handleUpdate} name="update" value="Update"></input>

                    </form>
                
                </div>
            </div>
        );
    

}

export default EditProfile;