import React, { Component } from 'react';

class Display extends Component{
	
	displayOne(){
		if (!this.props.status){
			return(
				<div>
					<img
						className = "person-image"
						src = {this.props.displayed.image}
					/>
					<div className = "text">
						<h1>{this.props.displayed.name} </h1>
						<p> Searched for {this.props.displayed.search} somewhere near {this.props.displayed.location}</p>
						<p className = "email"> Have a question about their experience? <br/>
						Email: {this.props.displayed.email} <br/>
						Slack: {this.props.displayed.user_name}</p>
					</div>
				</div>
			)
		}
	}

	displayHome(){
		if (this.props.status){
			return(
				<div>
					<h1> Welcome. </h1>
				</div>
			)
		}
	}

	render(){
		return(
			<div className = "display-container">
				{this.displayHome()}
				{this.displayOne()}
			</div>
		)
	}
}

export default Display