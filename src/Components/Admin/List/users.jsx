import React from 'react';


const User = (props) => {

    const  {accountname, accounttype, accountbalance,accountinterestrate,accountstate} = props.details;
    
    let cons='Black'
   if(accountstate === "ACTIVE"){
        
        cons='green';
   }else if (accountstate === "INACTIVE"){
        
        cons='purple';
   }else{
       cons='RED'
   }

    return(
        
        <tr>
            <td>{accountname}</td>
            <td>{accounttype}</td>
            <td>{accountbalance}</td>
            <td>{accountinterestrate}</td>
            <td style={{color: cons ,fontWeight:'bold'}}>{accountstate}</td>
        </tr>
    );
}
export default User;