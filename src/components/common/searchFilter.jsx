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
	handleClickOutside(){
		this.props.fun(false);
	};
    render () {
        return (		
		<div>
			{this.props.children}
			<div><FormControl className="myControl mySel" componentClass="select"><option>Task ID</option><option>Status</option><option>Requestor</option><option>Start Date</option><option>Target date</option><option>Assignment Group</option><option>Assigned To</option><option>Description</option></FormControl><FormControl className="myControl mySel" componentClass="select"><option>&#61;</option><option>&#60;</option><option>&#62;</option></FormControl><FormControl className="myControl myInput mySer" type="text" /><Button bsStyle="link" className="plusBtn" onClick={this.props.addChild}><i className="fa fa-plus" ></i></Button><Button title="Search Task" bsStyle="primary" type="submit" className="myBtn"><i className="fa fa-search"></i></Button></div>
		</div>
        );
    }
}
class ChildComponent extends React.Component {
    render () {
        return (
             <div className="margin-b-5"><FormControl className="myControl mySel" componentClass="select"><option>Task ID</option><option>Status</option><option>Requestor</option><option>Start Date</option><option>Target date</option><option>Assignment Group</option><option>Assigned To</option><option>Description</option></FormControl><FormControl className="myControl mySel" componentClass="select"><option>&#61;</option><option>&#60;</option><option>&#62;</option></FormControl><FormControl className="myControl myInput mySer" type="text" /><Button disabled bsStyle="link" className="plusBtn">&#38;</Button></div>
        );
    }
}
ParentComponent = OnClickOutside(ParentComponent);
export default SearchFilter;