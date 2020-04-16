import React from 'react';
import { BrowserRouter as Router, Route, Link} from "react-router-dom"
import IndexNest from "./IndexNest.jsx" 
import Video from "./pages/Video.jsx"
import WorkJob from "./pages/WorkJob.jsx"
import "./css/router.css"
export default class AppRouterDemo extends React.Component {
	
	constructor(props) {
		super(props);
		this.state={
			routeConfig:[
				{
					path: "/",  title:"博客首页", exact: true, component:IndexNest 
				},
				{
					path: "/video/",  title:"视频教程", exact: false, component: Video
				},
				{
					path: "/workjob",  title:"工作技能", exact: false, component: WorkJob
				}
			]
		}
	}

	render() {
		return (
			<div>
				<Router>
					<div className="mainDiv">
							
						
						<div className="leftDiv">
							<h3>一级导航</h3>
							<ul>
								{
									this.state.routeConfig.map((item, index) => {
										return (
											<li key={index}><Link to={item.path}>{item.title}</Link></li>
										)
									})
								}
				
							</ul>
						</div>
						<div className="rightDiv">
							<Route>
						        {
						        	this.state.routeConfig.map((item, index) => {
										return (
											 <Route key={index}  path={item.path} exact={item.exact} component={item.component}/>
										)
									})
						        }    
						            
							</Route>
						</div>
					</div>
				</Router>

			</div>
		);
	}
}

