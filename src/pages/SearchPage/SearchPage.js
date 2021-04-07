import React from 'react';
import {SearchResultsSummary} from './SearchResultSummary'
import {SearchResults} from './SearchResults/SearchResults'
import { useHistory , useParams} from 'react-router-dom';
import {useBusinessSearch} from '../hooks/yelp-api/useBusinessSearch';

export function SearchPage() {
    const {location} = useHistory();
    const params = new URLSearchParams(location.search);
    const term = params.get('find_desc');
    const locationParam = params.get('find_loc');
    const [businesses, amountResults, searchParams, setSearchParams] = useBusinessSearch(term, locationParam);

    return(
        <div>
            <SearchResultsSummary term={term} location={locationParam}/>
            <SearchResults businesses={businesses}/>
        </div>
    );
}