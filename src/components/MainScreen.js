import React, {Component} from 'react';
import {StyleSheet, Dimensions, View} from 'react-native';
import {TabViewAnimated, SceneMap} from 'react-native-tab-view';

import ChatScene from './ChatScene';
import StatusScane from './StatusScane';
import {Body, Button, Container, Content, Tab, Tabs, Icon, Left, Right, Text, Title, Header} from "native-base";
import AdFooter from "../pages/footer";
import {connect} from "react-redux";
import I18n from "../global/i18n";

const initialLayout = {
    height: 0,
    width: Dimensions.get('window').width,
};

class MainScreen extends Component {
    render() {
        return (
          (<Container>
              <Header>
                  <Left>
                      <Button transparent onPress={() => this.props.navigation.goBack()}>
                          <Icon name="arrow-back"/>
                      </Button>
                  </Left>
                  <Body>
                  <Title>Chats</Title>
                  </Body>
                  <Right/>
              </Header>
              <Content >
                  <ChatScene navigation={this.props.navigation}/>
                  {/*<Tabs >*/}
                      {/*<Tab heading="Chats">*/}
                          {/**/}
                      {/*</Tab>*/}
                      {/*<Tab heading="Status">*/}
                          {/*<StatusScane navigation={this.props.navigation}/>*/}
                      {/*</Tab>*/}
                      {/*/!*<Tab heading="Calls">*!/*/}
                      {/*/!*<CallScane navigation={this.props.navigation}/>*!/*/}
                      {/*/!*</Tab>*!/*/}
                  {/*</Tabs>*/}
              </Content>
              <AdFooter navigation={this.props.navigation}/>
          </Container>)
        );
    }
}

function bindAction(dispatch) {
    return {};
}

const mapStateToProps = state => ({});

export default MainScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});
