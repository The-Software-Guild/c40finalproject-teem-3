import React from 'react';
import styles from './NavBar.module.css'

export function NavBar() {
    return (
        <div className={styles['nav-bar']}>
            <div className={styles.left}>
                <div class="field has-addons">
                    <p class="control">
                        <button class="button is-static">Search</button>
                    </p>
                    <p class="control">
                        <input class="input" type="text" placeholder="japanese, mediterian, itallian..." />
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