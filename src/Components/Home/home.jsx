import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styles from './home.module.css';
import LoanTypes from './loantypes';

const Home = () => {

    const[loantype, setLoanType] = useState([]);

    useEffect(() => {
        document.title = "Home"
        axios.get("loan-types")
        .then(response=>{
            setLoanType(response.data);
        }).catch(error=>{
            console.log(error);
        });
      }, [])

    return(
        <div className={styles.bodydiv}>
            <div className={styles.flexContainerBackground}>
                <div className={styles.flexContainer}>
                    <div className={styles.flexItem0}>
                        <h1 id="form_header">Castle Internet Banking</h1>
                    </div>
                </div>

                <div className={styles.flexContainer}>
                    <div className={styles.flexItem1}>
                        <div className={[styles.form, styles.formControl].join(" ")}>
                            <div className={styles.flexItemLogin}>
                                <h2 id="sectionHeader">Welcome to Online Banking</h2>
                            </div>

                            <div className={styles.flexItem}>
                                <h4 id="sectionContent">
                                    We are offering a easier solution for banking. Our services are now more simplified with just simple clicks! <br/>
                                    We are offering:
                                    <li>Account Services</li>
                                    <li>Loan Services</li>
                                    You can browse seemlessly with our simplified banking!
                                </h4>
                            </div>

                            <div className={styles.flexItemLogin}>
                                <h2 id="sectionHeader">Interest Rates</h2>
                            </div>

                            <div className={styles.flexItem}>
                                <h4 id="sectionContent">
                                    Interst rates for different accounts:
                                    <table>
                                        <tr>
                                            <th><h4 id="sectionContent">Account Types</h4></th>
                                            <th><h4 id="sectionContent">Rate</h4></th>
                                        </tr>
                                        <tr>
                                            <td>
                                                <h4 id="sectionContent">Savings Account</h4>
                                            </td>
                                            <td>
                                                <h4 id="sectionContent">7.5%</h4>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <h4 id="sectionContent">Business Account</h4>
                                            </td>
                                            <td>
                                                <h4 id="sectionContent">5%</h4>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <h4 id="sectionContent">Student Account</h4>
                                            </td>
                                            <td>
                                                <h4 id="sectionContent">10.5%</h4>
                                            </td>
                                        </tr>
                                    </table>
                                </h4>
                            </div>

                            <div className={styles.flexItemLogin}>
                                <h2 id="sectionHeader">Loans</h2>
                            </div>

                            <div className={styles.flexItem}>
                                <h4 id="sectionContent">
                                    Loans are now even easier to maintain with our internet banking. Loans available:
                                    <table>
                                        <tr>
                                            <th>
                                                <h4 id="sectionContent">Types Of Loan</h4>
                                            </th>
                                            <th>
                                                <h4 id="sectionContent">Rate of Interests</h4>
                                            </th>
                                        </tr>
                                        {loantype.map(l=>(
                                            <LoanTypes type={l.type} loanrate={l.rate} key={l.id} />
                                        ))}
                                    </table>
                                </h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;