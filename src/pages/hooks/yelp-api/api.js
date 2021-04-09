import queryString from 'query-string'
import axios from 'axios';

export function get(path, queryParams) {
    const query = queryString.stringify(queryParams);
    let fetchURL = "/v3" + path + query;

    let API_Key = ''; //API KEY HERE

     //API KEY HERE
    let bearer = 'Bearer ' + API_Key;
    console.log(fetchURL);

    let results = axios.get(fetchURL,
    {
        headers: {
            'Authorization': bearer,
            'Access-Control-Allow-Origin': '*',
            'Content-Type': 'application/json',
            "accepts":"application/json"
        }
    })
    .then(res => {
        const info = res.data;
        //console.log(typeof info);
        return info;
    })
    return results;
}

