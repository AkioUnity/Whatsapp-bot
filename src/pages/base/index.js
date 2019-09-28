import React, {Component} from 'react';
import {
    Text, Footer, Button, Icon,FooterTab,
} from 'native-base';

class AdFooter extends Component {
    render() {
        return (
          <Footer>
              <FooterTab>
                  <Button vertical>
                      <Icon name="apps"/>
                      <Text>Mein Berat</Text>
                  </Button>
                  <Button vertical>
                      <Icon name="camera"/>
                      <Text>cockpit</Text>
                  </Button>
              </FooterTab>
          </Footer>
        );
    }
}

export default AdFooter;
