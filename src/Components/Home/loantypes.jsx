import React from 'react';

const LoanTypes = (props) => {
    return(
        <tr>
            <td>
                <h4>{props.type}</h4>
            </td>
            <td>
                <h4>{props.loanrate}%</h4>
            </td>
        </tr>
    );
}
export default LoanTypes;