import React from 'react'
import styles from './SearchResultSummary.module.css'

export function SearchResultsSummary(props){
    let resultStats = null; 
    if(props.amountResults && props.shownResults){
        resultStats = <strong>
            Showing 1-{props.shownResults} out of {props.amountResults} results
        </strong>
    }

    return(
        <div className={styles['container']}> 
            <div className={styles['search-summary']}>
                <p id="search_Category" className="subtitle">
                    Category: <strong> {props.category}</strong> | Zip-code: <strong> {props.location} </strong>
                
                </p>
                {resultStats}
            </div>
            <div className={styles.filters}>
                
            </div>

        </div>
    )
}