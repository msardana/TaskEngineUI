import React from 'react';
import ReactDOM from 'react-dom';

import {Router,Route,hashHistory} from 'react-router';
import {Provider} from 'react-redux';
import {createStore,applyMiddleware} from 'redux';
import reducers from './reducers';
import ReduxPromise from 'redux-promise';

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

import TaskHome from './components/taskHome.jsx';
import NewTask from './components/newTask.jsx';
import TaskView from './components/taskView.jsx';
import AssignmentGroup from './components/assignmentGroup.jsx';

ReactDOM.render(
	<Provider store={createStoreWithMiddleware(reducers)}>
		<Router history={hashHistory}>
			<Route path="/" component={TaskHome}/>
			<Route path="/newTask" component={NewTask}/>
			<Route path="/taskView" component={TaskView}/>
			<Route path="/assignmentGroup" component={AssignmentGroup}/>
		</Router>
	</Provider>, document.getElementById('mainApp')
);
