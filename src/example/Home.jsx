import React from 'react';
import { Link} from "react-router-dom";


 export default class Home extends React.Component {
 	
 
 	constructor(props) {
 		super(props);
 		this.state={
 			list:[
 				{cid: 123, title:"这是文章一的题目"},
 				{cid: 456, title:"这是文章二的题目"},
 				{cid: 789, title:"这是文章三的题目"}
 			]
 		}
 		/*this.props.history.push("/NavBar/");*/
 	}
 
 	render() {
 		return (
 			<div>
 				<ul>
 					{this.state.list.map((item,index) => {
 						return (
 							<li key={index}>
 							<Link to={"/users/"+ item.cid}>{item.title}</Link>
 							</li>
 							)
 					})}
 				</ul>
 			</div>
 		);
 	}
 }
 
