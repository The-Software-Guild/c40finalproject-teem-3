import {API_BASE_URL} from './config';
import queryString from 'query-string'
// THIS FUNCTION REQUIRES AN API KEY/ TOKEN IN LIKE 15
export function get(path, queryParams){
    const query = queryString.stringify(queryParams);

    let baseAPI = API_BASE_URL;
    //let token = BEARER_TOKEN;
    //let sort_by = "&sort_by=distance";
    let fetchURL = baseAPI + path + query; 
    console.log(fetchURL);
    //alert(fetchURL);
    return fetch(fetchURL, {
        headers: {
                'Authorization': 'Bearer TOKEN-HERE',
                'Access-Control-Allow-Origin': '*',
                'Content-Type': 'application/json',
                "accepts":"application/json"
            }
    });
}

