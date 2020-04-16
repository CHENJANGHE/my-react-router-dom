import React from 'react';

export default class Users extends React.Component {
	

	constructor(props) {
		super(props);
		this.state={}
	}

	render() {
		return (
			<div>
				<div>Users--{this.state.id}</div>
			</div>
		);
	}
	componentDidMount(){
		//console.log(this.props.match.params);
		let temId = this.props.match.params.id;
		this.setState({
			id: temId
		})
	}
}


