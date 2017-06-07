import React from 'react';
import {Link} from 'react-router-dom';
import {ListGroup,ListGroupItem} from 'react-bootstrap';
import {Row,Col,FormGroup,FormControl,ControlLabel,Button,Table,Pagination} from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap';
import {connect} from 'react-redux';
import {selectTask} from './../../actions/index';

import taskView from './taskView.jsx';

class TaskList extends React.Component{

	constructor(props){
		super(props);

	};
	

	render(){
		
		return(
		<div className="myTableData margin-t-10">
			{this.props.tasks ? 
				
					<Table responsive striped bordered className="margin-0">
						<thead>
						  <tr>
							<th width="10%">Task ID</th>
							<th width="10%">Parent WorkItem</th>
							<th width="5%">Sequence#</th>
							<th width="23%">Assignment Group</th>
							<th width="30%">Start date</th>
							<th width="27%">Target date</th>
							<th width="5%">Action</th>
						  </tr>
						</thead>
						<tbody>	
						
								{
									this.props.tasks.map(item=>  
										<tr key={item.taskCode}>
										<td><Link to="#" onClick={() =>  this.props.selectTask(item)}>{item.taskCode } <i className="fa fa-info-circle" ></i></Link></td>
										<td>{item.workItemId ? item.workItemId : ''}</td>
										<td>{item.sequenceNumber}</td>
										<td><Link to="/assignmentGroup">{item.assignedToGroup} {item.assignedToGroup ? <i className="fa fa-info-circle" ></i> : ''}</Link></td>
										<td>{item.startDate}</td>
										<td>{item.dueDate}</td>										
										<td><div className="text-c f-size-14"><LinkContainer to="/editTask" title="Edit Task" onClick={() =>  this.props.selectTask(item)}><a title="Edit Task" href="#"><i className="fa fa fa-pencil"></i></a></LinkContainer></div>
										</td>
										</tr>
									)
								}									
									
						</tbody>
					  </Table>		
				
			  : <p> Loading... </p>
			}	
			</div>
		);
	}
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({selectTask: selectTask}, dispatch);
}

export default connect(null, {selectTask})(TaskList);