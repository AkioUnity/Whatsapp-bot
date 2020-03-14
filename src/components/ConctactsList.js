import React, { Component } from 'react';
import base64 from 'base-64';
import _ from 'lodash';
import {View, Text,  Image, TouchableHighlight, FlatList} from 'react-native';

import { connect } from 'react-redux';
import { fetchContacts } from  '../actions/AppActions';
import {Button} from "native-base";

class ContactsList extends Component {

  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.props.fetchContacts(base64.encode(this.props.email_logged_in));
    this.createDataSource(this.props.contacts);
  }

  componentWillReceiveProps(nextProps) {
    this.createDataSource(nextProps.contacts);
  }

  createDataSource(contacts) {
    this.dataSource = contacts;
    console.log(contacts);
    // (this.dataSource) CallScane.prototype.dataSource (example)
  }

  renderRow(contact) {
    console.log(contact);
    return (
      <TouchableHighlight
        onPress={ () => this.props.navigation.navigate('Chat',{ title: contact.name, contactName: contact.name, contactEmail: contact.email })}
      >
      <View style={{ flex: 1,  flexDirection: 'row', padding: 15, borderBottomWidth: 1, borderColor: "#b7b7b7" }}>
        <Image source={{uri: contact.profileImage }} style={{ width: 50, height: 50, borderRadius: 50 }} />
          <View style={{ marginLeft: 15 }}>
            <Text style={{ fontSize: 23, fontWeight: 'bold' }}>{ contact.name }</Text>
            <Text style={{ fontSize: 13 }}>{ contact.email }</Text>
          </View>
      </View>
      </TouchableHighlight>
    )
  }

  render() {
    return (
      <FlatList
        data={this.dataSource}
        renderItem={({ item }) => this.renderRow(item)}
        keyExtractor={(item, index) => {
          return index.toString();
        }}
    />
  );
}
}

mapStateToProps = state => {
  const contacts = _.map(state.ListContactsReducer, (value, uid) => {
    return { ...value, uid }
  });

  return {
    email_logged_in: state.AppReducer.email_logged_in,
    contacts: contacts
  }
}

export default connect(mapStateToProps, { fetchContacts })(ContactsList);
