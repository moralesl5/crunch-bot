import React, { Component } from 'react';
import Results from './Results'

class Feed extends Component {

	
	render(){
		return(
			<div className = "feed-container">
				<Results
					list={this.props.list}
					displayedInfo={this.props.displayedInfo}
					toggleHome = {this.props.toggleHome}
					status = {this.props.status}
				/>		
			</div>
		)
	}
}

export default Feed;