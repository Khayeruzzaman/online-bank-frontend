import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import swal from 'sweetalert';
import styles from './registration.module.css';


const AccountRegistration = () => {

    const[procss, setProcss] = useState(styles.procsb);
    const[nidcss, setNidcss] = useState(styles.nidb);
    const[dtp, setDtp] = useState('text');
    const[errmsg, setErrmsg] = useState([]);
    //input
    const[prpc, setPrpc] = useState();
    const[fnam, setFnam] = useState('');
    const[lnam, setLnam] = useState('');
    const[gen, setGen] = useState('');
    const[dob, setDob] = useState();
    const[phn, setPhn] = useState('');
    const[eml, setEml] = useState('');
    const[nd, setNd] = useState('');
    const[ndoc, setNdoc] = useState();
    const[acnm, setAcnm] = useState('');
    const[actp, setActp] = useState('');
    const[pss, setPss] = useState('');
    const[pssc, setPssc] = useState('');
    const[prv, setPrv] = useState('');

    const changepro = () => {
        setProcss(styles.procsa);
    }

    const changenid = () => {
        setNidcss(styles.nida);
    }

    const changedtp = () => {
        if(dtp == 'text')
        {
            setDtp("date");
        }
        else{
            setDtp('text');
        }
    }

    const donothing = () => {}

    useEffect(() => {
        document.title = "Register Account"
        if(localStorage.getItem('customerId'))
        {
            window.location.href = '/account/dashboard';
        }
      }, [])

      const regAttempt = async (e) => {
        e.preventDefault();
        const obj = new FormData();
        obj.append('profilepicture', prpc);
        obj.append('firstname', fnam);
        obj.append('lastname', lnam);
        obj.append('gender', gen);
        obj.append('dateofbirth', dob);
        obj.append('phone', phn);
        obj.append('email', eml);
        obj.append('nid', nd);
        obj.append('niddoc', ndoc);
        obj.append('accountname', acnm);
        obj.append('accounttype', actp);
        obj.append('password', pss);
        obj.append('password_confirmation', pssc);
        obj.append('privacy', prv);

        const response = await axios.post("apiregister", obj);
        console.log(obj);
        if(response.data.reg_validation_error){
            setErrmsg(response.data.reg_validation_error);
            console.log(errmsg);
        }
        else{
            if(response.data.regerror){
                swal({
                    title: "Sorry for the inconvenience",
                    text: response.data.regerror,
                    icon: "error",
                  });
                console.log(response.data.loginerror);
            }
            else if(response.data.regsuccess){
                swal({
                    title: "Regiteres Successfully",
                    text: "Please wait until the account verification. It won't take more than 24 Hours!",
                    icon: "success",
                  });
            }
        }
    }

    return(
        <div className={styles.bodydivREG}>
            <div className={styles.flexContainerBackgroundREG}>
                <div className={ styles.flexContainerREG }>
                    <div className={styles.flexItem0REG}>
                        <h1 id="form_header_REG">Explore the world with Castle Internet Banking...</h1>
                    </div>
                </div>

                <div className={ styles.flexContainerREG }>
                    <div className={styles.flexItem1REG}>
                        <form onSubmit={regAttempt} id='REG_form' enctype="multipart/form-data">
                            <div className={styles.flexItemLoginREG}>
                                <h2 id='REG_head'>Create Castle Bank Account:</h2>
                            </div>

                            <div className={ styles.flexItemREG }>
                                <br />
                                <input type="file" onChange={(event)=>setPrpc(event.target.files[0])} name="profilepicture" id="profilepicture" className={procss} onClick={changepro}/>
                                <label for="profilepicture" id="profilepicture">Click here to upload your profile picture</label>
                            </div>

                            <div className={ styles.flexItemREG }>
                                
                                    <span className="text text-danger" id="validation_msg_REG">{errmsg.profilepicture}</span>
                                
                            </div>

                            <div className={ styles.flexItemREG }>
                                <br />
                                <input type="text" id="text_In_REG" name="firstnameREG" onChange={(event)=>setFnam(event.target.value)} placeholder="Enter your First Name" value={fnam} />
                                <input type="text" id="text_In_REG" name="lastnameREG" onChange={(event)=>setLnam(event.target.value)} placeholder="Enter your Last Name" value={lnam} />
                            </div>

                            <div className={ styles.flexItemREG }>
                                
                                    <span className="text text-danger" id="validation_msg_REG">{errmsg.firstname}</span>
                                
                                    <span className="text text-danger" id="validation_msg_REG">{errmsg.lastname}</span>
                                
                            </div>

                            <div className={ styles.flexItemREG }>
                                <input type="radio" onChange={(event)=>setGen(event.target.value)} name="genderREG" id="genderM" value="Male" /><label for="genderM"><strong id="gender-text_REG">Male</strong></label>
                                <input type="radio" onChange={(event)=>setGen(event.target.value)} name="genderREG" id="genderF" value="Female" /><label for="genderF"><strong id="gender-text_REG">Female</strong></label>
                                <input type="radio" onChange={(event)=>setGen(event.target.value)} name="genderREG" id="genderO" value="Others" /><label for="genderO"><strong id="gender-text_REG">Others</strong></label>
                            </div>

                            <div className={ styles.flexItemREG }>
                                
                                    <span className="text text-danger" id="validation_msg_REG">{errmsg.gender}</span>
                                
                            </div>

                            <div className={ styles.flexItemREG }>
                                <input id="text_In_REG" placeholder="Date Of Birth" type={dtp} onChange={(event)=>setDob(event.target.value)} onFocus={dtp == 'text' ? changedtp: donothing} onBlur={dtp == 'date' ? changedtp : donothing} name="dateofbirth" value={dob} />
                            </div>

                            <div className={ styles.flexItemREG }>
                                
                                    <span className="text text-danger" id="validation_msg_REG">{errmsg.dateofbirth}</span>
                                
                            </div>

                            <div className={ styles.flexItemREG }>
                                <input type="text" id="text_In_REG" name="phone" placeholder="Enter your Phone No" onChange={(event)=>setPhn(event.target.value)} value={phn} />
                            </div>

                            <div className={ styles.flexItemREG }>
                                
                                    <span className="text text-danger" id="validation_msg_REG">{errmsg.phone}</span>
                                
                            </div>

                            <div className={ styles.flexItemREG }>
                                <input type="text" id="text_In_REG" name="email" placeholder="Enter your Email" onChange={(event)=>setEml(event.target.value)} value={eml} />
                            </div>

                            <div className={ styles.flexItemREG }>
                                
                                    <span className="text text-danger" id="validation_msg_REG">{errmsg.email}</span>
                                
                            </div>

                            <div className={ styles.flexItemREG }>
                                <input type="text" id="text_In_REG" name="nid" placeholder="Enter your NID No" onChange={(event)=>setNd(event.target.value)} value={nd} />
                            </div>

                            <div className={ styles.flexItemREG }>
                                
                                    <span className="text text-danger" id="validation_msg_REG">{errmsg.nid}</span>
                                
                            </div>

                            <div className={ styles.flexItemREG }>
                                <br />
                                <input type="file" name="niddoc" id="niddoc" onChange={(event)=>setNdoc(event.target.files[0])} className={nidcss} onClick={changenid}/>
                                <label for="niddoc" id="profilepicture">Click here to upload NID (Front Side Picture)</label>
                            </div>

                            <div className={ styles.flexItemREG }>
                                
                                    <span className="text text-danger" id="validation_msg_REG">{errmsg.niddoc}</span>
                                
                            </div>

                            <div className={ styles.flexItemREG }>
                                <br />
                                <input type="text" id="text_In_REG" name="accountname" onChange={(event)=>setAcnm(event.target.value)} placeholder="Enter your Account Username" value={acnm} />
                            </div>

                            <div className={ styles.flexItemREG }>
                                
                                    <span className="text text-danger" id="validation_msg_REG">{errmsg.accountname}</span>
                                
                            </div>

                            <div className={ styles.flexItemREG }>
                                <input type="radio" name="accounttypeREG" onChange={(event)=>setActp(event.target.value)} id="atS" value="Savings Account" /><label for="atS"><strong id="gender-text_REG">Savings Account</strong></label>
                                <input type="radio" name="accounttypeREG" onChange={(event)=>setActp(event.target.value)} id="atSt" value="Student Account" /><label for="atSt"><strong id="gender-text_REG">Student Account</strong></label>
                                <input type="radio" name="accounttypeREG" onChange={(event)=>setActp(event.target.value)} id="atB" value="Business Account" /><label for="atB"><strong id="gender-text_REG">Business Account</strong></label>
                            </div>

                            <div className={ styles.flexItemREG }>
                                
                                    <span className="text text-danger" id="validation_msg_REG">{errmsg.accounttype}</span>
                                
                            </div>

                            <div className={ styles.flexItemREG }>
                                <input type="password" onChange={(event)=>setPss(event.target.value)} name="passwordREG" placeholder="Enter your Password" />
                                <input type="password" onChange={(event)=>setPssc(event.target.value)} name="password_confirmationREG" placeholder="Re-enter your Password" />
                            </div>

                            <div className={ styles.flexItemREG }>
                                
                                    <span className="text text-danger" id="validation_msg_REG">{errmsg.password}</span>
                                
                            </div>

                            <div className={ styles.flexItemREG }>
                                <br />
                                <input type="checkbox" name="privacyREG" onChange={(event)=>setPrv(event.target.value)} id="privacy" value="yes" />
                                <label for="privacy"><strong id="gender-text_REG" style={{ color: 'red', marginLeft: '0' }}>*I agree to the Castle Bank's privacy policy and Financial Agreement.</strong></label>
                            </div>

                            <div className={ styles.flexItemREG }>
                                
                                    <span className="text text-danger" id="validation_msg_REG">{errmsg.privacy}</span>
                                
                            </div>

                            <div className={ styles.flexItemREG }>
                                <button id='submitbtn' type="submit">Create Account</button>
                                <span className="text text-info" id="registerREG">Have an account? <Link to='/login' style={{ color: 'cyan' }} id="createREG">Login to Continue!</Link></span>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default AccountRegistration;