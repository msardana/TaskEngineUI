import React from 'react';
import {Grid,Row,Col,Form} from 'react-bootstrap';

import Header from './header.jsx';
import LeftSidebar from './newTask/left-sidebar.jsx';
import RightSidebar from './right-sidebar-menulist.jsx';
import HeaderMain from './taskHome/header.jsx';
import LeftSection from './taskHome/list.jsx';
import RightSection from './newTask/processHierarchy.jsx';
import FooterMain from './footer.jsx';

class MyComponent extends React.Component {
	constructor(props) {
		super(props);
		this.state ={
			showHideRightNav:false
		};
		this.showHideRightNav = this.showHideRightNav.bind(this);
	};
	showHideRightNav(value){
		this.setState({showHideRightNav:!this.state.showHideRightNav});
	};
   render() {
      return (
		<div>
			{/* App Header Section Start*/}
			<Header rightNavValue = {this.showHideRightNav} />
			{/* App Header Section End*/}
			
			{/* App Right Side MenuBar Section Start*/}
			<RightSidebar showhideClass = {this.state.showHideRightNav} />
			{/* App Right Side MenuBar Section End*/}
			
			{/* App Left Side MenuBar Section Start*/}
			<LeftSidebar  />
			{/* App Left Side MenuBar Section End*/}
			
			<Grid className="midInnerAll" bsClass="">
			<Form>
				{/* App Heading Section Start*/}
				<HeaderMain />
				{/* App Heading Section end*/}
				
				<Row className="row-eq-height">
					<Col md={8} sm={12} xs={12}>
						<div className="">
							{/* Page Left Section Start*/}
							<LeftSection />
							{/* Page Left Section End*/}
						</div>
					</Col>
					<Col md={4} className="hidden-sm hidden-xs colRightHeight">
						<div className="">
							{/* Page Right Section Start*/}
							<RightSection />
							{/* Page Right Section End*/}
						</div>
					</Col>     
				</Row>
				<Row>
					<Col xs={12}>
						{/* Footer Section Start*/}
						<FooterMain />
						{/* Footer Section End*/}
					</Col>
				</Row>
			</Form>
			</Grid>
		</div>
      );
   }
}


export default MyComponent;

