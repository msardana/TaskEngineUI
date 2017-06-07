import { combineReducers } from 'redux';
import NewsReducer from './reducer_news';
import AdvertisementReducer from './reducer_advertisement';
import userInfo from './reducer_user';
import tasksReducer from './reducer_tasks';
import taskReducer from './reducer_selected_task';
import {reducer as formReducer} from 'redux-form';
import loading from './loading';

const rootReducer = combineReducers({
	news: NewsReducer,
	advertisement: AdvertisementReducer,
	appUser: userInfo,
	tasks: tasksReducer,
	selectedTask: taskReducer,
	form: formReducer,
	loading: loading
});

export default rootReducer;
