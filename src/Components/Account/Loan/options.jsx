import React from 'react';

const OptionValue = (props) => {
    return(
        <option value={props.type}>{props.type}</option>
    );
}
export default OptionValue