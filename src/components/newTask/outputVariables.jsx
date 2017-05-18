import React from 'react';
import {Row,Col,Table,Button} from 'react-bootstrap';

class AssignmentGroup extends React.Component{
	render(){
		return(
		<div className="rPageSec">
			<div className="rPageHeading">Output Variables</div>
				<Table responsive striped bordered id="master_table">
					<thead>
					  <tr>
						<th width="20%">Task ID</th>
						<th width="40%">Variable</th>
						<th width="30%">Value</th>
						<th width="10%">Action</th>
					  </tr>
					</thead>
					<tbody>
					  <tr>
						<td>T00010</td>
						<td>Server IP</td>
						<td>10.10.10.10</td>
						<td className="text-c"><i title="Add Variables" className="fa fa-plus cursorPoint"></i></td>
						</tr>
					</tbody>
				</Table>		
				<Row><Col md={12}><Button bsStyle="primary" title="Save Variables">Save</Button></Col></Row>
		</div>
		);
	}
}

export default AssignmentGroup;