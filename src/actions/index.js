import axios from 'axios';
var taskService = require('./../server/tasks.js');


export const FETCH_TASKS_REQUEST = 'fetch_tasks_request';
export const FETCH_TASKS_RECIEVED = "fetch_tasks_recieved";
export const FETCH_TASKS_ERROR = "fetch_tasks_error";
export const TASK_SELECTED = 'task_selected';
export const CREATE_TASK = 'create_task';
export const UPDATE_TASK = 'update_task';
export const CREATE_ACTIVITY_LOG = 'create_activity_log';
export const FORM_OPTION_SELECTED = "form_option_selected";
export const FETCH_INPUT_VARIABLES_REQUEST = "fetch_input_variables_req";
export const FETCH_INPUT_VARIABLES_RECIEVED = "fetch_input_variables_res";
export const FETCH_OUTPUT_VARIABLES_REQUEST = "fetch_output_variables_req";
export const FETCH_OUTPUT_VARIABLES_RECIEVED = "fetch_output_variables_res";
export const FETCH_ACTIVITY_LOG_RECIEVED = "fetch_activity_log_res";
export const FETCH_ACTIVITY_LOG_REQUEST = "fetch_activity_log_req";
export const FETCH_AUDIT_LOG_RECIEVED = "fetch_audit_log_res";
export const FETCH_AUDIT_LOG_REQUEST = "fetch_audit_log_req";

export function selectTask(task) {
	
	return {
		type: TASK_SELECTED,
		payload: task
	};
}

function requestTasks() {
	console.log('request tasks action called');
	return {
		type: FETCH_TASKS_REQUEST,
		isFetching: true,
		payload: taskService.getAll('filters')
	}
}

function recieveTasks(json) {
	console.log('recieve task action called');	
	return {
    type: FETCH_TASKS_RECIEVED,  
	isFetching: false,	
    payload: json
  }	
}

export function sortTasks(field) {	
	
	var queryParam = '?filter[order]=' + field + ' ASC';

	return function (dispatch) {
		dispatch(requestTasks())
		return axios.get('https://tasksrestnew.mybluemix.net/api/tasks' + queryParam)
		.then(response => dispatch(recieveTasks(response.data)))      
  }	
}

export function filterTasksByParam(paramname, paramval) {

	console.log(paramname + paramval);
	var query = [{"field": paramname, "value" : paramval}];
	console.log(query);
}

export function filterTasks(filter) {
	// expect json with key as column name to sort by and value as value to be used for filter e.g. [{"field": "taskCode", "value" : "tsk01"}, {"field": "statusId", "value" : }]
  var queryParam = '?';
  
  if(filter && filter.length > 1) {
	  
	  for (var i in filter) {
		queryParam += 'filter[where][and][' + i + '][' + filter[i].field + ']=' + filter[i].value + '&';		
	  }	    
  } else if (filter.length == 1 && filter[0].value != '') {
	  queryParam += 'filter[where][' + filter[0].field + ']=' + filter[0].value;
  } 
    	
  
  return function (dispatch) {
	  console.log('caled me')
    dispatch(requestTasks())
    return axios.get('https://tasksrestnew.mybluemix.net/api/tasks' + queryParam)
      .then(response => dispatch(recieveTasks(response.data)))      

}
}

export function fetchTasks() {
	console.log('fetch tasks action called');
  
  return function (dispatch) {
	  console.log('caled me')
    dispatch(requestTasks())
    return axios.get('https://tasksrestnew.mybluemix.net/api/tasks')
      .then(response => dispatch(recieveTasks(response.data)))      
  }
  
	
	/*

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

	return {
		type: FETCH_TASKS,
		payload: taskService.getAll('filters')
	}; */
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

export function selectFormOption(option) {	
	return {
		type: FORM_OPTION_SELECTED,
		payload: option
	};	
}

function requestInputVariables() {
	console.log('request input action called');
	return {
		type: FETCH_INPUT_VARIABLES_REQUEST,
		loading: true
	}
}

function recieveInputVariables(json) {
	
	var outputs = [];
	for (var i in json)	 {
		var taskOutputs = json[i].outputs;
		
		if (taskOutputs.length > 0) {
			for (var j in taskOutputs) {						
				outputs.push(taskOutputs[j]);	
			}
		}		
	}
	console.log(outputs)
	
  return {
    type: FETCH_INPUT_VARIABLES_RECIEVED,  
	loading: false,	
    payload: outputs
  }	
}

export function fetchInputVariables(workItemId) {
	//Need workItemId, sequenceNumber of current task as inputs and then query for workitemid, status=complete, seqnum <= current, include fields = outputs
	
	console.log('fetch input variables action called');
  var queryStr = '?filter[where][and][0][workItemId]=' + workItemId +'&filter[where][and][1][statusId]=3&filter[include]=outputs';
  return function (dispatch) {	
    dispatch(requestInputVariables())
    return axios.get('https://tasksrestnew.mybluemix.net/api/tasks' + queryStr)
      .then(response => dispatch(recieveInputVariables(response.data)))      
  }
}

export function fetchOutputVariables(taskCode) {

  return function (dispatch) {	
    dispatch(fetchRequest(FETCH_OUTPUT_VARIABLES_REQUEST))
    return axios.get('https://tasksrestnew.mybluemix.net/api/taskOutputs?filter[where][taskCode]=' + taskCode)
      .then(response => dispatch(responseRecieved(FETCH_OUTPUT_VARIABLES_RECIEVED, response.data)))      
  }
	
	
}
	
function fetchRequest(reqType) {	
	return {
		type: reqType,
		loading: true
	}
}

function responseRecieved(resType, json) {
	
  return {
    type: resType,  
	loading: false,	
    payload: json
  }	
}

export function sortActivityLogs(taskCode, order) {
  
  return function (dispatch) {	
    dispatch(fetchRequest(FETCH_ACTIVITY_LOG_REQUEST))
    return axios.get('https://tasksrestnew.mybluemix.net/api/activityLogs?filter[where][taskCode]=' + taskCode + '&filter[order]=createdDate ' + order) 
      .then(response => dispatch(responseRecieved(FETCH_ACTIVITY_LOG_RECIEVED, response.data)))      
  }	
	
}

export function sortAuditLogs(taskCode, order){
  return function (dispatch) {	
    dispatch(fetchRequest(FETCH_AUDIT_LOG_REQUEST))
    return axios.get('https://tasksrestnew.mybluemix.net/api/auditLogs?filter[where][taskCode]=' + taskCode + '&filter[order]=updatedOn ' + order)
      .then(response => dispatch(responseRecieved(FETCH_AUDIT_LOG_RECIEVED, response.data)))      
  }
	
	
}

export function fetchActivityLogs(taskCode) {
	
  return function (dispatch) {	
    dispatch(fetchRequest(FETCH_ACTIVITY_LOG_REQUEST))
    return axios.get('https://tasksrestnew.mybluemix.net/api/activityLogs?filter[where][taskCode]=' + taskCode)
      .then(response => dispatch(responseRecieved(FETCH_ACTIVITY_LOG_RECIEVED, response.data)))      
  }
}

export function createActivityLog(values, callback) {
axios.defaults.baseURL = 'https://api.us.apiconnect.ibmcloud.com/hcl-exploration-dev/sb/api/activityLogs';
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
		type: CREATE_ACTIVITY_LOG,
		payload: request
	};	
}
	
export function fetchAuditLogs(taskCode) {
	
  return function (dispatch) {	
    dispatch(fetchRequest(FETCH_AUDIT_LOG_REQUEST))
    return axios.get('https://tasksrestnew.mybluemix.net/api/auditLogs?filter[where][taskCode]=' + taskCode)
      .then(response => dispatch(responseRecieved(FETCH_AUDIT_LOG_RECIEVED, response.data)))      
  }
}