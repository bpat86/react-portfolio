import { combineReducers } from 'redux';
import navigationReducer from '../reducers/navigationReducer';
import environmentReducer from '../reducers/environmentReducer';
import instagramModalReducer from '../reducers/instagramModalReducer';
import fetchInstagramFeedReducer from '../reducers/fetchInstagramFeedReducer';
import fetchInstagramPostPageReducer from '../reducers/fetchInstagramPostPageReducer';

const rootReducer = combineReducers({
    environmentReducer,
    navigationReducer,
    fetchInstagramFeedReducer,
    instagramModalReducer,
    fetchInstagramPostPageReducer
});

export default rootReducer;
