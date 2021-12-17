import React from 'react';

const TransectionItem = (props) => {
    return(
        <tr>
            <td>{ props.created_at }</td>
            <td>{ props.remarks }</td>
            <td>{ props.debit }</td>
            <td>{ props.credit }</td>
        </tr>
    );
}
export default TransectionItem;