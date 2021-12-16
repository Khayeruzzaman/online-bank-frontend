import {useEffect, useState} from "react";
import { useParams } from "react-router-dom";
import axios from "axios";


const AcceptRequest = () => {

    const [setAccept] = useState([]);
    const  {account_id} = useParams();
    useEffect(() => {
        axios.get("admin/loan/requests/accept/"+account_id)
        .then(resp=>{
            setAccept(resp.data);
        }).catch(err=>{
            console.log(err);
        });
    }, [account_id, setAccept]);

    return(
        window.location='http://localhost:3000/admin/loan/requests'
    );
}

export default AcceptRequest;