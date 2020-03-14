import React, { Component } from 'react';
import { StyleSheet, Dimensions,View } from 'react-native';
import { TabViewAnimated, SceneMap } from 'react-native-tab-view';

import TabBarMenu from './TabBarMenu';
import ChatScene from './ChatScene';
import StatusScane from './StatusScane';
import CallScane from './CallScane';
import {Body, Button, Container, Content, Tab,Tabs, Icon, Left, Right, Text, Title} from "native-base";
import AdFooter from "../container/HomeContainer";
import {connect} from "react-redux";
import I18n from "../global/i18n";

const initialLayout = {
  height: 0,
  width: Dimensions.get('window').width,
};

class MainScreen extends Component {
  render() {
    return (
      (<Container >
        <Content padder>
          <Text style={styles.reportText}>{I18n.t('Cockpit')}</Text>
          <Tabs>
            <Tab heading="Chats">
              <ChatScene navigation={this.props.navigation}/>
            </Tab>
            <Tab heading="Status">
              <StatusScane navigation={this.props.navigation}/>
            </Tab>
            <Tab heading="Calls">
              <CallScane navigation={this.props.navigation}/>
            </Tab>
          </Tabs>
        </Content>
        <AdFooter navigation={this.props.navigation}/>
      </Container>)
    );
  }
}

function bindAction(dispatch) {
  return {
  };
}

const mapStateToProps = state => ({
});

export default connect(mapStateToProps, bindAction)(MainScreen);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
