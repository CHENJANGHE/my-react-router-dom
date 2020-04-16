import React from 'react';
import { Route, Link} from "react-router-dom"
import ReactDemo from "./videos/ReactDemo.jsx"
import VueDemo from "./videos/VueDemo.jsx"
import FlutterDemo from "./videos/FlutterDemo.jsx"
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
						<li><Link to="/video/reactdemo">视频教程</Link></li>
						<li><Link to="/video/vuedemo">视频教程</Link></li>
						<li><Link to="/video/flutterdemo">视频教程</Link></li>
					</ul>
				</div>
				<div className="container">
					<Route>
				        <Route  path="/video/reactdemo/" component={ReactDemo}/>
				        <Route  path="/video/vuedemo/" component={VueDemo}/>
				        <Route  path="/video/flutterdemo/" component={FlutterDemo}/>    
				            
					</Route>
				</div>
			</div>
		);
	}
}

