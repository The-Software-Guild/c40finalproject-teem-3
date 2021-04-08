import {API_BASE_URL} from './config';
import queryString from 'query-string'
<<<<<<< HEAD
// THIS FUNCTION REQUIRES AN API KEY/ TOKEN IN LIKE 15
export function get(path, queryParams){
    const query = queryString.stringify(queryParams);

=======

export function get(path, queryParam, queryParam2){
    const query1 = queryString.stringify(queryParam);
    const query2 = queryString.stringify(queryParam2);
>>>>>>> parent of 4d1f803 (Fetching Categories Given Zipcode)
    let baseAPI = API_BASE_URL;
    let token = BEARER_TOKEN;
    let fetchURL = baseAPI + path + query1 + '&'+ query2; 
    //console.log(fetchURL);
    return fetch(fetchURL, {
        headers: {
                'Authorization': 'Bearer TOKEN-HERE',
                'Access-Control-Allow-Origin': '*',
                'Content-Type': 'application/json',
                "accepts":"application/json"
            }
    });
}

