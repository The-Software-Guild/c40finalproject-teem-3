import {useState, useEffect} from 'react';
import * as api from './api';

export function useBusinessSearch(categories, location){
    const [businesses, setBusinesses] = useState([]);
    const [amountResults, setAmountResults] = useState();
    const [searchParams, setSearchParams] = useState({categories, location});

    useEffect(()=> {
        setBusinesses([]);
        const fetchData = async () =>{
            try{
                const rawData = await api.get('/businesses/search?', searchParams);
                console.log(rawData);
                const resp = await rawData;
                setBusinesses(resp.businesses);
                setAmountResults(resp.total); 
            }catch(e){
                console.error(e);
            }
        };
        fetchData();
    }, [searchParams]);
    return [businesses, amountResults,searchParams,setSearchParams];
}