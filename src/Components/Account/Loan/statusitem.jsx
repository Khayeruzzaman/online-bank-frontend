import axios from 'axios';
import React from 'react';
import { useHistory } from 'react-router-dom';
import swal from 'sweetalert';

const StatusItem = (props) => {

    const hiss = useHistory();

    const handleDelete = () => {
        swal("Are you sure that you want to delete the loan Request?", {
            icon: "warning",
            buttons: {
              cancel: "No",
              Yes: true,
            },
          })
          .then((value) => {
            switch (value) {
              case "Yes":
                axios.get(["account-loan-request-delete", props.id].join('/'))
                .then(response=>{
                    
                    swal({
                        title: "Loan Request Deleted",
                        icon: "success",
                      }).then((value) => {
                        hiss.go(0);
                      });
                    

                }).catch(error=>{
                    console.log(error);
                });
                break;
           
              default:
                
            }
          });
    }

    return(
        <tr>
            <td>
                {String(props.created_at).substr(0,25) }
            </td>
            <td>
                {props.loantype }
            </td>
            <td>
                {props.loanamount }
            </td>
            <td>
                {props.loanrequeststatus }
            </td>
            <td>
                {props.loanrequeststatus=='PENDING'? 
                <button onClick={handleDelete} className="btn btn-outline-danger">
                    Delete Request
                </button>
                :
                <div></div>}
            </td>
        </tr>
    );
}
export default StatusItem;