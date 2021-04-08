import React, {useState} from 'react';
import styles from './NavBar.module.css'
import melpLogo from './melpLogo.png'
import { useHistory} from 'react-router-dom';

export function NavBar(props) {

    const [term, setTerm] = useState(props.term || '');
    const [location, setLocation] = useState(props.location || '');
    let history = useHistory();

    function submit(e){
        if (typeof props.search === 'function'){
            props.search(term, location);
        }
        console.log(term, location);
        e.preventDefault();
    }

    function home(e){
        history.push('/');
        history.go(0);
    }

    return (
        <form className={styles['nav-bar']} onSubmit={submit}>
    
                <div className="field has-addons">
                    
                        <img src={melpLogo} alt="Melp Logo" width="150" onClick={home}/> 
                        <input className={styles.zipCode} 
                            onChange={(e) => setLocation(e.target.value)}
                            type="text" 
                            placeholder="Zip Code" required/>

                        <input className={styles.input} 
                            onChange={(e) => setTerm(e.target.value)}
                            type="text" 
                            placeholder="Japanese, Mediterranean, Italian..." />
        
                        <button className={styles.button}
                            onClick={submit}>Search</button>
         
                <button> Login </button>
                <button> Sign Up </button>
                <button><a href="/AboutUs">About Us </a></button>
                <button><a href="/Home">Home </a></button>       
        
            </div>
        </form>

    );
}