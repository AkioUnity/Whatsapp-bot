import React, {Component} from "react";
import {Image} from "react-native";
import global from "../../global/styles";
import {
  Container,
  Content,
  Button,
  Text,
  View,
  Icon,
  Footer,
  Spinner, FooterTab, Label, Input, Item, Form
} from "native-base";
import AdFooter from "../base";
import styles from "./styles";
import loginStyles from "../login/styles";

class SignUp extends Component {

  render() {
    const isLoading = this.props.isLoading;
    console.log('Login render isLoading:' + isLoading);
    return (
      <Container>
        <Content padder style={global.watermarkOpacity}>
          <Button transparent onPress={() => this.props.navigation.goBack()}>
            <Image square style={global.backBtn} resizeMode="contain"
                   source={require("../../../assets/images/back_arrow.png")}/>
          </Button>
          <View style={{alignItems: 'center'}}>
            <View style={loginStyles.whiteCircle}>
              <Image square style={loginStyles.logoImage} resizeMode="contain"
                     source={require("../../../assets/images/logo0.png")}/>
            </View>
            <Text style={styles.loginText}>Sign up</Text>
            <Form >
                <Item stackedLabel style={styles.inputRadius}>
                  <Label style={styles.label}>Name</Label>
                  <Input style={styles.input}/>
                </Item>
                <Item stackedLabel style={styles.inputRadius}>
                  <Label style={styles.label}>Email</Label>
                  <Input style={styles.input}/>
                </Item>
                <Item stackedLabel style={styles.inputRadius}>
                  <Label style={styles.label}>Password</Label>
                  <Input style={styles.input} secureTextEntry/>
                </Item>
            </Form>
              <Button full style={styles.facebookRadius} onPress={() => this.props.navigation.navigate("Login")}>
                <Text style={{fontSize: 13}}>Sign up</Text>
              </Button>

              <View>
                <Button transparent onPress={() => this.props.navigation.navigate("Login")}>
                  <Text style={{fontSize: 17,color:'#6f6f6f'}}>Already have an account? Log in</Text>
                </Button>
              </View>
            </View>
        </Content>
        <AdFooter/>
      </Container>
  );
  }
  }

  export default SignUp;
