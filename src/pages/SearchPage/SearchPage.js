import React from 'react';
import {SearchResultsSummary} from './SearchResultSummary'
import {SearchResults} from './SearchResults/SearchResults'
import { useHistory , useParams} from 'react-router-dom';


export function SearchPage() {
    const {location} = useHistory();
    const params = new URLSearchParams(location.search);
    const term = params.get('find_desc');
    const locationParam = params.get('find_loc');
 
    return(
        <div>
            <SearchResultsSummary term={term} location={locationParam}/>
            <SearchResults/>
        </div>
    );
}