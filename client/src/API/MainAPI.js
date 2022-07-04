import axios from 'axios';
import { useQuery } from 'react-query';


// export const API_ROOT_PATH = '';
export const API_ROOT_PATH = 'http://localhost:5000';

export const GetTestQuery = (number) => {
    return (
        useQuery(['Test', number], () => 
            axios
                .get(`${API_ROOT_PATH}/query?number=${number}`)
                .then(res => res.data)
            , 
            {
                refetchOnWindowFocus: true,
                staleTime: 4000,
                cacheTime: 5000,
                enabled: Boolean(number),
                retry: 3,
            }
        )
    )
}