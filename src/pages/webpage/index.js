import React, {Component} from "react";
import {WebView} from "react-native-webview";
import {
  Container,
  Header,
  Title,
  Button,
  Icon,
  Left,
  Right,
  Body
} from "native-base";
import styles from "./styles";

class WebPage extends Component {
  render() {
    const {navigation} = this.props;
    const url = navigation.getParam('url', 'no');
      return (
          <Container style={styles.container}>
            <Header>
              <Left>
                <Button
                    transparent
                    onPress={() => this.props.navigation.navigate("DrawerOpen")}
                >
                  <Icon name="menu"/>
                </Button>
              </Left>
              <Body>
              <Title>Safety In Numbers</Title>
              </Body>
              <Right/>
            </Header>
            <WebView
                source={{uri: url}}
                // style={{marginTop: 20}}
            />
          </Container>
      );
  };
}

export default WebPage;
