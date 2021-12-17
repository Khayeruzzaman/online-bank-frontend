import React from 'react';

const TransectionItem = (props) => {

    return(
        <tr>
            <td>{ String(props.created_at).substr(0,25) }</td>
            <td>{ props.remarks }</td>
            <td>{ props.debit }</td>
            <td>{ props.credit }</td>
        </tr>
    );
}
export default TransectionItem;