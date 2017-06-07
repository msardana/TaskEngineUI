import axios from 'axios';
var taskService = require('./../server/tasks.js');


export const FETCH_TASKS = 'fetch_tasks';
export const FETCH_TASKS_RECIEVED = "fetch_tasks_recieved";
export const FETCH_TASKS_ERROR = "fetch_tasks_error";
export const TASK_SELECTED = 'task_selected';
export const CREATE_TASK = 'create_task';
export const UPDATE_TASK = 'update_task';

export function selectTask(task) {
	
	return {
		type: TASK_SELECTED,
		payload: task
	};
}

export function getTasks() {
	
	/*axios.defaults.baseURL = 'https://api.us.apiconnect.ibmcloud.com/hcl-exploration-dev/sb/api/tasks';
axios.defaults.headers.common['X-IBM-Client-Id'] = 'b56cce80-a3fc-4194-87d7-edddb4d3bd28';
axios.defaults.headers.post['Content-Type'] = 'application/json';

	axios.get()
	.then(function (response) {
    console.log(response);
	
		return {
		type: FETCH_TASKS_RECIEVED,
		payload: response.data,
		loading: false
	};

  })
  .catch(function (error) {
    console.log(error);
		return {
		type: FETCH_TASKS_ERROR,
		error: error,
		payload: null
	};
	
  });

		return {
		type: FETCH_TASKS,
		loading: true,
		payload: null
	};
*/
	return {
		type: FETCH_TASKS,
		payload: taskService.getAll('filters')
	};
}

export function createTask(values, callback) {
axios.defaults.baseURL = 'https://api.us.apiconnect.ibmcloud.com/hcl-exploration-dev/sb/api/tasks';
axios.defaults.headers.common['X-IBM-Client-Id'] = 'b56cce80-a3fc-4194-87d7-edddb4d3bd28';
axios.defaults.headers.post['Content-Type'] = 'application/json';
//taskService.create(values)
	const request = axios.post('',values)
	.then(function (response) {
		console.log(response);
		callback();
	})
	.catch(function (error) {
		console.log(error);
		callback();
	});
	
	return {
		type: CREATE_TASK,
		payload: request
	};
}

export function updateTask(values, callback) {

axios.defaults.baseURL = 'https://api.us.apiconnect.ibmcloud.com/hcl-exploration-dev/sb/api/tasks';
axios.defaults.headers.common['X-IBM-Client-Id'] = 'b56cce80-a3fc-4194-87d7-edddb4d3bd28';
axios.defaults.headers.post['Content-Type'] = 'application/json';
//taskService.create(values)
	const request = axios.patch(values.taskCode,values)
	.then(function (response) {
		console.log(response);
		callback();
	})
	.catch(function (error) {
		console.log(error);
		callback();
	});
	
	return {
		type: UPDATE_TASK,
		payload: request
	};
}
	