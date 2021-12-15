import React, { useEffect } from 'react';
import styles from './contact.module.css';

const Contacts = () => {

    useEffect(() => {
        document.title = "Contacts"
      }, [])

    return(
        <div className={styles.bodydiv}>
            <div className={styles.flexContainerBackgroundC}>
                <div className={styles.flexContainerHeadingC}>
                    <h1 id="contact">Contact Us</h1>
                </div>

                <div className={styles.flexContainerC} style={{ borderRadius: '10px' }}>
                    <div className={styles.flexItemC}>
                        <h1 id="sub-contact">Corporate Headquarters</h1>
                        <p id="sub-contact">
                            Corporate HQ<br />Castle Internet Bank<br />
                            22/1 Gulshan Avenue, Gulshan-1<br />
                            Dhaka, Bangladesh
                        </p>
                    </div>
                    <div className={styles.flexItemC}>
                        <h1 id="sub-contact">General Contact</h1>
                        <p id="sub-contact">
                            Toll-Free: 888-968-6822<br />
                            Phone: 732-367-5505<br />
                            Fax: 732-367-2313<br />
                            Email: office@&#8203castlebank.com
                        </p>
                    </div>
                </div>

                <div className={styles.flexContainerC} style={{ borderRadius: '10px',}}>
                    <div className={styles.flexItemC}>
                        <h1 id="sub-contact">Customer Care (24x7)</h1>
                        <p id="sub-contact">
                            Toll-Free: 888-966-6992<br />
                            Phone: 732-666-5555<br />
                            Email: care@&#8203castlebank.com
                        </p>
                    </div>
                    <div className={styles.flexItemC}>
                        <h1 id="sub-contact">Live Care</h1>
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
export default Contacts;