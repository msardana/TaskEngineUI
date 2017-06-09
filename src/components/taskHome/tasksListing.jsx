import React from 'react';
import {Link} from 'react-router-dom';
import {Row,Col,FormGroup,FormControl,ControlLabel,Button,Table,Pagination} from 'react-bootstrap';
import SearchFilter from './../common/searchFilter.jsx';
import TasksList from './taskList.jsx';
import TaskView from './taskView.jsx';
import Sort from './sort.jsx';
import {LinkContainer} from 'react-router-bootstrap';
import {connect} from 'react-redux';
import {fetchTasks} from '../../actions/index';
import {bindActionCreators} from 'redux';
var taskService = require('./../../server/tasks.js');

class TasksMain extends React.Component {
	constructor(props){
	super(props);
		
	};
	
	componentWillMount() {
	
		this.props.fetchTasks();
	}
		
   render() {
   console.log(this.props.isFetching);
   
      return (
	  		<Row className="row-eq-height">
				<Col md={8} sm={12} xs={12}>
					<div className="">
						{/* Page Left Section Start*/}
						
						<div>
							<div className="border-b padding-b-10 margin-0">
								<Row>
									<Col md={7}>
										<SearchFilter />
									</Col>
									<Col md={5}>
										<Sort />
									</Col>
								</Row>
							</div>
							<Row className="myPagin margin-t-10">
								<Col md={3}>
									<Row>
									  <Col className="padding-r-0 padding-t-5" componentClass={ControlLabel} sm={4}>Show</Col>
									  <Col sm={4} className="padding-0"><FormControl className="padding-5" componentClass="select">
										<option value="10">10</option>
										<option value="25">25</option>
										<option value="50">50</option>
										<option value="100">100</option>
									  </FormControl></Col>
									</Row>
								</Col>
								<Col md={9}>
									<div className="text-r">
										<Pagination className="margin-0" prev next boundaryLinks items={10} maxButtons={3}   />
									</div>
								</Col>
							</Row>										
							{this.props.tasks.length > 0 ? <TasksList /> :<p> Loading...</p>}
						</div>
						{/* Page Left Section End*/}
					</div>

				</Col>
				<Col md={4} className="hidden-sm hidden-xs colRightHeight">
					<div className="">
						{/* Page Right Section Start*/}
						<TaskView />
						{/* Page Right Section End*/}
					</div>
				</Col>     
			</Row>
	
      );
   }
}

function mapStateToProps(state) {
	return {tasks: state.tasks, isFetching : state.isFetching};
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({fetchTasks: fetchTasks}, dispatch);
}
export default connect(mapStateToProps,mapDispatchToProps)(TasksMain);