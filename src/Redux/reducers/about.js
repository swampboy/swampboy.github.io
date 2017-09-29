import {
    REQUEST_ABOUT_COPY,
    RECIEVE_ABOUT_COPY,
  } from '../constants';
  
const about = (
    state = {
      data: {
        Author: {
          authorImage: {}
        }
      }
    },
    action
  ) => {
    switch (action.type) {
      case REQUEST_ABOUT_COPY:
        return {
          ...state,
          isFetching: true,
        }
      case RECIEVE_ABOUT_COPY:
        return {
          ...state,
          isFetching: false,
          data: action.data,
          lastUpdated: action.receivedAt
        }   
      default:
        break;
    }
    return state;
  };

export default about;
