import React from 'react';
import {Link} from 'react-router-dom';
import {ListGroup,ListGroupItem} from 'react-bootstrap';
import ProcessHierarchy from './processHierarchy.jsx';
import {connect} from 'react-redux';

class TaskDetail extends React.Component{
	constructor(props){
		super(props);

	};

	render(){
		
		if (!this.props.task) {
			return <ProcessHierarchy />;
		}
		return(
			<div className="rPageSec">
				<div className="rPageHeading"><div className="iconSet"><Link title="View Details" to="/editTask"><i className="fa fa fa-pencil"></i></Link></div>{this.props.task.taskCode}</div>
				<ListGroup bsClass="" className="ListDetails">
					<ListGroupItem bsClass=""><span className="labSpan">Description-</span>{this.props.task.description}</ListGroupItem>
					<ListGroupItem bsClass=""><span className="labSpan">Task Sequence-</span>{this.props.task.sequenceNumber}</ListGroupItem>
					<ListGroupItem bsClass=""><span className="labSpan">Assignment Group-</span>{this.props.task.assignedToGroup}</ListGroupItem>
					<ListGroupItem bsClass=""><span className="labSpan">Assigned To-</span>{this.props.task.assignedTo}</ListGroupItem>
					<ListGroupItem bsClass=""><span className="labSpan">Target Date-</span>{this.props.task.dueDate}</ListGroupItem>
				</ListGroup>
			</div>
		);
	}
}


function mapStateToProps(state) {
	return {
		task: state.selectedTask
	};
}

export default connect(mapStateToProps)(TaskDetail);