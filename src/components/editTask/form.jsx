import React from 'react';
import { Field, reduxForm } from 'redux-form';
import {Row,Col,FormGroup,FormControl,ControlLabel} from 'react-bootstrap';
import {DateField,DatePicker,TransitionView,Calendar} from 'react-date-picker';
import {connect } from 'react-redux';
import {updateTask} from '../../actions/index';


const data={"assignedTo":null,"assignedToGroup":null,"crearedBy":null,"createdDate":"2017-04-27T00:00:00.000Z","description":"this is new taks changed","dueDate":null,"lastModificationDate":"2017-04-27T00:00:00.000Z","modifiedBy":null,"sequenceNumber":1,"sequenceType":"Sequential","startDate":null,"statusId":1,"taskCode":"TASK1","workItemId":1};

class LeftSectionPage extends React.Component {
  constructor(props) {
    super(props);
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
		<form  onSubmit={handleSubmit(this.updateTaskData.bind(this))}>
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
						  <ControlLabel bsClass=""><span className="rStar"></span> Target Date</ControlLabel>
							<div className="dateTimeSdiv">
								<Field component={this.renderDateFields} name="dueDate" > </Field>
							</div>
						 </FormGroup>
					</Col>
					<Col md={6}>
						<FormGroup>
							<ControlLabel bsClass=""><span className="rStar"></span> Start Date</ControlLabel>
							<div className="dateTimeSdiv">
								<Field component={this.renderDateFields} name="startDate"> </Field>
							</div>

						</FormGroup>
					</Col>					
				  </Row>				  
				  <Row>
					<Col md={6}>
						<FormGroup>
						  <ControlLabel bsClass="">Assignment Group</ControlLabel>
						  <div className="position-re"><Field name="assignedToGroupId" component={renderTextFields} type="text" placeholder="AssignedToGroup" className="form-control"  /><span className="clickInfo1"></span></div>
						 </FormGroup>
					</Col>
					<Col md={6}>
						<FormGroup>
							<ControlLabel bsClass="">Assigned To</ControlLabel>
							<div className="position-re"><Field name="assignedToId" component={renderTextFields} type="text" placeholder="AssignedTo"  className="form-control" /><span className="clickInfo1"></span></div>
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

      );
   }
}

function mapStateToProps(state) {
	return {initialValues: state.selectedTask};
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
  {updateTask} // bind account loading action creator
)(LeftSectionPage);

export default LeftSectionPage;