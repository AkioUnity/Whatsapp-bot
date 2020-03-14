import React from 'react';
import {View, StyleSheet, TouchableOpacity, Image} from 'react-native';
import ChatsList from './ChatsList';
import { Dimensions } from 'react-native';

const h = Dimensions.get('window').height;
const w = Dimensions.get('window').width;

export default props => (
  <View style={styles.container}>
      <ChatsList navigation={props.navigation}/>
      {/*<View  style={styles.touchableOpacityStyle}>*/}
          {/*<TouchableOpacity activeOpacity={0.5} onPress={() => props.navigation.navigate('SelectContact')}*/}
                            {/*style={styles.touchableOpacityStyle}>*/}
              {/*<Image source={require('../images/ic_chats_contacts.png')} style={styles.floatingButtonStyle}/>*/}
          {/*</TouchableOpacity>*/}
      {/*</View>*/}
  </View>
);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        height:h*0.8,
        backgroundColor: '#F5F5F5',
    },
    touchableOpacityStyle: {
        position: 'absolute',
        width: 55,
        height: 55,
        alignItems: 'center',
        justifyContent: 'center',
        right: 15,
        bottom: 20,
    },
    floatingButtonStyle: {
        resizeMode: 'contain',
        width: 55,
        height: 55,
    },
});
