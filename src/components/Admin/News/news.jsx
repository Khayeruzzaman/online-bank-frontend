import SideBar from "../Navbar/sidebar";
import React,{useState} from "react";
import swal from 'sweetalert';
import axios from "axios";

const NewsCreate = () =>{

    const [newsTitle,setTitle]= useState();
    const [newsBody,setBody]= useState();
    const [pic,setPic]= useState();

    const handleSubmit = async (e) => {
        e.preventDefault();
        
            const data = new FormData();
                data.append('newsTitle', newsTitle);
                data.append('newsBody', newsBody);
                data.append('pic', pic);

                console.log(newsTitle);
                

                const res = await axios.post('admin/news/create',data);

                if(res.data.status === 200){
                    
                    alert(res.data.message);
                    
                    setPic('');
                    setTitle('');
                    setBody('');
                }

                
           
    }

    return(
        <div>
            <SideBar/>
            <link href="/assets/admin/css/news.css" rel="stylesheet" type="text/css" />
            <div className="dashContent">

                <div className="viewUsers">

                    <form>
                    
                    <div className='form-group md-3'>
                        <label className="newsLabel"> News Title </label>
                        <br/>
                        <input type="text" onChange={(e)=>setTitle(e.target.value)} name="newsTitle" className="newsTitle" />
                    </div>
                    <br/>
                    
                    
                    <br/>
                    <div className='form-group md-3'>
                        <label className="newsLabel"> Upload News Image </label><br/>
                        <input type="file" onChange={(e)=>setPic(e.target.files[0])} name='pic'/>
                    </div>
                   

                    <br/>
                    <br/>

                    <label className="newsLabel">Write news here:</label>
                    <textarea name="newsBody" onChange={(e)=>setBody(e.target.value)} className="newsBody" />
                    
                    

                    
                    <br/><br/>

                    <input className="btnSubmit" onClick={handleSubmit} type="submit" name="submit" value="Submit"/>

                    </form>

                </div>

            </div>
        </div>
    );
}


export default NewsCreate;