// @flow
import {connect} from 'react-redux';
import {fetchList} from './actions';

import * as Actions from "../../actions/user";
import {bindActionCreators} from 'redux';

import {NavigationActions, StackActions} from 'react-navigation';
import {
    Body, Card, Container, Content, Right, Text, Button, Icon, Row, Left,
    CardItem
} from "native-base";

import {Image, Switch, View} from "react-native";
import global from "../../global/styles";
import AdFooter from "../../pages/base";

import React, {Component} from 'react';
import styles from './styles';
import I18n from '../../global/i18n';

const resetAction = StackActions.reset({
    index: 0,
    actions: [NavigationActions.navigate({routeName: 'Login'})],
});

export interface Props {
    navigation: any,
    fetchList: Function,
    data: Object,
}

export interface State {
}


class HomeContainer extends React.Component<Props, State> {

    constructor(props) {
        super(props);

        this.state = {
            switchValue: false,
            call_system: false,
            request_cn: this.props.request_cn,
        };
    }

    componentWillMount() {
        this.props.cockpit_request();
        this._interval = setInterval(() => this.loadData(), 5000);
    }

    async loadData() {
        this.props.cockpit_request();
    }

    componentWillUnmount() {
        clearInterval(this._interval);
    }

    handleLogout() {
        this.props.doLogout(() => this.props.navigation.dispatch(resetAction));
    }

    toggleSwitch = (value) => {
        //onValueChange of the switch this function will be called
        this.setState({switchValue: value})
        //state changes according to switch
        //which will result in re-render the text
    };

    toggleSwitch1 = (value) => {
        //onValueChange of the switch this function will be called
        this.setState({call_system: value});
    };

    render() {
        return (<Container>
            {/*<Header>*/}
            {/**/}
            {/*<Right/>*/}
            {/*</Header>*/}
            {/*<ImageBackground resizeMode="contain" source={require("../../../assets/ui/Logo1.png")}*/}
            {/*style={global.watermark}>*/}
            <Content padder>
                <Text style={styles.reportText}>{I18n.t('Cockpit')}</Text>
                <Image square style={global.logoImage} source={require('../../../assets/whatsapp/lamoga.png')}/>
                <Card>
                    <CardItem>
                        <Body>
                        <Text>{I18n.t('Messenger_systems')}</Text>
                        </Body>
                        <Right>
                            <Switch
                              onValueChange={this.toggleSwitch}
                              value={this.state.switchValue}/>
                        </Right>
                    </CardItem>
                    <CardItem>
                        <Body>
                        <Text>{I18n.t('Call_system')}</Text>
                        </Body>
                        <Right>
                            <Switch
                              onValueChange={this.toggleSwitch1}
                              value={this.state.call_system}/>
                        </Right>
                    </CardItem>
                    <CardItem footer bordered>
                        <Text style={styles.titleText}>{I18n.t('Requests')}:</Text>
                    </CardItem>
                    <CardItem>
                        <Body>
                        <Text>{I18n.t('Messenger')}:</Text>
                        </Body>
                        <Right>
                            <Text>{this.props.request_cn}</Text></Right>
                    </CardItem>
                    <CardItem footer>
                        <Body>
                        <Text>{I18n.t('Callback_requests')}</Text>
                        <Text>{I18n.t('overall')}:</Text>
                        <Text>in 1h: </Text>
                        <Text>in 2h: </Text>
                        </Body>
                        <Right>
                            <Text></Text>
                            <Text>{this.props.request_cn}</Text>
                            <Text>{this.props.request_cn}</Text>
                            <Text>{this.props.request_cn}</Text>
                        </Right>
                    </CardItem>
                    <CardItem footer>
                        <Body>
                        <Text>{I18n.t('date_requests')}:</Text>
                        </Body>
                        <Right>
                            <Text>{this.props.request_cn}</Text></Right>
                    </CardItem>
                </Card>
            </Content>
            {/*</ImageBackground>*/}
            <AdFooter navigation={this.props.navigation}/>
        </Container>);
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
