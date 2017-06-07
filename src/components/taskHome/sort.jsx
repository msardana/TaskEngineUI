import React from 'react';
import {Link} from 'react-router-dom';
import {Row,Col,FormGroup,FormControl,ControlLabel,Button,Table,Pagination} from 'react-bootstrap';


class SortTasks extends React.Component {
	constructor(props){
	super(props);
	};
	
   render() {
      return (

			<div className="text-r myFields">
				<ControlLabel className="display-inline">Sort</ControlLabel>
				<FormControl className="myControl mySort" componentClass="select">
					<option value="10">Task ID</option>
					<option value="25">Description</option>
					<option value="50">Sequence</option>
					<option value="50">Assignment Group</option>
				</FormControl>	
			</div>
			
		);
	}
}

export default SortTasks;