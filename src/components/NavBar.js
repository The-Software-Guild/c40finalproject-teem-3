import React, { Component } from 'react';
import { BrowserRouter , Redirect } from 'react-router-dom';
import styles from './NavBar.module.css'
import melpLogo from './melpLogo.png'
import AboutUs from '../pages/AboutUs'

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
                <button><a href="/AboutUs">About Us </a></button>
                <button><a href="/Home">Home </a></button>       
        
            </div>
        </div>

    );
}