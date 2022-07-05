import axios from 'axios';
import { useQuery } from 'react-query';

const handleError = e => console.log(e)


// export const API_ROOT_PATH = '';
export const API_ROOT_PATH = 'http://localhost:5000';

export const GetBoardStateQuery = (gameID, isSettingUp, isRunning) => {
    return (
        useQuery(['BoardState', gameID], () => 
            axios
                .get(`${API_ROOT_PATH}/game/next?gameID=${gameID}`)
                .then(res => res.data)
            , 
            {
                refetchOnWindowFocus: false,
                staleTime: 4000,
                cacheTime: 5000,
                enabled: Boolean(gameID) && !isSettingUp,
                retry: 3,
                refetchInterval: isRunning ? 100 : false
            }
        )
    )
}

export const PostNewGame = async (gameID) => {
    return await axios
        .post(`${API_ROOT_PATH}/game/init/id?gameID=${gameID}`)
        .then(res => res.data)
        .catch(e => handleError(e))
}

export const PostGameConfig = async (gameID, config) => {
    return await axios
        .post(`${API_ROOT_PATH}/game/init/config?gameID=${gameID}&config=${config}`)
        .then(res => res.data)
        .catch(e => handleError(e))
}

export const DeleteGame = async (gameID) => {
    return await axios
        .delete(`${API_ROOT_PATH}/game?gameID=${gameID}`)
        .then(res => res.data)
        .catch(e => handleError(e))
}