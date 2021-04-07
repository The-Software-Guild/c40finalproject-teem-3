import {useState} from 'react';


export function useBusinessSearch(term, location){
    const [businesses, setBusinesses] = useState([]);
    const [amountResults, setAmountResults] = useState();
    const [searchParams, setSearchParams] = useState({term, location});

    useEffect(()=> {
        setBusinesses([]);
    })
}