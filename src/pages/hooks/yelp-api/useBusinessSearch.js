import {useState, useEffect} from 'react';
import * as api from './api';

export function useBusinessSearch(term, location){
    const [businesses, setBusinesses] = useState([]);
    const [amountResults, setAmountResults] = useState();
    const [searchParams, setSearchParams] = useState({term});
    const [searchParams2, setSearchParams2] = useState({location});

    useEffect(()=> {
        setBusinesses([]);
        const fetchData = async () =>{
            try{
                const rawData = await api.get('/businesses/search?', searchParams, searchParams2);
                const resp = await rawData.json();
                setBusinesses(resp.businesses);
                setAmountResults(resp.total); 
            }catch(e){
                console.error(e);
            }
        };
        fetchData();
    }, [searchParams,searchParams2]);
    return [businesses, amountResults,searchParams,setSearchParams,searchParams2,setSearchParams2];
}