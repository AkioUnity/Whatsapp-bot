// @flow
import * as React from 'react';
// import { StyleSheet} from "react-native";
import { connect } from 'react-redux';
import Home from '../../pages/home';
import datas from './data';
import { fetchList } from './actions';
import {logout} from '../LoginContainer/actions';
import * as Actions from "../../actions/user";
import {bindActionCreators} from 'redux';

import { NavigationActions, StackActions } from 'react-navigation';

const resetAction = StackActions.reset({
	index: 0,
	actions: [NavigationActions.navigate({ routeName: 'Login' })],
});

export interface Props {
	navigation: any,
	fetchList: Function,
	data: Object,
}
export interface State {}


class HomeContainer extends React.Component<Props, State> {

	componentWillMount () {
		this.props.cockpit_request();
	}

	componentDidMount() {
		console.log(datas);
		this.props.fetchList(datas);
	}

	handleLogout(){
		this.props.doLogout(() => this.props.navigation.dispatch(resetAction));
	}

	render() {
		return <Home navigation={ this.props.navigation }
								 request_cn={this.props.request_cn}
								 onLogout={() => { this.handleLogout();}}
		/>;
	}
}

function matchDispatchToProps(dispatch) {
	return bindActionCreators({
		fetchList: fetchList,
		cockpit_request: Actions.cockpit_request,
	}, dispatch);
}

const mapStateToProps = state => ({
	request_cn: state.user.request_cn,
	isLoading: state.moreReducer.isLoading,
});

export default connect(mapStateToProps, matchDispatchToProps)(HomeContainer);
