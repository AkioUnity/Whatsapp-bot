import React, {Component} from 'react';
import {connect} from 'react-redux';
import _ from 'lodash';
import {View, Text, TextInput, Image, TouchableHighlight, FlatList} from 'react-native';
import {changeMessage, sendMessage, fetchMessages} from '../actions/AppActions';
import {Body, Button, Container, Content, Header, Icon, Left, Right, Title} from 'native-base';
import AdFooter from '../pages/footer';

class Chat extends Component {
    componentDidMount() {
        console.log("chat Did Mound");
        // console.log(this.props);
        this.props.fetchMessages(this.props.navigation.state.params.user_id,this.props.id);
    }

    /* Component Context */
    _sendMessage() {
        // const {message, name, user_id} = this.props.navigation.state.params;
        // this.props.sendMessage(message, name, user_id)
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
                            data={this.props.conversation}
                            renderItem={({item}) => this.renderRow(item)}
                            keyExtractor={item => item.id}
                          />
                      </View>

                      <View style={{flexDirection: 'row', height: 60}}>
                          <TextInput
                            value={this.props.message}
                            onChangeText={text => this.props.changeMessage(text)}
                            underlineColorAndroid='transparent'
                            style={{flex: 4, backgroundColor: '#fff', fontSize: 15, borderRadius: 30}}
                          />

                          <TouchableHighlight
                            onPress={this._sendMessage.bind(this)}
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
        conversation: state.chatsReducer.messages,
        id: state.user.userData.id,
    };
}

export default connect(mapStateToProps, {changeMessage, sendMessage, fetchMessages})(Chat);
