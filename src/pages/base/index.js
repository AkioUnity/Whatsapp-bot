import React, {Component} from 'react';
import {
    Text, Footer, Button, Icon,FooterTab,
} from 'native-base';

class AdFooter extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
          <Footer>
              <FooterTab>
                  <Button vertical onPress={() => this.props.navigation.navigate('Login')}>
                      <Icon name="contact"/>
                      <Text>Profile</Text>
                  </Button>
                  <Button vertical onPress={() => this.props.navigation.navigate('HomeRoute')}>
                      <Icon name="bookmarks"/>
                      <Text>Cockpit</Text>
                  </Button>
              </FooterTab>
          </Footer>
        );
    }
}

export default AdFooter;
