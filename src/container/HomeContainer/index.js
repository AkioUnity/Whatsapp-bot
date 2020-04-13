// @flow
import {connect} from 'react-redux';
import * as Actions from "../../actions/user";
import {bindActionCreators} from 'redux';
import moment from "moment"
import {NavigationActions, StackActions} from 'react-navigation';
import {
    Body, Card, Container, Content, Right, Text, Button, Icon, Row, Left,
    CardItem, Picker, Form
} from "native-base";

import {Image, Switch, View} from "react-native";
import global from "../../global/styles";
import AdFooter from "../../pages/footer";

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
            pauseSwitch: false,
            status: this.props.onlineStatus,
            request_cn: this.props.request_cn,
            selected: 30,
            mins: 0,
            secs: 0
        };
    }

    componentDidMount() {
        this.props.cockpit_request();
        this._interval = setInterval(() => this.loadData(), 8000);
        this.updateTimer();
        this.timer = setInterval(() => this.updateTimer(), 1000);
    }

    updateTimer = () => {
        if (this.props.pauseTime !== 0) {
            let pauseTime = moment(this.props.pauseTime);
            let eventDate = moment.duration(pauseTime.diff(moment()));
            if (eventDate > 0) {
                const mins = eventDate.minutes()
                const secs = eventDate.seconds()
                this.setState({
                    mins,
                    secs
                });
                this.setState({pauseSwitch: true});
            } else {
                this.setState({pauseSwitch: false});
            }
        }
    }

    async loadData() {
        this.props.cockpit_request();
    }

    componentWillUnmount() {
        console.log('home componentWillUnmount');
        clearInterval(this._interval);
        clearInterval(this.timer);
    }

    pauseSwitch = (value) => {
        this.setState({pauseSwitch: value});
        let time = 0;
        if (value) {
            let mo = moment().add(this.state.selected, 'm');
            time = mo.format();
            this.updateTimer();
        }
        this.props.put_pause_time(time);
    };

    offlineSwitch = (value) => {
        this.setState({status: value});
        this.props.change_online_status(value);
    };

    onValueChange(value: string) {
        this.setState({
            selected: value
        });
    }

    render() {
        let color = this.state.status ? '#66D888' : '#EB4024';
        let status_text = this.state.status ? 'ONLINE' : 'OFFLINE';
        if (this.state.pauseSwitch) {
            color = '#FFBB05';
            status_text = 'noch ' + this.state.mins + ':' + this.state.secs + ' Pause';
        }

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
                        <Left>
                            <Form>
                                <Picker
                                  mode="dropdown"
                                  iosHeader="Select pause time"
                                  // iosIcon={<Icon name="arrow-down" />}
                                  style={{width: 120, height: 20}}
                                  textStyle={{color: "#5cb85c"}}
                                  itemStyle={{
                                      backgroundColor: "#d3d3d3",
                                      marginLeft: 0,
                                      paddingLeft: 10
                                  }}
                                  itemTextStyle={{color: '#788ad2'}}
                                  selectedValue={this.state.selected}
                                  onValueChange={this.onValueChange.bind(this)}
                                >
                                    <Picker.Item label="30min" value="30"/>
                                    <Picker.Item label="60min" value="60"/>
                                    <Picker.Item label="90min" value="90"/>
                                </Picker>
                            </Form>
                        </Left>
                        <Body>
                        <Text style={styles.pauseText}>Pause</Text>
                        </Body>
                        <Right>
                            <Switch
                              onValueChange={this.pauseSwitch}
                              value={this.state.pauseSwitch}/>
                        </Right>
                    </CardItem>
                    <CardItem>
                        <Left>
                            <Text>Offline</Text>
                        </Left>
                        <Body>
                        <Switch style={{width: '50%'}}
                          //                        ,transform: [{ scaleX: 1.5 }, { scaleY: 1.5 }]
                                onValueChange={this.offlineSwitch}
                                value={this.state.status}/>
                        </Body>
                        <Right>
                            <Text>Online</Text>
                        </Right>
                    </CardItem>
                    <CardItem>
                        <Body style={{backgroundColor: color}}>
                        <Text style={styles.titleText}>{status_text}</Text>
                        </Body>
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
        cockpit_request: Actions.cockpit_request,
        change_online_status: Actions.change_online_status,
        put_pause_time: Actions.put_pause_time
    }, dispatch);
}

const mapStateToProps = state => ({
    request_cn: state.user.request_cn,
    onlineStatus: state.user.onlineStatus,
    pauseTime: state.user.pauseTime
});

export default connect(mapStateToProps, matchDispatchToProps)(HomeContainer);
