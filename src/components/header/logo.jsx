import React from 'react';
import {Link} from 'react-router';

class TaskLogos extends React.Component {
   render() {
      return (
		<div className="logos"><Link to="/" className="xsmLogo" title="XAAS Service Management">XAAS Service Management</Link>
		<img src="views/images/grenzen-logo.png" title="Grenzen Inc." className="comLogo img-responsive" alt="grenzen-logo" /> </div>
      );
   }
}


export default TaskLogos;