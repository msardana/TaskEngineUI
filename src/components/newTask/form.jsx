import React from 'react';

import {Row,Col,FormGroup,FormControl,ControlLabel, Grid, PageHeader,Nav,NavItem} from 'react-bootstrap';
import {DateField,DatePicker,TransitionView,Calendar} from 'react-date-picker';
import {LinkContainer} from 'react-router-bootstrap';
import { Field, reduxForm } from 'redux-form';
import RightSection from './requestor.jsx';
import HeaderMain from './header.jsx';
import {createTask, } from '../../actions/index';
import {connect } from 'react-redux';
import OnClickOutside from 'react-onclickoutside';

class LeftSectionPage extends React.Component {
renderDateFields(field) {
	return(
		<DateField dateFormat="MM-DD-YYYY HH:mm:ss" updateOnDateClick={true} forceValidDate={true} {...field.input} name={field.name}><DatePicker navigation={true} locale="en" forceValidDate={true} highlightWeekends={true} highlightToday={true} cancelButton={false} clearButton={false} weekNumbers={false} weekStartDay={1} /></DateField>
	);
}

	showResults(values) {
//	const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

	

  alert(`You submitted:\n\n${JSON.stringify(values, null, 2)}`);
  this.props.createTask(values, () => {
	this.props.history.push('/');	
  });
}

	constructor(props){
	super(props);
		this.state = {
			searchResultsDiv:false
		};
	};

	searchResults(event){
		this.setState({searchResultsDiv:true});
	};	
	callbackFun(id){
		this.setState({searchResultsDiv:id});
	}


render() {


const renderTextFields = ({input, label, type, className, rows, meta: {touched, error, warning}}) => (
 
 <div>
		<input {...input} placeholder={label} type={type} className={className}/>
      {touched && ((error && <span className='text-help'>{error}</span>) || (warning && <span>{warning}</span>))}
	  </div>
)

const renderTextAreaFields = ({input, label, rows, className, meta: {touched, error, warning}}) => (
 
 <div>
		<textarea {...input} placeholder={label} className={className} rows="9" validate={required, maxLength300}/>
      {touched && ((error && <span className='text-help'>{error}</span>) || (warning && <span>{warning}</span>))}
	  </div>
)

const { handleSubmit, pristine, reset, submitting } = this.props;
const required = value => (value ? undefined : 'Required')
const maxLength = max => value =>
  value && value.length > max ? `Must be ${max} characters or less` : undefined
const maxLength300 = maxLength(300)
const number = value =>
  value && isNaN(Number(value)) ? 'Must be a number' : undefined  
  
function getRightSectionContent(option)  {
	
  switch(option) {		
		default:
			return <RightSection />;
 }
 		
}
							
	
  return (
		<Grid className="midInnerAll" bsClass="">
		<form>	

		{/* App Heading Section Start*/}
		<Row>
			<Col md={7} sm={7}>
				<PageHeader bsClass="" className="sPageHeading1 margin-b-10">New Task</PageHeader>
			</Col>
			<Col md={5} sm={5} className="hidden-xs">
			  <div className="status myStatus margin-b-10">
				<Nav bsClass="">
					<NavItem eventKey={1} onClick={handleSubmit(this.showResults.bind(this))}><span className="sAction bgBtn15 save" ></span></NavItem>
					<LinkContainer title="Close" to="/"><NavItem eventKey={2}><span className="sAction bgBtn17 bclose"></span></NavItem></LinkContainer>
				</Nav>
			  </div>			
		  
			</Col>
		</Row>

			{/* App Heading Section end*/}
		
			<Row className="row-eq-height">
				<Col md={8} sm={12} xs={12}>
					<div className="">
		{/* Page Left Section Start*/}
		
		<div>
				  <Row>
					<Col md={6}>
						<FormGroup>
							<ControlLabel bsClass=""><span className="rStar"></span> Company</ControlLabel>
							<Field name="companyId" component="select" className="form-control" validate={required}>									
								<option value="1">Grenzen</option>
								<option value="2">HCL</option>
							</Field>								
						</FormGroup>
						<FormGroup>
							<ControlLabel bsClass=""><span className="rStar"></span> Service</ControlLabel>
							<div className="position-re"><FormControl onClick={this.searchResults.bind(this)} type="text" validate={required}/>
							{this.state.searchResultsDiv ? <ServiceSearch fun={this.callbackFun.bind(this)} /> : null}
							</div>
						</FormGroup>
						<FormGroup>
							<ControlLabel bsClass="">Requester</ControlLabel>
							<div className="position-re"><FormControl type="text" name="requesterId"/><span className="clickInfo1"></span></div>
						</FormGroup>
					</Col>
					<Col md={6}>
  						<FormGroup>
						  <ControlLabel bsClass=""><span className="rStar"></span> Description</ControlLabel>
						  <Field name="description" component={renderTextAreaFields} className="form-control" validate={required, maxLength300}/>
						</FormGroup>
					</Col>		
				  </Row>				  
				  <Row>				  
					<Col md={6}>
						<FormGroup>
						  <ControlLabel bsClass=""><span className="rStar"></span> Task Sequence</ControlLabel>
						  <Field name="sequenceNumber" component={renderTextFields} type="text" placeholder="SequenceNumber"  className="form-control" validate={[required, number]}/>						  
						 </FormGroup>
					</Col>
					<Col md={6}>
						<FormGroup>
							<ControlLabel bsClass="">Status</ControlLabel>
							<Field name="statusId" component="select" className="form-control">							
								<option value="0">Unassigned</option>
								<option value="1">Assigned</option>
								<option value="2">In Progress</option>
								<option value="3">Completed</option>
								<option value="4">Cancelled</option>
							</Field>	
						</FormGroup>
					</Col>				  
				  </Row>
				  <Row>
					<Col md={6}>
						<FormGroup>
						  <ControlLabel bsClass=""><span className="rStar"></span> Assignee Group</ControlLabel>
						  <div className="position-re"><Field name="assignedToGroup" component={renderTextFields} type="text" placeholder="AssignedToGroup" className="form-control" validate={required} /></div>
						 </FormGroup>
					</Col>
					<Col md={6}>
						<FormGroup>
							<ControlLabel bsClass="">Assigned To</ControlLabel>
							<div className="position-re"><Field name="assignedTo" component={renderTextFields} type="text" placeholder="AssignedTo"  className="form-control" /><span className="clickInfo1"></span></div>
						</FormGroup>
					</Col>					
				  </Row>
				  <Row>
					<Col md={6}>
						<FormGroup>
						  <ControlLabel bsClass=""><span className="rStar"></span>Expected Start Date</ControlLabel>
							<div className="dateTimeSdiv">
								<Field component={this.renderDateFields} name="expectedStartDate" validate={required}> </Field>
							</div>
						 </FormGroup>
					</Col>
					<Col md={6}>
						<FormGroup>
							<ControlLabel bsClass=""><span className="rStar"></span> Target Date</ControlLabel>
							<div className="dateTimeSdiv">
								<Field component={this.renderDateFields} name="expectedDueDate" validate={required}> </Field>
							</div>

						</FormGroup>
					</Col>					
				  </Row>				  
      <div>
        
      </div>
		</div>

						{/* Page Left Section End*/}
					</div>
				</Col>
				<Col md={4} className="hidden-sm hidden-xs colRightHeight">
					<div className="">
						{/* Page Right Section Start*/}
						{ getRightSectionContent('')}
						{/* Page Right Section End*/}
					</div>
				</Col>     
			</Row>
		</form>
		</Grid>  
      
  );
}
}


class ServiceSearch extends React.Component {
	handleClickOutside(){
		this.props.fun(false);
	}
	render(){
		return(
			<div className="searchResultDiv">				
				<ListGroup bsClass="" className="searchListR">
					<ListGroupItem bsClass="">
						<div className="one"><span className="name">Amazon EC2 (t2.micro)</span></div>
						<div className="two"><span className="email">It</span>, <span className="com">Cloud</span></div>
					</ListGroupItem>
					<ListGroupItem bsClass="">
						<div className="one"><span className="name">Hostgator VPS</span></div>
						<div className="two"><span className="email">It</span>, <span className="com">Cloud</span></div>
					</ListGroupItem>
				</ListGroup>
			</div>
		);
	}
}
ServiceSearch = OnClickOutside(ServiceSearch);

function validate(values) {
	//console.log(values);
	const errors = {};
	//if(!values.taskCode) {
		//errors.taskCode = 'Enter a unique task Id';
	//}
	if(!values.sequenceNumber) {
		errors.sequenceNumber = 'Assign a valid sequence number to this task';
	}
	return errors;
}


function mapStateToProps(state) {
	return {
		selectedOption: state.selectedOption
	};
}

export default reduxForm({
   validate,	
  form: 'newTaskForm', // a unique identifier for this form
})(connect(mapStateToProps, {createTask})(LeftSectionPage));