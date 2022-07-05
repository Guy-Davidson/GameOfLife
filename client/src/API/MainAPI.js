import axios from 'axios';
import { useQuery } from 'react-query';

const handleError = e => console.log(e)


// export const API_ROOT_PATH = '';
export const API_ROOT_PATH = 'http://localhost:5000';

export const GetBoardStateQuery = (gameID, isSettingUp) => {
    return (
        useQuery(['BoardState', gameID], () => 
            axios
                .get(`${API_ROOT_PATH}/next?gameID=${gameID}`)
                .then(res => res.data)
            , 
            {
                refetchOnWindowFocus: false,
                staleTime: 4000,
                cacheTime: 5000,
                enabled: Boolean(gameID) && !isSettingUp,
                retry: 3,
            }
        )
    )
}

export const PostNewGame = async (gameID) => {
    return await axios
        .post(`${API_ROOT_PATH}/init/id?gameID=${gameID}`)
        .then(res => res.data)
        .catch(e => handleError(e))
}

export const PostGameConfig = async (gameID, config) => {
    return await axios
        .post(`${API_ROOT_PATH}/init/config?gameID=${gameID}&config=${config}`)
        .then(res => res.data)
        .catch(e => handleError(e))
}