import React from "react";
import SideBar from "../Navbar/sidebar";

const NewsCreate = () =>{

    return(
        <div>
            <SideBar/>
            <link href="/assets/admin/css/news.css" rel="stylesheet" type="text/css" />
            <div className="dashContent">

                <div className="viewUsers">

                    <form method="post" encType="multipart/form-data">
                    
                    <div className='form-group md-3'>
                        <label className="newsLabel"> News Title </label>
                        <br/>
                        <input type="text" name="newstitle" className="newsTitle" />
                    </div>
                    <br/>
                    
                    
                    <br/>
                    <div className='form-group md-3'>
                        <label className="newsLabel"> Upload News Image </label><br/>
                        <input type="file" name='pic'/>
                    </div>
                   

                    <br/>
                    <br/>

                    <label className="newsLabel">Write news here:</label>
                    <textarea name="newsBody" className="newsBody">
                        
                    </textarea>
                    

                    
                    <br/><br/>

                    <input className="btnSubmit" type="submit" name="submit" value="Submit"/>

                    </form>

                </div>

            </div>
        </div>
    );
}


export default NewsCreate;