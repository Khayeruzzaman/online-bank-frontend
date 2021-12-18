import React from 'react';


const User = (props) => {

    const  {accountname, accounttype, accountbalance,accountinterestrate,accountstate} = props.details;
    
   

    return(
        
        <tr>
            <td>{accountname}</td>
            <td>{accounttype}</td>
            <td>{accountbalance}</td>
            <td>{accountinterestrate}</td>
            <td style={{color:'green' ,fontWeight:'bold'}}>{accountstate}</td>
        </tr>
    );
}
export default User;