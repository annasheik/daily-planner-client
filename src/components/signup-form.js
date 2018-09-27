import React from 'react';
import {Link} from 'react-router-dom';
import {Field, reduxForm, focus} from 'redux-form';
import {registerUser} from '../actions/users';
import {login} from '../actions/auth';
import Input from './input';
import {required, nonEmpty, matches, length, isTrimmed} from '../validators';
const passwordLength = length({min: 5, max: 15});
const matchesPassword = matches('password');

export class SignUpForm extends React.Component {
	onSubmit(values) {
		        const {username, password} = values;
		        const user = {username, password};
		        return this.props
		        	.dispatch(registerUser(user))
		        	.then(() => this.props.dispatch(login(username, password)))
	}

	render() {

	return (
		<form role="form" className="signup"
		onSubmit={this.props.handleSubmit(values => this.onSubmit(values))}>
					<fieldset name="signup-info">
						<div className="login-header">
							<legend align="center">Sign Up</legend>
				   		 </div>
				    	<p id='notification'></p>

						<label htmlFor="username" required>Email</label>
						<Field
                    component={Input}
                    type="email"
                    name="username"
                    validate={[required, nonEmpty, isTrimmed]}
                />
						<label htmlFor="password" required>Password</label>
						 <Field
                    component={Input}
                    type="password"
                    name="password"
                    validate={[required, passwordLength, isTrimmed]}
                />
						<label htmlFor="password-confirm" required>Confirm password</label>
						 <Field
                    component={Input}
                    type="password"
                    name="passwordConfirm"
                    validate={[required, nonEmpty, matchesPassword]}
                />
				</fieldset>
					<button type="submit" className="js-login-button" disabled={this.props.pristine || this.props.submitting}>Login</button>
					<p className="login-here">Already have an account? <Link to="/login">Log in</Link></p>
				</form>
		)
	}
}

export default reduxForm({
    form: 'registration',
    onSubmitFail: (errors, dispatch) =>
        dispatch(focus('registration', Object.keys(errors)[0]))
})(SignUpForm);