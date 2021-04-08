import queryString from 'query-string'
import axios from 'axios';

export function get(path, queryParams) {
    const query = queryString.stringify(queryParams);
    let fetchURL = "/v3" + path + query;
    let API_Key = 'qCWNCjeuS0fV3AfLP0vzcnb_HYqlOK-j1qBo-vlYo-NDwiqIC5n7cXW7gXWyC08a3gYt3ii1opQLZcAEdttYp-VyKmgFxD0e9_FVrWz7roeQSFpWUIfoD5mRRiRvYHYx'; //API KEY HERE
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

