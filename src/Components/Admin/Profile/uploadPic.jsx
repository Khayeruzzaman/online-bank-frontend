import React,{useState} from "react";
import { useParams } from "react-router";
import axios from "axios";
import swal from 'sweetalert';
import SideBar from "../Navbar/sidebar";

const Upload = () =>{



    const {id}=useParams();
    const [pic,setPic]= useState();
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        
        
            
            const data = new FormData();
                data.append('pic', pic);
                

                const res = await axios.post('/admin/updatePicture/'+id,data);
                if(res.data.status === 200){
                    
                    swal('Success',res.data.message,'success');
                    
                    setPic('');
                }

                
           
    }
    return(
        <div>
            <SideBar/>
                <link href="/assets/admin/css/uploadPic.css" rel="stylesheet" type="text/css" />
            <div class="updatePro">
        
                <form encType="multipart/form-data" >
                
                        
                            <label> Upload New Profile Picture </label>
                            <br/> <br/>
                            <input className="from-control" onChange={(e)=>setPic(e.target.files[0])} type="file" name="pic" />
                            <br/>
                
                            <input type="submit" onClick={handleSubmit} className="btn" name="Upload" value="upload"/>
                        
                </form>
            
            </div>
        </div>
    );


}

export default Upload;