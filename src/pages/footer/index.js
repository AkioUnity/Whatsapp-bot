import React, {Component} from 'react';
import {
    Text, Footer, Button, Icon,FooterTab,
} from 'native-base';
import I18n from '../../global/i18n';
import {connect} from "react-redux";
import {fetchAllChats} from "../../actions/user";

class AdFooter extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
          <Footer>
              <FooterTab>
                  <Button vertical onPress={() => this.props.navigation.navigate('Login')} >
                      <Icon name="contact"/>
                      <Text>{I18n.t('Profile')}</Text>
                  </Button>
                  <Button vertical onPress={() => this.props.navigation.navigate('MainScreen')} disabled={!this.props.isLogged}>
                      <Icon name="ios-chatbubbles"/>
                      <Text>{'Chat'}</Text>
                  </Button>
                  <Button vertical onPress={() => this.props.navigation.navigate('HomeRoute')} disabled={!this.props.isLogged}>
                      <Icon name="bookmarks"/>
                      <Text>{I18n.t('Cockpit')}</Text>
                  </Button>
              </FooterTab>
          </Footer>
        );
    }
}

function mapStateToProps(state) {
    return {
        isLogged: state.user.isLogged,
    }
}

export default connect(mapStateToProps)(AdFooter);

