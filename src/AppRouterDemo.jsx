import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link} from "react-router-dom"
import Home from "./example/Home.jsx"
import Users from "./example/Users.jsx"
import NavBar from "./example/NavBar.jsx"

export default class AppRouterDemo extends React.Component {
	
	constructor(props) {
		super(props);
		this.state={}
	}

	render() {
		return (
			<div>
				<Router>
					<div>
						 <nav>
					        <ul>
					          <li>
					            <Link to="/">首页</Link>
					          </li>
					       
					          <li>
					            <Link to="/users/123">用户</Link>
					          </li>
					        </ul>
					    </nav>
					</div>
					<Switch>
						<Route>
					        <Route  path="/users/:id" component={Users}/>
					        <Route  path="/navbar/" component={NavBar}/>
					        <Route exact path="/" component={Home}/>    
					            
						</Route>
					</Switch>
				</Router>
			</div>
		);
	}
}

