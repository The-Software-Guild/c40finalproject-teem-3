import React from 'react';
import styles from './SearchResults.module.css';

export function SearchResult(props) {

    if(!props.business){
        return (<div/>);
    }

    //const tags = props.business.categories.map(category => <p key={props.business.id + category.title}> {category.title} </p>);
    const addressLines = props.business.location.display_address.map(addressLine => <p key={props.business.id + addressLine}> {addressLine} </p>);
    return(
        <div className={styles['search-result']}>
            <div className={styles['business-image']}>
                <img className={styles['business-image']} src={props.business.image_url} alt='business'/>
            </div>
            <div className={styles['business-info']}>
                <strong>{props.business.name} </strong>
                <p>Price Range: {props.business.price}</p> 
                <p>Rating: {props.business.rating}</p>
                <p>Total Reviews: {props.business.review_count}</p>
                
            </div>
            <div>
                <p>{props.business.phone}</p>
                {addressLines}
            </div>
        </div>
    );
}