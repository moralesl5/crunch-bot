import React, { Component } from 'react'
import Result from './Result'

class Results extends Component{

	change(event, index){
		this.props.displayedInfo(index);
		this.props.toggleHome(event);
		console.log(this.props.status)
	}

	renderResults(arr){
		return arr.map((el, index) =>{
			return(
				<div
					key={index}
					className = "home-toggle"
					onClick = {(e) => this.change(e, index)}
					>
					<Result
						key = {index}
						result={el}
					/>
				</div>
			)
		})
	}
	render(){
		return(
			<div className = "feed-list">
				{this.renderResults(this.props.list)}
			</div>
		)
	}
}

export default Results