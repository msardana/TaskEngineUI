import React from 'react';
import {FormControl,Button,ButtonToolbar} from 'react-bootstrap';
import OnClickOutside from 'react-onclickoutside';

class SearchFilter extends React.Component {
	constructor(props){
	super(props);
		this.state = {
			showRecords : true,
			numChildren: 0,
			showResults : false
		};
	};
	onAddChild () {
		this.setState({showResults: true});
		this.setState({numChildren: this.state.numChildren + 1});
	};
	callbackFun(id){
		this.setState({showResults:id});
		this.setState({numChildren:0});
	}		
	render() {
		const children = [];
		for (var i = 0; i < this.state.numChildren; i += 1) {
			{this.state.showResults ? children.push( <ChildComponent key={i} /> )  : null }
		};
		return (
			<div className="form-inline myFields position-re"><div className={this.state.showResults ? 'moreFieldsDiv showFilter' : 'moreFieldsDiv'}><ParentComponent fun={this.callbackFun.bind(this)} addChild={this.onAddChild.bind(this)}>{children}</ParentComponent></div></div>
		);
	}
}

class ParentComponent extends React.Component {

  constructor(props) {
		super(props);
		this.state = {
			filter: {}	
		};		
	};
	onInputChange(event) {
		
	}
	
	handleClickOutside(){
		this.props.fun(false);
	};
    render () {
        return (		
		<div>
			{this.props.children}
			<div><FormControl className="myControl mySel" componentClass="select" name="fieldName" onChange={event => this.onFieldChange(event)}><option value="taskCode">Task ID</option><option value="statusId">Status</option><option value="createdBy">Requestor</option><option value="startDate">Start Date</option><option value="dueDate">Target date</option><option value="assignedToGroup">Assignment Group</option><option value="assignedTo">Assigned To</option><option  value="description">Description</option></FormControl><FormControl className="myControl mySel" componentClass="select" name="fieldOperator" ><option>&#61;</option><option>&#60;</option><option>&#62;</option></FormControl><FormControl className="myControl myInput mySer" type="text" name="fieldValue" /><Button bsStyle="link" className="plusBtn" onClick={this.props.addChild}><i className="fa fa-plus" ></i></Button><Button title="Search Task" bsStyle="primary" type="submit" className="myBtn"><i className="fa fa-search"></i></Button></div>
		</div>
        );
    }
}
class ChildComponent extends React.Component {
    render () {
        return (
             <div className="margin-b-5"><FormControl className="myControl mySel" componentClass="select" value={this.state.field} ><option value="taskCode">Task ID</option><option value="statusId">Status</option><option value="createdBy">Requestor</option><option value="startDate">Start Date</option><option value="dueDate">Target date</option><option value="assignedToGroup">Assignment Group</option><option value="assignedTo">Assigned To</option><option  value="description">Description</option></FormControl><FormControl className="myControl mySel" componentClass="select" value={this.state.operator} ><option>&#61;</option><option>&#60;</option><option>&#62;</option></FormControl><FormControl className="myControl myInput mySer" type="text" value={this.state.term} /><Button disabled bsStyle="link" className="plusBtn">&#38;</Button></div>
        );
    }
}
ParentComponent = OnClickOutside(ParentComponent);
export default SearchFilter;