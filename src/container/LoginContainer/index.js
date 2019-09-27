// @flow
import * as React from "react";
import { Linking,Text} from "react-native";
import {Item, Input, Icon, Form, Container, Label} from "native-base";
import { Field, reduxForm } from "redux-form";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";

import Login from "../../pages/login";
import * as Actions from "./actions";
import Toast from "react-native-root-toast";
import styles from "../../pages/login/styles";

const required = value => (value ? undefined : "Required");
const maxLength = max => value => (value && value.length > max ? `Must be ${max} characters or less` : undefined);
const maxLength15 = maxLength(15);
const minLength = min => value => (value && value.length < min ? `Must be ${min} characters or more` : undefined);
const minLength8 = minLength(8);
const email = value =>
	value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value) ? "Invalid email address" : undefined;
const alphaNumeric = value => (value && /[^a-zA-Z0-9 ]/i.test(value) ? "Only alphanumeric characters" : undefined);

export interface Props {
	navigation: any,
}
export interface State {
	isLoading : Boolean
}

class LoginForm extends React.Component<Props, State> {
	inputs: Object;
	toast: any;

	constructor(props){
		console.log('LoginContainer constructor');
		super(props);
		this.inputs = {};
		this.renderInput = this.renderInput.bind(this);
		this.state = {
			isLoading:false
		};
		console.log('LoginContainer constructor1');
	}


	componentDidUpdate(){
		//logout
		if (this.props.resetNavigation){
			this.props.resetNavigation();
			this.props.resetLoginControlVars();
		}
		//login success
		else if (this.props.isLogged){
			this.loginSuccess();
		}
		//check if error exist and show Toast
		else {
			this.checkError();
		}
	}

	renderInput({input, label, type, meta: {touched, error, warning}}) {
		const isLoading = this.props.isLoading;
		const { handleSubmit } = this.props;
		return (
			<Item inlineLabel error={error && touched} disabled={isLoading} style={styles.inputRadius}>
				<Label>{input.name === "email" ? "email address" : "password"}</Label>
				{/*<Icon active name={input.name === "email" ? "person" : "unlock"} />*/}
				<Input
					// style={{color: isLoading ? "white" : "black"} }
					autoCorrect={false}
					returnKeyType={ input.name === "email" ? "next" : "go"}
					autoCapitalize="none"
					ref={ (c) => {this.inputs[input.name] = c;}}
					// placeholder={input.name === "email" ? "Email Address" : "Password"}
					secureTextEntry={input.name === "password"}
					underlineColorAndroid="transparent"
					onSubmitEditing={input.name === "password" ? handleSubmit(this.onSubmit) : () => {this.inputs.password._root.focus();}}
					{...input}
				/>
				{touched &&
				(error && <Text>{error}</Text>)}
			</Item>
		);
	}

	onSubmit = values => {
		this.props.doLogin({userName: values.email, password: values.password});
	};

	loginSuccess(){
		this.props.navigation.navigate("HomeRoute");
	}

	openUrl(urlToOpen) {
		Linking.openURL(urlToOpen);
	}

	checkError(){
		console.log('checkError');
		if (this.props.hasError){
			const error = this.props.lastError.message;
			let message = "email or password is wrong";
			console.log(message);
			console.log(error);
			// Add a Toast on screen.
		Toast.show(message, {
			duration: Toast.durations.LONG,
			position: Toast.positions.BOTTOM,
			shadow: true,
			animation: true,
			hideOnPress: true,
			onHidden: () => {
				this.props.resetLoginControlVars();
			}
		});
		}
	}
	render() {
		const { handleSubmit } = this.props;
		const form = (
			<Form>
				<Field name="email" component={this.renderInput} validate={[required]} />
				<Field
					name="password"
					component={this.renderInput}
					validate={[minLength8, maxLength15, required]}
				/>
			</Form>
		);
		return <Container>
			<Login navigation={this.props.navigation} loginForm={form}
				onLogin={ (userName, password) => this.login(userName,password)}
				onSubmit={handleSubmit(this.onSubmit)}
				isLoading={this.props.isLoading}
				/>
		</Container>;
	}
}

//This function simply converts our Actions into usable props.
function matchDispatchToProps(dispatch) {
	console.log('matchDispatchToProps');
	return bindActionCreators({doLogin:Actions.doLogin, resetLoginControlVars:Actions.resetLoginControlVars}, dispatch);
}
//This function, simply takes your reducer data, that is required, and converts it into a usable Prop.
const mapStateToProps = (state) => {
	console.log(state);
	return {
	data: state.loginReducer.userData,
	isLoading: state.loginReducer.isLoading,
	isLogged: state.loginReducer.isLogged,
	lastError: state.loginReducer.lastError,
	hasError : state.loginReducer.hasError,
	resetNavigation : state.loginReducer.resetNavigation
	};
};


const LoginContainer = reduxForm({
	form: "login",
})(LoginForm);

export default connect(mapStateToProps, matchDispatchToProps)(LoginContainer);
