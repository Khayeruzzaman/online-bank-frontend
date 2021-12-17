

import axios from "axios";
import React,{useState} from "react";
import swal from 'sweetalert';
import SideBar from "../Navbar/sidebar";


const AdminAdd = () =>{

    const [errorList,setError]= useState([]); 
    const [fname,setFname]= useState();
    const [lname,setLname]= useState();
    const [gender,setGender]= useState();
    const [dob, setDob] = useState(new Date());
    const [phone,setPhone]= useState();
    const [email,setEmail]= useState();
    const [pic,setPic]= useState();
    const [nid,setNid]= useState();
    const [ad_name,setAdname]= useState();
    const [password,setPassword]= useState();
    const [sal,setSal]= useState();

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        
            
            const data = new FormData();
                data.append('fname', fname);
                data.append('lname', lname);
                data.append('gender', gender);
                data.append('dob', dob);
                data.append('phone', phone);
                data.append('email', email);
                data.append('pic', pic);
                data.append('nid', nid);
                data.append('ad_name', ad_name);
                data.append('password', password);
                data.append('sal', sal);
                

                const res = await axios.post('admin/create/admin/users',data);
                if(res.data.status === 200){
                    
                    swal('Success',res.data.message,'success');
                    setError([]);
                    setFname('');
                    setLname('');
                    setGender('');
                    setDob('');
                    setPhone('');
                    setEmail('');
                    setPic('');
                    setNid('');
                    setAdname('');
                    setPassword('');
                    setSal('');
                }

                else if(res.data.status === 422){
                    
                    setError(res.data.errors)
                    
                }

                console.log(res.data.errors);
           
    }
   
        return(
            <div>
                <SideBar/>
                <link href="/assets/admin/css/AddUsers.css" rel="stylesheet" type="text/css" />
                <div className= "form">
                

                    <form>
                        <legend>Admin Registration</legend>
                        <br/>
                        <div className='form-group md-3'>
                            <label style={{float:'left'}}>First Name</label>
                            <input type='text' name='fname' onChange={(e)=>setFname(e.target.value)} value={fname} className='form-control' />
                            <span style={{color:'red'}}>{errorList.fname}</span>
                        </div>
                        <br/>

                        <div className='form-group md-3'>
                            <label style={{float:'left'}}>Last Name</label>
                            <input type='text' name='lname' onChange={(e)=>setLname(e.target.value)} value={lname} className='form-control' />
                            <span style={{color:'red'}}>{errorList.lname}</span>
                        </div>
                        <br/>

                        <div className='form-group md-3'>
                            <label style={{float:'left'}}>Gender</label><br/>
                            <input type="radio" onChange={(e)=>setGender(e.target.value)} name="gender" style={{display: 'inline-block', width: '15%'}} value="Male" /> Male
                            <input type="radio" onChange={(e)=>setGender(e.target.value)} name="gender" style={{display: 'inline-block', width: '15%'}} value="Female" /> Female
                            <input type="radio" onChange={(e)=>setGender(e.target.value)} name="gender" style={{display: 'inline-block', width: '15%'}} value="Others" /> Others
                        </div>
                        <span style={{color:'red'}}>{errorList.gender}</span>
                        <br/>

                        <div className='form-group md-3'>
                            <label style={{float:'left'}}>Date Of Birth</label>
                            <input type='date' name='dob' onChange={(e)=>setDob(e.target.value)} value={dob} className='form-control' />
                        </div>
                        <span style={{color:'red'}}>{errorList.dob}</span>
                        <br/>

                        <div className='form-group md-3'>
                            <label style={{float:'left'}}>Phone Number</label>
                            <input type='text' name='phone' onChange={(e)=>setPhone(e.target.value)} value={phone} className='form-control' />
                        </div>
                        <span style={{color:'red'}}>{errorList.phone}</span>
                        <br/>

                        <div className='form-group md-3'>
                            <label style={{float:'left'}}>Email</label>
                            <input type='text' name='email' onChange={(e)=>setEmail(e.target.value)} value={email} className='form-control' />
                        </div>
                        <span style={{color:'red'}}>{errorList.email}</span>
                        <br/>

                        <div className='form-group md-3'>
                            <label style={{float:'left'}}>Upload Picture</label>
                            <input className="from-control" onChange={(e)=>setPic(e.target.files[0])} type="file" name="pic" />
                        </div>
                        <span style={{color:'red'}}>{errorList.pic}</span>
                        <br/>

                        <div className='form-group md-3'>
                            <label style={{float:'left'}}>Nid No</label>
                            <input type='text' name='nid' onChange={(e)=>setNid(e.target.value)} value={nid} className='form-control' />
                        </div>

                        <span style={{color:'red'}}>{errorList.nid}</span>
                        <br/>

                        <div className='form-group md-3'>
                            <label style={{float:'left'}}>Admin Name</label>
                            <input type='text' name='ad_name' onChange={(e)=>setAdname(e.target.value)} value={ad_name} className='form-control' />
                        </div>
                        <span style={{color:'red'}}>{errorList.ad_name}</span>
                        <br/>

                        <div className='form-group md-3'>
                            <label style={{float:'left'}}>Password</label>
                            <input type='password' name='password' onChange={(e)=>setPassword(e.target.value)} value={password} className='form-control' />
                        </div>
                        <span style={{color:'red'}}>{errorList.password}</span>
                        <br/>

                        <div className='form-group md-3'>
                            <label style={{float:'left'}}>Salary</label>
                            <input type='text' name='sal' onChange={(e)=>setSal(e.target.value)} value={sal} className='form-control' />
                        </div>
                        <span style={{color:'red'}}>{errorList.sal}</span>
                        <br/>

                        <input className= "btn1" type="Submit" onClick={handleSubmit} name="submit"></input>

                    </form>
                
                </div>
            </div>
        );
    

}

export default AdminAdd;