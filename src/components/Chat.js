import React, {Component} from 'react';
import {connect} from 'react-redux';
import _ from 'lodash';
import {View, Text, TextInput, Image, TouchableHighlight, FlatList} from 'react-native';
import {changeMessage, sendMessage, fetchMessages} from '../actions/AppActions';
import {Body, Button, Container, Content, Header, Icon, Left, Right, Title} from 'native-base';
import AdFooter from '../pages/footer';
import Config from "../global/config";

class Chat extends Component {
    constructor(props) {
        super(props);
        this.state = {
            message: ''
        };
    }

    componentDidMount() {
        console.log("chat Did Mound");
        // console.log(this.props);
        this.props.fetchMessages(this.props.navigation.state.params.user_id,this.props.id);
        this._interval = setInterval(() => this.loadData(), 2000);
    }

    async loadData() {
        this.props.fetchMessages(this.props.navigation.state.params.user_id,this.props.id);
    }

    componentWillUnmount() {
        console.log('chat componentWillUnmount');
        clearInterval(this._interval);
    }

    _sendMessage() {
        // this.props.sendMessage(this.state.message, this.props.id,this.props.navigation.state.params.user_id);

        fetch(Config.Api_URL + 'users/sendMessage', {
            method: "post",
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                text: this.state.message,
                sender_id: this.props.id,
                receiver_id: this.props.navigation.state.params.user_id
            })
        }).then(response => {
            response.json().then(data => {
                console.log(data);
            });
        })
          .catch(error => {
              console.log(error);
          });
        let cur_messages=this.props.messages;
        cur_messages.push({text:this.state.message,time:new Date(),sender_id:this.props.id});
        this.setState({message:'',messages:cur_messages});
    }

    renderRow(text) {
        if (text.sender_id == this.props.id) {
            return (
              <View style={{alignItems: 'flex-end', marginTop: 5, marginLeft: 40, marginBottom: 5}}>
                  <View style={{backgroundColor: '#dbf5b4', borderRadius: 10}}>
                      <Text style={{fontSize: 16, color: '#0d0d0d', padding: 8}}>{text.text}</Text>
                      {/*<Text*/}
                        {/*style={{fontSize: 12, color: '#999999', marginRight: 10, marginBottom: 5, textAlign: 'right'}}>11:23*/}
                          {/*PM</Text>*/}
                  </View>
              </View>
            )
        }
        return (
          <View style={{alignItems: 'flex-start', marginTop: 5, marginRight: 40, marginBottom: 5}}>
              <View style={{backgroundColor: '#bfbfbf', borderRadius: 10}}>
                  <Text style={{fontSize: 16, color: '#0d0d0d', padding: 8, elevation: 1}}>{text.text}</Text>
                  {/*<Text style={{fontSize: 12, color: '#999999', marginLeft: 10, marginBottom: 5}}>00:25 PM</Text>*/}
              </View>
          </View>
        )
    }

    render() {
        return (
          <Container>
              <Header>
                  <Left>
                      <Button transparent onPress={() => this.props.navigation.goBack()}>
                          <Icon name="arrow-back"/>
                      </Button>
                  </Left>
                  <Body>
                  <Title>{this.props.navigation.state.params.name}</Title>
                  </Body>
                  <Right/>
              </Header>
              <Content>
                  <View style={{flex: 1, marginTop: 5, backgroundColor: '#eee4dc', padding: 10}}>

                      <View style={{flex: 1, paddingBottom: 20}}>
                          <FlatList
                            data={this.props.messages}
                            renderItem={({item}) => this.renderRow(item)}
                            keyExtractor={(item, index) => String(index)}
                          />
                      </View>

                      <View style={{flexDirection: 'row', height: 60}}>
                          <TextInput
                            value={this.state.message}
                            onChangeText={text => this.setState({message:text})}
                            underlineColorAndroid='transparent'
                            style={{flex: 4, backgroundColor: '#fff', fontSize: 15, borderRadius: 30}}
                          />

                          <TouchableHighlight
                            onPress={()=>this._sendMessage()}
                            underlayColor='#fff'>
                              <Image source={require('../images/ic_button_send_sms.png')}
                                     style={{width: 60, height: 60, marginLeft: 5}}/>
                          </TouchableHighlight>
                      </View>
                  </View>
              </Content>
              <AdFooter navigation={this.props.navigation}/>
          </Container>
        )
    }
}

mapStateToProps = state => {
    return {
        messages: state.chatsReducer.messages,
        id: state.user.userData.id,
    };
}

export default connect(mapStateToProps, {changeMessage, sendMessage, fetchMessages})(Chat);
