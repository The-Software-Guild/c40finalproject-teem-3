import React from 'react'
import styles from './SearchResultSummary.module.css'

export function SearchResultsSummary(){
    return(
        <div className={styles['container']}> 
            <div className={styles['search-summary']}>
                <p id="search_Category" className="subtitle">
                    Japanese, <strong> Texas </strong>
                
                </p>
                <p>
                    Showing 1-20 out of 543 results
                </p>
            </div>
            <div className={styles.filters}>
                
            </div>

        </div>
    )
}