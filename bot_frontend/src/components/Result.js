import React, { Component } from 'react'

class Result extends Component{
	render(){
		return(
			<li
				className="result"
			>
				<p className = "home-toggle">{this.props.result.name} searched for {this.props.result.search} </p>
			</li>
		)
	}
}

export default Result