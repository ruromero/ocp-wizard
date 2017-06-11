import React, { Component } from 'react';
import Navigation from './Navigation';

class OCPForm extends Component {

	constructor(props) {
		super(props);
		this.state = {
			name: "Pepe"
		};
		this.handleChange = this.handleChange.bind(this);
	}

	handleChange(event) {
		this.setState({name: event.target.value});
	}

	render() {
		return (
			<div>
				<form>
					<label>
						Name: 
						<input type="text" name="name" value={this.state.name} onChange={this.handleChange}/>
					</label>
					<label>
						Result: {this.state.name}
					</label>
					<Navigation prev="Home" next="Start"/>

				</form>
			</div>

		);
	}
}

export default OCPForm;