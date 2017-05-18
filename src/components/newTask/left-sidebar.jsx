import React from 'react';
import {Col,OverlayTrigger,Popover,ListGroup,ListGroupItem,Form,FormGroup,ControlLabel,FormControl,Nav,NavItem,Button} from 'react-bootstrap';

class LeftSidebarMenulist extends React.Component {
	constructor(props) {
		super(props);
		this.state ={
			popoverClick:(
			  <Popover id="popoverWorkData">
				<FormGroup>
					<ControlLabel>Application</ControlLabel>
					<FormControl componentClass="select"><option>All</option><option>App1</option><option>App2</option></FormControl>
				</FormGroup>
				<FormGroup>
					<ControlLabel>Tenant</ControlLabel>
					<FormControl componentClass="select"><option>All</option><option>Tenant1</option><option>Tenant2</option></FormControl>
				</FormGroup>
				<Button bsStyle="primary">Ok</Button>
			  </Popover>
			)
		}
	}
   render() {
      return (
		<div className="leftNav">
			<Nav bsClass="" className="leftMenu">
				<OverlayTrigger container={this} trigger="click" rootClose placement="right" overlay={this.state.popoverClick}><NavItem eventKey={1}><span title="Task Home" className="bgBtn11 lSidebar mywork"></span></NavItem></OverlayTrigger>
			</Nav>
		</div>
				
      );
   }
}


export default LeftSidebarMenulist;

