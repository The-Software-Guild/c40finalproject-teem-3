import React from 'react';
import styles from './SearchResults.module.css';

export function SearchResult(props) {

    if(!props.business){
        return (<div/>);
    }

    //const tags = props.business.categories.map(category => <p key={props.business.id + category.title}> {category.title} </p>);
    const addressLines = props.business.location.display_address.map(addressLine => <span key={props.business.id + addressLine}> {addressLine} </span>);
    return(
        <div className={styles['search-result']}>
            <div className={styles['business-image']}>
                <img className={styles['business-image']} src={props.business.image_url} alt='business'/>
            </div>
            <div className={styles['business-info']}>
                <strong>{props.business.name} </strong>
               
            </div>
            <div className={styles['business-info']}>
                <p>Price Range: {props.business.price}</p> 
                <p>Rating: {props.business.rating}</p>
                <p>Total Reviews: {props.business.review_count}</p>
               
            </div>
            <div className={styles['business-address']}>
                <p>{props.business.phone}</p>
                <p> {addressLines} </p>
            </div>
        </div>
    );
}