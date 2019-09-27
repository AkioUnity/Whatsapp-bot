// @flow
import * as React from "react";
// import { StyleSheet} from "react-native";
import { connect } from "react-redux";
import Home from "../../pages/home";
import datas from "./data";
import { fetchList } from "./actions";
import {logout} from "../LoginContainer/actions";
import {bindActionCreators} from "redux";

import { NavigationActions } from "react-navigation";

const resetAction = NavigationActions.reset({
	index: 0,
	actions: [NavigationActions.navigate({ routeName: "Login" })],
});


export interface Props {
	navigation: any,
	fetchList: Function,
	data: Object,
}
export interface State {}


class HomeContainer extends React.Component<Props, State> {

	componentDidMount() {
		console.log(datas);
		this.props.fetchList(datas);
	}

	handleLogout(){
		this.props.doLogout(() => this.props.navigation.dispatch(resetAction));
	}

	render() {
		return <Home navigation={ this.props.navigation }
								 onLogout={() => { this.handleLogout();}}
		/>;
	}
}

function matchDispatchToProps(dispatch) {
	return bindActionCreators({
		fetchList: fetchList,
		doLogout: logout
	}, dispatch);
}

const mapStateToProps = state => ({
	data: state.moreReducer.list,
	isLoading: state.moreReducer.isLoading
});

export default connect(mapStateToProps, matchDispatchToProps)(HomeContainer);
