import React from 'react';
import { View, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { Actions } from 'react-native-router-flux';

import ChatsList from './ChatsList'
import ConctactsList from "./StatusScane";

export default props => (
  <View style={styles.container}>
    <ChatsList navigation={props.navigation}/>
    <View>
      <TouchableOpacity activeOpacity={0.5} onPress={() => props.navigation.navigate('SelectContact')} style={styles.touchableOpacityStyle} >
        <Image source={require('../images/ic_chats_contacts.png')} style={styles.floatingButtonStyle} />
      </TouchableOpacity>
    </View>
  </View>
)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor : '#F5F5F5'
  },
  touchableOpacityStyle:{
    position: 'absolute',
    width: 55,
    height: 55,
    alignItems: 'center',
    justifyContent: 'center',
    right: 30,
    bottom: 30,
  },
  floatingButtonStyle: {
    resizeMode: 'contain',
    width: 55,
    height: 55,
  }
});
