import React from 'react';


const History = (props) => {

    const  {id, historydate, account_id, remarks, debit,credit,created_at} = props.details;
    return(
        
        <tr>
            <td>{id}</td>
            
            <td>{historydate}</td>
            <td>{account_id}</td>
            <td>{remarks}</td>
            <td>{debit}</td>
            <td>{credit}</td>
            <td>{created_at}</td>
        </tr>
    );
}
export default History;