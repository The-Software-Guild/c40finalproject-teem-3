import React from 'react';
import styles from './NavBar.module.css'

export function NavBar() {
    return (
        <div className={styles['nav-bar']}>
            <div className={styles.left}>
                <div className="field has-addons">
                    <p className="control">
                        <button className="button is-static is-medium">Search</button>
                    </p>
                    <p className="control">
                        <input className="input is-medium" type="text" placeholder="japanese, mediterian, itallian..." />
                    </p>
    
                </div>
            </div>
            <div className={styles.right}>
                <button> Login </button>
                <button> Sign Up </button>
            </div>
        </div>

    );
}