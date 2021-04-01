import React from 'react';
import styles from './NavBar.module.css'

export function NavBar() {
    return (
        <div className={styles['nav-bar']}>
            <div className={styles.left}>
                <input value="Search Category"/>
                <input value="City/Zipcode"/>
                <button> Search </button>
            </div>
            <div className={styles.right}>
                <button> Login </button>
                <button> Sign Up </button>
            </div>
        </div>

    );
}