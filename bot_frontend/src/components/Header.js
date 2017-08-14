import React, { Component } from 'react';

class Header extends Component{
	render(){
		return(
			<div className = "header-container">
				<a
					className = "show-all"
					onClick={
						this.props.showAllToggle.bind(this)
					}
				>Searches</a>
			</div>
		)
	}
}

export default Header;