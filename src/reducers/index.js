import { combineReducers } from 'redux';
import NewsReducer from './reducer_news';
import AdvertisementReducer from './reducer_advertisement';
import userInfo from './reducer_user';

const rootReducer = combineReducers({
	news: NewsReducer,
	advertisement: AdvertisementReducer,
	appUser: userInfo

});

export default rootReducer;
