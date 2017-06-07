import React from 'react';
import {Table} from 'react-bootstrap';

class AssignmentGroup extends React.Component{
	render(){
		return(
		<div className="rPageSec">
			<div className="rPageHeading">Input Variables</div>
				<Table responsive striped bordered>
					<thead>
					  <tr>
						<th>Task ID</th>
						<th>Variable</th>
						<th>Value</th>
					  </tr>
					</thead>
					<tbody>
					  <tr>
						<td>T00010</td>
						<td>Server IP</td>
						<td>10.10.10.10</td>
						</tr>
					  <tr>
						<td>T00011</td>
						<td>Server Hostname</td>
						<td>PET1234</td>
						</tr>	
					  <tr>
						<td>T00012</td>
						<td>Key1</td>
						<td>Value1</td>
						</tr>
					</tbody>
				</Table>		

		</div>
		);
	}
}

export default AssignmentGroup;