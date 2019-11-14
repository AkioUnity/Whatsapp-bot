import React, {Component} from 'react';
import {
    Text, Footer, Button, Icon,FooterTab,
} from 'native-base';
import I18n from '../../global/i18n';

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
                      <Text>{I18n.t('Profile')}</Text>
                  </Button>
                  <Button vertical onPress={() => this.props.navigation.navigate('HomeRoute')}>
                      <Icon name="bookmarks"/>
                      <Text>{I18n.t('Cockpit')}</Text>
                  </Button>
              </FooterTab>
          </Footer>
        );
    }
}

export default AdFooter;
