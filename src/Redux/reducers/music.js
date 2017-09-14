import {
    REQUEST_ALL_MUSIC_ASSETS,
    RECIEVE_ALL_MUSIC_ASSETS,
  } from '../constants';
  
const music = (
    state = {
      data: []
    },
    action
  ) => {
    switch (action.type) {
      case REQUEST_ALL_MUSIC_ASSETS:
        return {
          ...state,
          isFetching: true,
        }
      case RECIEVE_ALL_MUSIC_ASSETS:
        return {
          ...state,
          isFetching: false,
          data: action.data.allMusics,
          lastUpdated: action.receivedAt
        }   
      default:
        break;
    }
    return state;
  };

export default music;
