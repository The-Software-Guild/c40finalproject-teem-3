import React from 'react';
import styles from './NavBar.module.css'
import melpLogo from './melpLogo.png'

export function NavBar() {
    return (
        <div className={styles['nav-bar']}>
    
                <div className="field has-addons">
                    
                        <img src={melpLogo} alt="Melp Logo" width="150" />
                                                            
                        <input className={styles.zipCode} type="text" placeholder="Zip Code" />
                        <input className={styles.input} type="text" placeholder="Japanese, Mediterranean, Italian..." />
        
                        <button className={styles.button}>Search</button>
         
                <button> Login </button>
                <button> Sign Up </button>
                <button> About Us </button>
            </div>
        </div>

    );
}