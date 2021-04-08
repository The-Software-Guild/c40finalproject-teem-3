import queryString from 'query-string'
import axios from 'axios';

export function get(path, queryParams) {
    const query = queryString.stringify(queryParams);
    let fetchURL = "/v3" + path + query;
    console.log(fetchURL);

    let results = axios.get(fetchURL,
    {
        headers: {
            'Authorization': 'Bearer GdR9jT6Lkxj12Kv0UwKPT9BRhIfaQ72XBlPVz-nUKfxJJs0xv0nfppFtKhrH1bbOJudbZTurAFg3sgJEFY1lq5-MvlXDNt-8x08GQ6nze4jYetFF7vCQFv1faGNuYHYx',
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

