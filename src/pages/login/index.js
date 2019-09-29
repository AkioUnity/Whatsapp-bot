import * as React from 'react';
import {Image} from 'react-native';
import global from '../../global/styles';
import {Container, Content, Button, Text, View, Icon, Spinner} from 'native-base';
// import {LoginButton, AccessToken} from 'react-native-fbsdk';
import styles from './styles';
import AdFooter from '../base';

export interface Props {
    loginForm: any;
    onLogin: Function;
    onStartRegister: Function;
    onStartLoginFacebook: Function;
    onStartLoginGooglePlus: Function;
    onOpenUrl: Function;
    onSubmit: Function,
    isLoading: Boolean
}

export interface State {
}

class Login extends React.Component<Props, State> {

    render() {
        const isLoading = this.props.isLoading;
        console.log('Login render isLoading:' + isLoading);
        return (
          <Container>
              <Content padder>
                  {/*<Button transparent onPress={() => this.props.navigation.navigate('DrawerOpen')}>*/}
                      {/*<Icon name="menu"/>*/}
                  {/*</Button>*/}
                  <View style={{alignItems: 'center'}}>
                      <Image square style={styles.logoImage} source={require('../../../assets/whatsapp/lamoga.png')}/>

                      <Text style={styles.loginText}>Log in</Text>
                      {this.props.loginForm}
                      {
                          isLoading ?
                            (<Spinner color="blue"/>)
                            :
                            (
                              <View>
                                  <Button full onPress={this.props.onSubmit} style={styles.loginRadius}>
                                      <Text style={{fontSize: 14}}>Log-in</Text>
                                  </Button>
                              </View>
                            )}
                      <View>
                          <Button transparent onPress={() => this.props.navigation.navigate('SignUpRoute')}>
                              <Text style={{fontSize: 14}}>Forgot your Password?</Text>
                          </Button>
                      </View>
                      <View>
                          <Button transparent onPress={() => this.props.navigation.navigate('SignUpRoute')}>
                              <Text style={{fontSize: 14}}>Privacy Policy</Text>
                          </Button>
                      </View>
                  </View>
              </Content>
              <AdFooter navigation={ this.props.navigation }/>
          </Container>
        );
    }
}

export default Login;
