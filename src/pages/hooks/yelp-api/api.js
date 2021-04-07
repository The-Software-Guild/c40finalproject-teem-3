import {API_BASE_URL, BEARER_TOKEN} from './config';
import queryString from 'query-string'

export function get(path, queryParam, queryParam2){
    const query1 = queryString.stringify(queryParam);
    const query2 = queryString.stringify(queryParam2);
    let baseAPI = API_BASE_URL;
    let token = BEARER_TOKEN;
    let fetchURL = baseAPI + path + query1 + '&'+ query2; 
    //console.log(fetchURL);
    return fetch(fetchURL, {
        headers: {
                'Authorization': 'Bearer AXt1BDHyPI46wJAWpSL-6M088HhGFDSl7bYNZk4E_FUmA1TXgrU4ffBYHSugH8_CcjEkkTfO9JfSSMPlEiCn4Qgm1YuoNpAFe8WT52cgSVW-jEzKkaqFDrjD_C1uYHYx',
                'Access-Control-Allow-Origin': '*',
                'Content-Type': 'application/json',
                "accepts":"application/json"
            }
    });
}

