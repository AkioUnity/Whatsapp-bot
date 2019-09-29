import React, {Component} from 'react';
import {
    Container, Content, Button, Icon, Right,
    Text, Card, CardItem, Body
} from 'native-base';
import styles from './styles';
import global from '../../global/styles';
import {Image, ImageBackground, TouchableOpacity, View, Switch, Linking} from 'react-native';
import AdFooter from '../base';

const logoImage = require('../../../assets/images/logo0.png');

class Home extends Component {

    state = {switchValue: false}
    toggleSwitch = (value) => {
        //onValueChange of the switch this function will be called
        this.setState({switchValue: value})
        //state changes according to switch
        //which will result in re-render the text
    }

    render() {
        return (
          <Container>
              {/*<Header>*/}
              {/**/}
              {/*<Right/>*/}
              {/*</Header>*/}
              {/*<ImageBackground resizeMode="contain" source={require("../../../assets/ui/Logo1.png")}*/}
              {/*style={global.watermark}>*/}
              <Content padder>
                  <Text style={styles.reportText}>Cockpit</Text>
                  <Image square style={global.logoImage} source={require('../../../assets/whatsapp/lamoga.png')}/>
                  <Card>
                      <CardItem>
                          <Body>
                          <Text>Active WhatsApp</Text>
                          </Body>
                          <Right>
                              <Switch
                                onValueChange={this.toggleSwitch}
                                value={this.state.switchValue}/>
                          </Right>
                      </CardItem>
                      <CardItem footer bordered>
                          <Text>number of whatsapp requests: 5</Text>
                      </CardItem>
                  </Card>

              </Content>
              {/*</ImageBackground>*/}
              <AdFooter navigation={this.props.navigation}/>
          </Container>
        );
    }
}

export default Home;
