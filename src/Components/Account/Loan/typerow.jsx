import React from 'react';

const TypeRow = (props) => {
    return(
        <tr>
            <td>
                { props.type }
            </td>
            <td>
                { props.rate }%
            </td>
        </tr>
    );
}
export default TypeRow;