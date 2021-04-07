import React from 'react';
import {SearchResultsSummary} from './SearchResultSummary'
import {SearchResults} from './SearchResults/SearchResults'
export function SearchPage() {
    return(
        <div>
            <SearchResultsSummary/>
            <SearchResults/>
        </div>
    );
}