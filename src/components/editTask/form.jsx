import React from 'react';
import { Field, reduxForm } from 'redux-form';
import {Row,Col,FormGroup,FormControl,ControlLabel, Grid, PageHeader,Nav,NavItem} from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap';
import {DateField,DatePicker,TransitionView,Calendar} from 'react-date-picker';
import {connect } from 'react-redux';
import {updateTask, selectFormOption} from '../../actions/index';
import RightSection from './processHierarchy.jsx';
import InputVariables from './inputVariables.jsx';
import OutputVariables from './outputVariables.jsx';

const data={"assignedTo":null,"assignedToGroup":null,"crearedBy":null,"createdDate":"2017-04-27T00:00:00.000Z","description":"this is new taks changed","dueDate":null,"lastModificationDate":"2017-04-27T00:00:00.000Z","modifiedBy":null,"sequenceNumber":1,"sequenceType":"Sequential","startDate":null,"statusId":1,"taskCode":"TASK1","workItemId":1};

class LeftSectionPage extends React.Component {
  constructor(props) {
    super(props);
	this.state = {
			searchResultsDiv:false
		};
  };
renderDateFields(field) {
	return(
		<DateField dateFormat="MM-DD-YYYY HH:mm:ss" updateOnDateClick={true} forceValidDate={true} defaultValue={1493105086058} {...field.input} name={field.name}><DatePicker navigation={true} locale="en" forceValidDate={true} highlightWeekends={true} highlightToday={true} cancelButton={false} clearButton={false} weekNumbers={false} weekStartDay={1} /></DateField>
	);
}

	updateTaskData(values) {
//	const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

	

  alert(`You submitted:\n\n${JSON.stringify(values, null, 2)}`);
  this.props.updateTask(values, () => {
	this.props.history.push('/');	
  });
}


	searchResults(event){
		this.setState({searchResultsDiv:true});
	};	
	callbackFun(id){
		this.setState({searchResultsDiv:id});
	}



   render() {
   
const renderTextFields = ({input, label, type, className, meta: {touched, error, warning}}) => (
 
 <div>
		<input {...input} placeholder={label} type={type} className={className}/>
      {touched && ((error && <span className='text-help'>{error}</span>) || (warning && <span>{warning}</span>))}
	  </div>
)

const renderTextAreaFields = ({input, label, rows, className, meta: {touched, error, warning}}) => (
 
 <div>
		<textarea {...input} placeholder={label} className={className} rows="9"/>
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
  
  
  
const INPUTVARIABLES = 'inputVariables';
const OUTPUTVARIABLES = 'outputVariables';
const PROCESSDGM = 'processdgm';  

function getRightSectionContent(option)  {
	
  switch(option) {
		case INPUTVARIABLES:
			return <InputVariables />;
		case OUTPUTVARIABLES:
			return <OutputVariables />;
		default:
			return <RightSection />;
 } 		
}
  
   
      return (
	  <Grid className="midInnerAll" bsClass="">
		<form  onSubmit={handleSubmit(this.updateTaskData.bind(this))}>
		
		{/* App Heading Section Start*/}
		<Row>
			<Col md={7} sm={7}>
				<PageHeader bsClass="" className="sPageHeading1 margin-b-10">Edit Task</PageHeader>
			</Col>
			<Col md={5} sm={5} className="hidden-xs">
			  <div className="status myStatus margin-b-10">
				<Nav bsClass="">
					<LinkContainer title="Save" to="/"><NavItem eventKey={1}><span className="sAction bgBtn15 save"></span></NavItem></LinkContainer>
					<LinkContainer title="Close" to="/"><NavItem eventKey={2}><span className="sAction bgBtn17 bclose"></span></NavItem></LinkContainer>
				</Nav>
			  </div>			
			  <div className="status myStatusGap border-r margin-b-10 margin-r-10 padding-r-10">
				<Nav bsClass="">
					<NavItem title="Input Variables" eventKey={1} name="inputVariables" onClick={() =>  this.props.selectFormOption(INPUTVARIABLES)}><span className="sAction bgBtn11 invar"></span></NavItem>
					<NavItem title="Output Variables" eventKey={2} name="outputVariables" onClick={() =>  this.props.selectFormOption(OUTPUTVARIABLES)}><span className="sAction bgBtn14 outvar"></span></NavItem>
					<NavItem title="Process Diagram" eventKey={3} name="processDiagram" onClick={() =>  this.props.selectFormOption(PROCESSDGM)}><span className="sAction bgBtn17 chart"></span></NavItem>
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
							<ControlLabel bsClass="">Company</ControlLabel>
							<Field name="companyId" component="select" className="form-control">	
								<option value=""></option>
								<option value="1">Grenzen</option>
								<option value="2">HCL</option>
							</Field>								
						</FormGroup>
						<FormGroup>
							<ControlLabel bsClass="">Service</ControlLabel>
							<div className="position-re"><FormControl onClick={this.searchResults.bind(this)} type="text" />
							{this.state.searchResultsDiv ? <ServiceSearch fun={this.callbackFun.bind(this)} /> : null}
							</div>
						</FormGroup>
						<FormGroup>
							<ControlLabel bsClass="">Requester</ControlLabel>
							<div className="position-re"><FormControl type="text" /><span className="clickInfo1"></span></div>
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
								<option value="">Unassigned</option>
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
						  <div className="position-re"><Field name="assignedToGroup" component={renderTextFields} type="text" placeholder="AssignedToGroup" className="form-control"  validate={required}/></div>
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
								<Field component={this.renderDateFields} name="startDate" > </Field>
							</div>
						 </FormGroup>
					</Col>
					<Col md={6}>
						<FormGroup>
							<ControlLabel bsClass=""><span className="rStar"></span> Target Date</ControlLabel>
							<div className="dateTimeSdiv">
								<Field component={this.renderDateFields} name="dueDate"> </Field>
							</div>

						</FormGroup>
					</Col>					
				  </Row>				  
      <div>
        <button type="submit" disabled={pristine || submitting}>Submit</button>
        <button type="button" disabled={pristine || submitting} onClick={reset}>
          Clear Values
        </button>
      </div>
		</div>

						{/* Page Left Section End*/}
					</div>
				</Col>
				<Col md={4} className="hidden-sm hidden-xs colRightHeight">
					<div className="">
						{/* Page Right Section Start*/}
						{ getRightSectionContent(this.props.selectedOption)}
						{/* Page Right Section End*/}
					</div>
				</Col>     
			</Row>
		</form>
		</Grid>  


      );
   }
}

function mapStateToProps(state) {
	return {initialValues: state.selectedTask, selectedOption: state.selectedOption};
}
function validate(values) {
	//console.log(values);
	const errors = {};
	if(!values.taskCode) {
		errors.taskCode = 'Enter a unique task Id';
	}
	if(!values.sequenceNumber) {
		errors.sequenceNumber = 'Assign a valid sequence number to this task';
	}
	return errors;
}

LeftSectionPage = reduxForm({
	validate,
  form: 'editTaskForm', // a unique identifier for this form
})(LeftSectionPage);

// You have to connect() to any reducers that you wish to connect to yourself
LeftSectionPage = connect(
  mapStateToProps,
  {updateTask, selectFormOption} // bind account loading action creator
)(LeftSectionPage);

export default LeftSectionPage;