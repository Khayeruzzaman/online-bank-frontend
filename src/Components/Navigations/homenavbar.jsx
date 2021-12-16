import React from 'react';
import { Link } from 'react-router-dom';
import styles from './homenavbar.module.css';

const HomeNavbar = () => {
    return(
        <div className={styles.navWrapper}>
            <div className={styles.topnav} id="theTopNav">
                <Link to='/'>HOME</Link>
                <Link to='/news'>NEWS</Link>
                <Link to='/contacts'>CONTACT</Link>
                <Link to='/about'>ABOUT US</Link>
                <Link to='/login'>LOGIN/SIGNUP</Link>
            </div>
        </div>
    );
}

export default HomeNavbar;