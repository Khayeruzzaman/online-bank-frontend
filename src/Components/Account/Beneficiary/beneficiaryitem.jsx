import axios from 'axios';
import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import swal from 'sweetalert';
import styles from './allbeneficiary.module.css';

const BeneficiaryItem = (props) => {

    const hiss = useHistory();

    const handleDelete = () => {
        swal("Are you sure that you want to delete "+props.name+"?", {
            icon: "warning",
            buttons: {
              cancel: "No",
              Yes: true,
            },
          })
          .then((value) => {
            switch (value) {
              case "Yes":
                axios.get(["account-beneficiary-delete", props.benid].join('/'))
                .then(response=>{
                    
                    swal({
                        title: "Beneficiary Deleted",
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
        <div className={styles.flexItemBen}>
            <div className={styles.flexItemBen2}>
                <p id="nameben">{props.name}</p>
                <br />
                <p id="acnoben">Acc/Name: {props.accname}</p>
            </div>
            <div className={styles.flexItemBen1}>
                <br />
                <Link to={['/account/beneficiary/List/send-money', props.name, props.accname].join('/')}>
                    <div class="btn btn-outline-dark" style={{ width:'200px', marginLeft:'-50px', marginRight:'10px' }}>
                        <i class="fas fa-paper-plane"></i><strong> Send Money</strong>
                    </div>
                </Link>
                <br />
                <div onClick={handleDelete}>
                    <div class="btn btn-outline-dark" onclick="confirmdelete({{ $b->id }})" style={{ width:'200px', marginTop:'5px', marginLeft:'-50px', marginRight:'10px' }}>
                        <i class="fas fa-trash"></i><strong> Delete Beneficiary</strong>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default BeneficiaryItem;