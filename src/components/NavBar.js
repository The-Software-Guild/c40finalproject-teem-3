import React from 'react';
import styles from './NavBar.module.css'
import melpLogo from './melpLogo.png'

export function NavBar() {
    return (
        <div className={styles['nav-bar']}>
            <div className={styles.left}>
                <div className="field has-addons">
                    
                        <img src={melpLogo} alt="Melp Logo" width="150" />
                        
                        <button className="button is-static is-medium">Search</button>
                   
                   
                        <input className={styles.input} type="text" placeholder="Japanese, Mediterranean, Italian..." />
                 
    
                </div>
            </div>
            <div className={styles.right}>
                <button> Login </button>
                <button> Sign Up </button>
                <button> About Us </button>
            </div>
        </div>

    );
}