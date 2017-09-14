import fetch from 'isomorphic-fetch';
import { getMusicAssets } from '../../GraphQL';
import { getGraphcmsHeaders } from '../../utils';
import {
    REQUEST_ALL_MUSIC_ASSETS,
    RECIEVE_ALL_MUSIC_ASSETS,
} from '../constants';

export const requestMusicAssets = () => ({
    type: REQUEST_ALL_MUSIC_ASSETS,
});

export const receiveMusicAssets = (json) => ({
    type: RECIEVE_ALL_MUSIC_ASSETS,
    data: json.data,
    receivedAt: Date.now()
});

export const fetchMusicAssets = () => (dispatch) => {
        dispatch(requestMusicAssets());
        
        return fetch('https://api.graphcms.com/simple/v1/swampboy', {
            method: 'POST',
            headers: getGraphcmsHeaders(),
            body: JSON.stringify({
                query: getMusicAssets,
                variables: null,
            }),
        })
        .then((res) => res.json())
        .then((json) => dispatch(receiveMusicAssets(json)));
}