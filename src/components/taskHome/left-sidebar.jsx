import React from 'react';
import {Link} from 'react-router-dom';
import {Nav,NavItem,OverlayTrigger,Popover,ListGroup,ListGroupItem,FormGroup,Checkbox, Button} from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import {connect} from 'react-redux';
import {filterTasksByParam} from '../../actions/index';
import {bindActionCreators} from 'redux';

class LeftSidebarMenulist extends React.Component {


	handleClick(name, val) {
	console.log('handleClick called');
		console.log(name + val);
	}
	
	constructor(props) {
		super(props);
		
		var groups = [{"fieldName": "Amazon", "fieldVal": 1}, {"fieldName": "supplier", "fieldVal": 2}];
		var statusList = [{"fieldName": "Amazon", "fieldVal": 1}, {"fieldName": "supplier", "fieldVal": 2}];
		
		this.state ={
			isChecked: false,
			filter: [],
			popoverWorkItemsClick:(
			  <Popover id="popoverWorkItems" title="Company">
				<ListGroup bsClass="">				
					<ListGroupItem bsClass=""><Checkbox defaultChecked value="all" onClick={() => this.handleClick(event)}>All</Checkbox></ListGroupItem>
					<ListGroupItem bsClass=""><Checkbox value="1" onClick={() => this.handleClick('companyId', '1')}>Grenzen</Checkbox></ListGroupItem>
					<ListGroupItem bsClass=""><Checkbox value="2" onClick={() => this.handleClick('companyId', '2')}>HCL</Checkbox></ListGroupItem>
				</ListGroup>
				<Button bsStyle="primary" title="Apply">Apply</Button>
			  </Popover>
			),
			popoverGroupsClick:(
			  <Popover id="popoverGroups" title="Assignment Groups">
				<ListGroup bsClass="">				
					<ListGroupItem bsClass=""><Checkbox defaultChecked value="all" onClick={() => this.handleClick('assignedToGroupId', '')}>All</Checkbox></ListGroupItem>
					{groups.map((item, index)=> 
						<ListGroupItem bsClass=""><Checkbox value={item.fieldVal} onClick={() => this.handleClick('assignedToGroupId', item.fieldVal)}>{item.fieldName}</Checkbox></ListGroupItem>
					)}
					
				</ListGroup>
			  </Popover>
			),
			popoverStatusClick:(
			  <Popover id="popoverStatus" title="Status">
				<ListGroup bsClass="">				
					<ListGroupItem bsClass=""><Checkbox defaultChecked value="all" onClick={() => this.handleClick('statusId', )}>All</Checkbox></ListGroupItem>
					{statusList.map((item, index)=> 
						<ListGroupItem bsClass=""><Checkbox value={item.fieldVal} onClick={() => this.handleClick('statusId', item.fieldVal)}>{item.fieldName}</Checkbox></ListGroupItem>
					)}
					
				</ListGroup>
			  </Popover>
			)
		};
		
	}
	checkIt(){
		this.setState({isChecked:!this.state.isChecked});
	}
   render() {  
      return (
		<div className="leftNav">
			<Nav bsClass="" className="leftMenu">
				<OverlayTrigger container={this} trigger="click" rootClose placement="right" overlay={this.state.popoverWorkItemsClick}><NavItem href="#" eventKey={1} title="Company"><span className="bgBtn11 lSidebar mywork"></span></NavItem></OverlayTrigger>
				<OverlayTrigger container={this} trigger="click" rootClose placement="right" overlay={this.state.popoverGroupsClick}><NavItem href="#" eventKey={2} title="Assignment Groups"><span className="bgBtn3 lSidebar mygroup"></span></NavItem></OverlayTrigger>
				<OverlayTrigger container={this} trigger="click" rootClose placement="right" overlay={this.state.popoverStatusClick}><NavItem href="#" eventKey={3} title="Status"><span className="bgBtn3 lSidebar status4"></span></NavItem></OverlayTrigger>
			</Nav>
		</div>
      );
   }
}


function mapStateToProps(state) {
	return {tasks: state.tasks, isFetching : state.isFetching};
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({filterTasksByParam: filterTasksByParam}, dispatch);
}
export default connect(mapStateToProps,mapDispatchToProps)(LeftSidebarMenulist)