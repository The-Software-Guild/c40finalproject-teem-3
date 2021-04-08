import queryString from 'query-string'
import axios from 'axios';

export function get(path, queryParams) {
    const query = queryString.stringify(queryParams);
    let fetchURL = "/v3" + path + query;
<<<<<<< HEAD
    let API_Key = ''; //API KEY HERE
=======
    let API_Key = 'TN1_Qg2qSyxlLk1bkJvfn7rWM57xfDyHSVrC90jfpRAB6hiJ74bbBwVofqYc9vTJJwjt0JyzgfIfjp-TxMvkIdz5EcQlAcaQ3E8u3fQruTvDYBjfXsW_UsVe2CxvYHYx'; //API KEY HERE
>>>>>>> 8dc70de8ef35aed16b9aaf905aeaa6f1a67e854a
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

