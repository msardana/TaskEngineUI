import React from 'react';
import {Link} from 'react-router';
import {ListGroup,ListGroupItem} from 'react-bootstrap';

class TaskView extends React.Component{
	render(){
		return(
		<div className="rPageSec">
			<div className="rPageHeading"><div className="iconSet"><Link title="View Details" to="/editTask"><i className="fa fa fa-pencil"></i></Link></div>T0001</div>
			<ListGroup bsClass="" className="ListDetails">
				<ListGroupItem bsClass=""><span className="labSpan">Description-</span>Server Installation</ListGroupItem>
				<ListGroupItem bsClass=""><span className="labSpan">Task Sequence-</span>1</ListGroupItem>
				<ListGroupItem bsClass=""><span className="labSpan">Assignment Group-</span>Windows Team</ListGroupItem>
				<ListGroupItem bsClass=""><span className="labSpan">Assigned To-</span>Dheeraj Saraswat</ListGroupItem>
				<ListGroupItem bsClass=""><span className="labSpan">Target Date-</span>4/28/2017</ListGroupItem>
			</ListGroup>
		</div>
		);
	}
}

export default TaskView;