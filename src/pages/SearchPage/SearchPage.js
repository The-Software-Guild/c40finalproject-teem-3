import React from 'react';
import {SearchResultsSummary} from './SearchResultSummary'
import {SearchResults} from './SearchResults/SearchResults'
import { useHistory } from 'react-router-dom';
import {useBusinessSearch} from '../hooks/yelp-api/useBusinessSearch';

export function SearchPage() {
    const {location} = useHistory();
    const params = new URLSearchParams(location.search);
    const category = params.get('find_desc');
    const locationParam = params.get('find_loc');
    const [businesses, amountResults] = useBusinessSearch(category, locationParam);

    return(
        <div>
            <SearchResultsSummary 
                category={category} 
                location={locationParam} 
                amountResults = {amountResults} 
                shownResults = {businesses ? businesses.length : 0}    
            />
            <SearchResults businesses={businesses}/>
        </div>
    );
}