import React from 'react';
import {SearchResultsSummary} from './SearchResultSummary'
import {SearchResults} from './SearchResults/SearchResults'
import { useHistory , useParams} from 'react-router-dom';
import {useBusinessSearch} from '../hooks/yelp-api/useBusinessSearch';
import styles from './SearchResultSummary.module.css'

export function SearchPage() {
    const {location} = useHistory();
    const params = new URLSearchParams(location.search);
    const categories = params.get('find_desc');
    const locationParam = params.get('find_loc');
    const [businesses, amountResults, searchParams, setSearchParams] = useBusinessSearch(categories, locationParam);

    return(
        <div>
            <SearchResultsSummary 
                categories={categories} 
                location={locationParam} 
                amountResults = {amountResults} 
                shownResults = {businesses ? businesses.length : 0}    
            />
            <SearchResults businesses={businesses}/>
        </div>
    );
}