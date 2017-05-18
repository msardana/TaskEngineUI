import React from 'react';
import {Row,Col,FormGroup,FormControl,ControlLabel} from 'react-bootstrap';
import {DateField,DatePicker,TransitionView,Calendar} from 'react-date-picker';

class LeftSectionPage extends React.Component {
   render() {
      return (
		<div>
				  <Row>
					<Col md={6}>
						<FormGroup>
						  <ControlLabel bsClass=""><span className="rStar"></span> Task #</ControlLabel>
						  <FormControl type="text" />
						 </FormGroup>
					</Col>
					<Col md={6}>
						<FormGroup>
							<ControlLabel bsClass="">Company</ControlLabel>
							<FormControl type="text" />
						</FormGroup>
					</Col>		
				  </Row>
				  <Row>
					<Col md={6}>
						<FormGroup>
							<ControlLabel bsClass="">Status</ControlLabel>
							<FormControl type="text" />
						</FormGroup>
					</Col>				  
					<Col md={6}>
						<FormGroup>
							<ControlLabel bsClass="">Requester</ControlLabel>
							<div className="position-re"><FormControl type="text" /><span className="clickInfo1"></span></div>
						</FormGroup>
					</Col>		
				  </Row>
				  <Row>
					<Col md={6}>
						<FormGroup>
						  <ControlLabel bsClass=""><span className="rStar"></span> Task Sequence</ControlLabel>
						  <FormControl type="text" />
						 </FormGroup>
					</Col>
					<Col md={6}>
						<FormGroup>
							<ControlLabel bsClass=""><span className="rStar"></span> Task Type</ControlLabel>
							<FormControl type="text" />
						</FormGroup>
					</Col>		
				  </Row>				  
				  <Row>
					<Col md={12}>
						<FormGroup>
						  <ControlLabel bsClass=""><span className="rStar"></span> Description</ControlLabel>
						  <FormControl componentClass="textarea" className="" rows="2" />
						</FormGroup>
					</Col>					
				  </Row>
				  <Row>
					<Col md={6}>
						<FormGroup>
						  <ControlLabel bsClass=""><span className="rStar"></span> Target Date</ControlLabel>
							<div className="dateTimeSdiv">
								<DateField dateFormat="MM-DD-YYYY HH:mm:ss" updateOnDateClick={true} forceValidDate={true} defaultValue={1493105086058}><DatePicker navigation={true} locale="en" forceValidDate={true} highlightWeekends={true} highlightToday={true} cancelButton={false} clearButton={false} weekNumbers={false} weekStartDay={1} /></DateField>
							</div>
						 </FormGroup>
					</Col>
					<Col md={6}>
						<FormGroup>
							<ControlLabel bsClass=""><span className="rStar"></span> Start Date</ControlLabel>
							<FormControl type="text" />
						</FormGroup>
					</Col>					
				  </Row>				  
				  <Row>
					<Col md={6}>
						<FormGroup>
						  <ControlLabel bsClass=""><span className="rStar"></span> Assignment Group</ControlLabel>
						  <div className="position-re"><FormControl type="text" /><span className="clickInfo1"></span></div>
						 </FormGroup>
					</Col>
					<Col md={6}>
						<FormGroup>
							<ControlLabel bsClass="">Assigned To</ControlLabel>
							<div className="position-re"><FormControl type="text" /><span className="clickInfo1"></span></div>
						</FormGroup>
					</Col>					
				  </Row>
		</div>
      );
   }
}

export default LeftSectionPage;