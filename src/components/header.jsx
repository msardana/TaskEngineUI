import React from 'react';
import {Row,Col} from 'react-bootstrap';

import Logos from './header/logo.jsx';
import GlobalSearch from './header/global-search.jsx';
import CurrentDateTime from './header/current-date-time.jsx';
import LanguageDropDown from './header/language-dropDown.jsx';
import TaskMainMenu from './header/task-main-menu.jsx';
import MobileTaskMainMenu from './header/mobile-task-main-menu.jsx';

class Header extends React.Component {
   render() {
      return (
         <div className="hfixed">
			<Row className="noMar">
			  <Col md={6} sm={6} xs={12}>
			  
				{/*Logo section Start*/}
				<Logos />
				{/*Logo section end*/}
				
				{/*Logo section Start*/}
				<MobileTaskMainMenu />
				{/*Logo section end*/}
				
				
				
				{/*Global Search section start*/} 
				<GlobalSearch />
				{/*Global Search section end*/} 
				
			  </Col>
			  <Col md={6} sm={6} className="hidden-xs">
				
				{/* XSM Main Menu Section Start*/}
				<TaskMainMenu changeRightBarMenu = {this.props.changeRightBarMenu} rightNav = {this.props.rightNavValue} />
				{/* XSM Main Menu Section end*/}
				
				{/* Current Date & Time Section Start*/}
				<CurrentDateTime />
				{/* Current Date & Time Section end*/}
				
				{/* Current Date & Time Section Start*/}
				<LanguageDropDown />
				{/* Current Date & Time Section end*/}
			  </Col>
			</Row>
         </div>
      );
   }
}

export default Header;	