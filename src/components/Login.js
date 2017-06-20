import React, { Component } from 'react';
import { FormGroup, ControlLabel, FormControl, HelpBlock } from 'react-bootstrap';

class Login extends Component {
	render() {
		function FieldGroup({ id, label, help, ...props }) {
			return (
				<FormGroup controlId={id}>
					<ControlLabel>{label}</ControlLabel>
					<FormControl {...props} />
					{help && <HelpBlock>{help}</HelpBlock>}
				</FormGroup>
			);
		}
		return (
			<form>
				<FieldGroup
					id="formControlsEmail"
					type="email"
					label="Email address"
					placeholder="Enter email"
				/>
				<FieldGroup
					id="formControlsPassword"
					label="Password"
					type="password"
				/>
			</form>
		)
	}
}
export default Login;