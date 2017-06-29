import { combineReducers } from 'redux';
import NewsReducer from './reducer_news';
import AdvertisementReducer from './reducer_advertisement';
import userInfo from './reducer_user';
import tasksReducer from './reducer_tasks';
import taskReducer from './reducer_selected_task';
import {reducer as formReducer} from 'redux-form';
import formOptionReducer from './reducer_selected_options'
import loading from './loading';
import inputVariablesReducer from './reducer_input_variables';
import outputVariablesReducer from './reducer_output_variables';
import activityLogsReducer from './reducer_activityLog';
import auditLogsReducer from './reducer_audit';

const rootReducer = combineReducers({
	news: NewsReducer,
	advertisement: AdvertisementReducer,
	appUser: userInfo,
	tasks: tasksReducer,
	isFetching: tasksReducer,
	selectedTask: taskReducer,
	selectedOption: formOptionReducer,
	form: formReducer,
	loading: inputVariablesReducer,
	inputVariables: inputVariablesReducer,
	outputVariables: outputVariablesReducer,
	activityLogs: activityLogsReducer,
	auditLogs: auditLogsReducer
});

export default rootReducer;
