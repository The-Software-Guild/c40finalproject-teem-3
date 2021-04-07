import React from 'react';
import styles from './SearchResults.module.css';

export function SearchResult(props) {

    return(
        <div className={styles['search-result']}>
            <div className={styles['business-image']}>
                <img src='https://via.placeholder.com/150' alt='business'/>
            </div>
            <div className={styles['business-info']}>
                <p>Restaurant_Name </p>
                <p>Price Range: </p> 
                <p>Rating: | Total Reviews</p>
            </div>
            <div>
                <p>Phone Number</p>
                <p>Street</p>
                <p>Zipcode, City</p>
            </div>
        </div>
    );
}