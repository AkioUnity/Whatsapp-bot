import React, {Component} from 'react';
import base64 from 'base-64';
import {View, Image, TouchableHighlight, FlatList, YellowBox} from 'react-native';
import {Text,Right} from 'native-base';

import {connect} from 'react-redux';
import {
    fetchAllChats
} from '../actions/user';


YellowBox.ignoreWarnings([
    'VirtualizedLists should never be nested', // TODO: Remove when fixed
])

class ChatsList extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        console.log('chatlist didMound');
        this.props.fetchAllChats(this.props.user_id);
        // this._interval = setInterval(() => this.loadData(), 2000);
    }

    async loadData() {
        this.props.fetchAllChats(this.props.user_id);
    }

    componentWillUnmount() {
        console.log('ChatsList componentWillUnmount');
        clearInterval(this._interval);
    }

    renderRow(chatContent) {
        let icon_name=chatContent.type=='facebook'?require(`../../assets/whatsapp/facebook.png`):require(`../../assets/whatsapp/whatsapp.png`);
        return (
          <TouchableHighlight
            onPress={() =>{
                this.props.navigation.navigate('Chat', {
                    title: chatContent.name,
                    name: chatContent.name,
                    user_id: chatContent.user_id,
                    balance:chatContent.balance,
                    f_page_id:chatContent.customer_phone,
                    type:chatContent.type
                }); }
              }>
              <View style={{flex: 1, flexDirection: 'row', padding: 15, borderBottomWidth: 1, borderColor: "#b7b7b7"}}>
                  <Image source={{uri: chatContent.profileImage}} style={{width: 50, height: 50, borderRadius: 50}}/>
                  <View style={{marginLeft: 15}}>
                      <Text style={{fontSize: 23, fontWeight: 'bold'}}>{chatContent.name}</Text>
                      <Text style={{fontSize: 13}}>{chatContent.lastMessage}</Text>
                  </View>
                  <Right>
                      <Image source={icon_name} style={{width: 25, height: 25}} />
                    <Text style={{fontSize: 18}}>{chatContent.balance}€</Text>
                  </Right>
              </View>
          </TouchableHighlight>
        )
    }

    render() {
        return (
          <FlatList
            data={this.props.chatsList}
            renderItem={({item}) => this.renderRow(item)}
            keyExtractor={(item, index) => {
                return index.toString();
            }}
          />
        );
    }
}

function mapStateToProps(state) {
    return {
        email_logged_in: state.AppReducer.email_logged_in,
        user_id: state.user.userData.id,
        chatsList: state.chatsReducer.chatList,
    }
};

export default connect(mapStateToProps, {fetchAllChats})(ChatsList);
