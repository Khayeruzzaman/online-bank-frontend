
import swal from 'sweetalert';
import axios from "axios";
import React,{useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import SideBar from "../Navbar/sidebar";


const EmpEdit = () =>{
    
    const  {id} = useParams();

    const [errorList,setError]= useState([]); 
    const [fname,setFname]= useState();
    const [lname,setLname]= useState();
    const [dob, setDob] = useState(new Date());
    const [phone,setPhone]= useState();
    const [email,setEmail]= useState();
   
    const [nid,setNid]= useState();
    const [emp_name,setEmpname]= useState();
    const [password,setPassword]= useState();
    const [sal,setSal]= useState();
    const [desig,setDesig]= useState();
    const [joinDate,setJd]= useState();
    
    const [bank,setBank]= useState([]);
    
    

    useEffect(()=>{
        axios.get( '/admin/emplist/edit/'+id).then(response=>{
            if(response.data.status === 200){

                setBank(response.data.bank);
                setFname(response.data.bank.firstname);
                setLname(response.data.bank.lastname);
                setDob(response.data.bank.dateofbirth);
                setPhone(response.data.bank.phone);
                setEmail(response.data.bank.email);
                setNid(response.data.bank.nid);
                setEmpname(response.data.emp.empname);
                setPassword(response.data.emp.password);
                setSal(response.data.emp.empsalary);
                setDesig(response.data.emp.empdesignation);
                setJd(response.data.emp.joindate);
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
            'emp_name': emp_name,
            'password': password,
            'sal': sal,
            'desig': desig,
            'joinDate': joinDate,

        }
        console.log(fname)
        
        
            const res = await axios.post('admin/emplist/update/'+bank.id,data);
            if(res.data.status === 200){
                
                swal('Updated',res.data.message,'success');
                setError([]);

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
                

                    <form>
                        <legend>Employee Registration</legend>
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
                        </div>
                        <span style={{color:'red'}}>{errorList.dob}</span>
                        <br/>

                        <div className='form-group md-3'>
                            <label style={{float:'left'}}>Phone Number</label>
                            <input type='text' name='phone' onChange={(e)=>setPhone(e.target.value)} defaultValue={phone} className='form-control' />
                        </div>
                        <span style={{color:'red'}}>{errorList.phone}</span>
                        <br/>

                        <div className='form-group md-3'>
                            <label style={{float:'left'}}>Email</label>
                            <input type='text' name='email' onChange={(e)=>setEmail(e.target.value)} defaultValue={email} className='form-control' />
                        </div>
                        <span style={{color:'red'}}>{errorList.email}</span>
                        <br/>

                        

                        <div className='form-group md-3'>
                            <label style={{float:'left'}}>Nid No</label>
                            <input type='text' name='nid' onChange={(e)=>setNid(e.target.value)} defaultValue={nid} className='form-control' />
                        </div>

                        <span style={{color:'red'}}>{errorList.nid}</span>
                        <br/>

                        <div className='form-group md-3'>
                            <label style={{float:'left'}}>Employee Name</label>
                            <input type='text' name='ad_name' onChange={(e)=>setEmpname(e.target.value)} defaultValue={emp_name} className='form-control' />
                        </div>
                        <span style={{color:'red'}}>{errorList.ad_name}</span>
                        <br/>

                        <div className='form-group md-3'>
                            <label style={{float:'left'}}>Password</label>
                            <input type='password' name='password' onChange={(e)=>setPassword(e.target.value)} defaultValue={password} className='form-control' />
                        </div>
                        <span style={{color:'red'}}>{errorList.password}</span>
                        <br/>

                        <div className='form-group md-3'>
                            <label style={{float:'left'}}>Salary</label>
                            <input type='text' name='sal' onChange={(e)=>setSal(e.target.value)} defaultValue={sal} className='form-control' />
                        </div>
                        <span style={{color:'red'}}>{errorList.sal}</span>
                        <br/>

                        <div className='form-group md-3'>
                            <label style={{float:'left'}}>Designation</label>
                            <input type='text' name='desig' onChange={(e)=>setDesig(e.target.value)} defaultValue={desig} className='form-control' />
                        </div>
                        <span style={{color:'red'}}>{errorList.desig}</span>
                        <br/>

                        <div className='form-group md-3'>
                            <label style={{float:'left'}}>Join Date</label>
                            <input type='date' name='joinDate' onChange={(e)=>setJd(e.target.value)} defaultValue={joinDate} className='form-control' />
                        </div>
                        <span style={{color:'red'}}>{errorList.joinDate}</span>
                        <br/>

                        

                        <input className= "btn1" type="Submit" onClick={handleUpdate} name="Update"></input>

                    </form>
                
                </div>
            </div>
        );
    

}

export default EmpEdit;