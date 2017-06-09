import React from 'react';

import {Row,Col,FormGroup,FormControl,ControlLabel, Grid} from 'react-bootstrap';
import {DateField,DatePicker,TransitionView,Calendar} from 'react-date-picker';
import { Field, reduxForm } from 'redux-form';
import RightSection from './requestor.jsx';
import HeaderMain from './header.jsx';
import {createTask} from '../../actions/index';
import {connect } from 'react-redux';

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

render() {


const renderTextFields = ({input, label, type, className, meta: {touched, error, warning}}) => (
 
 <div>
		<input {...input} placeholder={label} type={type} className={className}/>
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
  
  return (
		<Grid className="midInnerAll" bsClass="">
		
			{/* App Heading Section Start*/}
			<HeaderMain />
			{/* App Heading Section end*/}
			
			<Row className="row-eq-height">
				<Col md={8} sm={12} xs={12}>
					<div className="">
		{/* Page Left Section Start*/}
		<form onSubmit={handleSubmit(this.showResults.bind(this))}>
		<div>
				  <Row>
					<Col md={6}>
						<FormGroup>
						  <ControlLabel bsClass=""><span className="rStar"></span> Task #</ControlLabel>
						  <Field name="taskCode" component={renderTextFields} type="text" placeholder="Task#" className="form-control"  />						  
						 </FormGroup>
					</Col>
					<Col md={6}>
						<FormGroup>
							<ControlLabel bsClass="">Parent WorkItem</ControlLabel>
							<Field name="workItemId" component={renderTextFields} type="text" placeholder="Work Item#"  className="form-control" validate={required}/>
						</FormGroup>
					</Col>		
				  </Row>
				  <Row>
					<Col md={6}>
						<FormGroup>
							<ControlLabel bsClass="">Status</ControlLabel>
							<Field name="statusId" component="select" className="myControl mySort">							
								<option value="">Unassigned</option>
								<option value="1">Assigned</option>
								<option value="2">In Progress</option>
								<option value="3">Completed</option>
								<option value="4">Cancelled</option>
							</Field>	
						</FormGroup>
					</Col>				  
					<Col md={6}>
						<FormGroup>
							<ControlLabel bsClass="">Requester</ControlLabel>
							<div className="position-re"><Field name="createdBy" component={renderTextFields} type="text" placeholder="CreatedBy"  className="form-control" /><span className="clickInfo1"></span></div>
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
							<ControlLabel bsClass=""><span className="rStar"></span> Task Type</ControlLabel>
							<Field name="sequenceType" component="select" className="myControl mySort">							
									<option value="Parallel">Parallel</option>
								<option value="Sequential">Sequential</option>
							</Field>	
						</FormGroup>
					</Col>		
				  </Row>				  
				  <Row>
					<Col md={12}>
						<FormGroup>
						  <ControlLabel bsClass=""><span className="rStar"></span> Description</ControlLabel>
						  <Field name="description" component={renderTextFields} type="textarea" className="form-control" validate={required, maxLength300}/>
						</FormGroup>
					</Col>					
				  </Row>
				  <Row>
					<Col md={6}>
						<FormGroup>
						  <ControlLabel bsClass=""><span className="rStar"></span> Start Date</ControlLabel>
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
				  <Row>
					<Col md={6}>
						<FormGroup>
						  <ControlLabel bsClass="">Assignment Group</ControlLabel>
						  <div className="position-re"><Field name="assignedToGroup" component={renderTextFields} type="text" placeholder="AssignedToGroup" className="form-control"  /><span className="clickInfo1"></span></div>
						 </FormGroup>
					</Col>
					<Col md={6}>
						<FormGroup>
							<ControlLabel bsClass="">Assigned To</ControlLabel>
							<div className="position-re"><Field name="assignedTo" component={renderTextFields} type="text" placeholder="AssignedTo"  className="form-control" /><span className="clickInfo1"></span></div>
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

		</form>

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
		
		</Grid>  
  
      
  );
  
}
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

export default reduxForm({
   validate,	
  form: 'newTaskForm', // a unique identifier for this form
})(connect(null, {createTask})(LeftSectionPage));