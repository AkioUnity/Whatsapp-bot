import React, {Component} from 'react';
import {
    Container, Content, Button, Icon,
    Text,
} from 'native-base';
import styles from './styles';
import global from '../../global/styles';
import {Image, ImageBackground, TouchableOpacity, View, Linking} from 'react-native';
import AdFooter from '../base';

const logoImage = require('../../../assets/images/logo0.png');

class Home extends Component {
    render() {
        return (
          <Container>
              {/*<Header>*/}
              {/**/}
              {/*<Right/>*/}
              {/*</Header>*/}
              {/*<ImageBackground resizeMode="contain" source={require("../../../assets/ui/Logo1.png")}*/}
              {/*style={global.watermark}>*/}


              <Content padder style={global.watermarkOpacity}>
                  <Button transparent onPress={() => this.props.navigation.navigate('DrawerOpen')}>
                      <Icon name="menu"/>
                  </Button>
                  <View style={{alignItems: 'center'}}>
                      <Text style={styles.hello}>Hello</Text>
                      <View style={styles.whiteRec}>
                          <Image square style={styles.logoImage} resizeMode="contain" source={logoImage}/>
                          <View style={styles.logoRight}>
                              <Text style={styles.reportText}>Submit Report</Text>
                              <TouchableOpacity activeOpacity={0.5} style={global.button}
                                                onPress={() => this.props.navigation.navigate('CategoryRoute')}>
                                  <Image style={styles.goArrow} resizeMode="contain"
                                         source={require('../../../assets/images/goArrow.png')}/>
                              </TouchableOpacity>
                          </View>
                      </View>
                  </View>
                  <View style={{flex: 1, flexDirection: 'row', justifyContent: 'space-around'}}>
                      <TouchableOpacity activeOpacity={0.5} style={global.button}
                                        onPress={() => this.props.navigation.navigate('Login')}>
                          <Image style={{width: 50, flex: 1}} resizeMode="contain"
                                 source={require('../../../assets/images/login_icon.png')}/>
                          <Text style={styles.loginText}>Log in</Text>
                      </TouchableOpacity>
                      {/*<TouchableOpacity activeOpacity={0.5} style={styles.acceptBtn}*/}
                      {/*onPress={() => this.props.navigation.navigate("Login")}>*/}
                      {/*<Text style={styles.acceptBtnText}>ACCEPT TO</Text>*/}
                      {/*</TouchableOpacity>*/}
                  </View>
              </Content>
              {/*</ImageBackground>*/}
              <AdFooter navigation={ this.props.navigation }/>
          </Container>
        );
    }
}

export default Home;
