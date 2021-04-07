import {API_BASE_URL, BEARER_TOKEN} from './config';
import queryString from 'query-string'

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
                'Authorization': 'Bearer AXt1BDHyPI46wJAWpSL-6M088HhGFDSl7bYNZk4E_FUmA1TXgrU4ffBYHSugH8_CcjEkkTfO9JfSSMPlEiCn4Qgm1YuoNpAFe8WT52cgSVW-jEzKkaqFDrjD_C1uYHYx',
                'Access-Control-Allow-Origin': '*',
                'Content-Type': 'application/json',
                "accepts":"application/json"
            }
    });
}

