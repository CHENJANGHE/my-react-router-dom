import React from 'react';
import { Route, Link} from "react-router-dom"
import Web from "./works/Web.jsx"
import H5App from "./works/H5App.jsx"
export default class Video extends React.Component {
	
	constructor(props) {
		super(props);
		this.state={}
	}

	render() {
		return (
			<div>
	
				<div className="topNav">
					<ul>
						<li><Link to="/workjob/web">web前端</Link></li>
						<li><Link to="/workjob/h5app">H5 app开发</Link></li>
					</ul>
				</div>
				<div className="container">
					<Route>
				        <Route  path="/workjob/web/" component={Web}/>
				        <Route  path="/workjob/h5app/" component={H5App}/>   
				            
					</Route>
				</div>
			</div>
		);
	}
}

