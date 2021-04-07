import React from 'react';
import {SearchResultsSummary} from './SearchResultSummary'
import {SearchResults} from './SearchResults/SearchResults'
//import useReactRouter from 'use-react-router';
import {useBusinessSearch} from '../hooks/yelp-api/useBusinessSearch';


export function SearchPage() {
    //const {location} = useReactRouter();
    //const params = new URLSearchParams(location.search);
    //const term = params.get('find_desc');
    //const locationParam = params.get('find_loc');
    //const [businesses, amountResults, searchParams, setSearchParams] = useBusinessSearch(item, locationParam);

    return(
        <div>
            <SearchResultsSummary/>
            <SearchResults/>
        </div>
    );
}