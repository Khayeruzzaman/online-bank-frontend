import React, {useEffect } from 'react';
import styles from './about.module.css';

const About = () => {

    useEffect(() => {
        document.title = "About Us"
      }, [])

    return(
        <div className={styles.bodydivA}>
                <div className={styles.flexContainerBackgroundA}>
                <div className={styles.flexContainerHeadingA}>
                    <h1 id="contact">About Us</h1>
                </div>

                <div className={styles.flexContainerA} style={{ paddingBottom: '40px', borderRadius: '10px'}}>
                    <div className={styles.flexItemA}>
                        <h1 id="sub-contact">Message From Chairman</h1>
                        <p id="sub-contact">
                            Dear Customers, <br />
                            We are working for your conveniance to operate banking sevices seemlessly. Customer's conveniance is the first priority for us. We are working hard for you. Please stay with Castle Bank. 
                        </p>
                    </div>
                    <div className={styles.flexItemA}>
                        <h1 id="sub-contact">Message From Director</h1>
                        <p id="sub-contact">
                            Hello Customers, <br />
                            We are designing every services to be a less hastle to you. Our staffs are also very much friendly and active 24/7 
                            only for you. Our promises is to provide the best service through internet. Our customers can seemlessly use their account 
                            credentials without being worried about security.
                        </p>
                    </div>
                </div>

                <div className={styles.flexContainerA} style={{ borderRadius: '10px'}}>
                    <div className={styles.flexItemA}>
                        <h1 id="sub-contact">We are now</h1>
                        <p id="sub-contact">
                            2014686+ Customers <br />
                            300+ Employees <br />
                            Secured Online Banking Ever Introduced...
                        </p>
                    </div>
                    <div className={styles.flexItemA}>
                        <h1 id="sub-contact">Mobile Apps</h1>
                        <p id="sub-contact">
                            Download our app and live chat<br />
                            with our customer care !<br />
                            App available on Google Play<br />
                            and iPhone-AppStore.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default About;