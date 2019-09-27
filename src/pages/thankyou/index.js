import React, {Component} from "react";
import {
  Container,
  Header,
  Title,
  Content,
  Button,
  Icon,
  Text,
  Left,
  Right,
  Body,
  CheckBox, ListItem,
  Input, FooterTab, Footer, Toast
} from "native-base";
import styles from "./styles";
import {Image, ImageBackground, View, TouchableOpacity, FlatList} from "react-native";
import global from "../../global/styles";
import {bindActionCreators} from "redux";
import * as Actions from "../../actions/user";
import {connect} from "react-redux";
import AdFooter from "../base";

const step = [ 1,2,3,4];

class ConfirmPage extends Component {

  constructor(props) {
    super(props);
    this.props.fetchIsLoading(true);
  }

  componentDidUpdate(){
    if (!this.props.isLoading) {
      this.OnReportSuccess()
    }
  }

  OnBtnReport(){
    this.props.reportUser(this.state);
  }

  OnReportSuccess(){
    this.props.fetchIsLoading(true);
    console.log('show toast Successfully');
    Toast.show({
      text: "Successfully Reported!",
      buttonText: "Okay",
      type: "success",
      duration: 5000
    });
    // this.props.navigation.navigate("ConfirmRoute");
  }

  render() {
    return (
      <Container style={global.container}>
        <Header style={global.reportHeader}>
          <Left>
            <Button
              transparent
              onPress={() => this.props.navigation.navigate("DrawerOpen")}
            >
              <Icon name="menu"/>
            </Button>
          </Left>
          <Body>
          <Title style={global.centerTitle}>Success!</Title>
          </Body>
          <Right>
            <Button transparent onPress={() => this.props.navigation.navigate("ConfirmRoute")}>
              <Image style={global.headerBackIcon} resizeMode="contain" source={require("../../../assets/images/back_arrow.png")}/>
            </Button>
          </Right>
        </Header>
        <View style={global.step}>
          <FlatList horizontal={true} data={step} renderItem={({item}) =>
            <View style={global.stepCircle}>
              <Text style={global.stepText}>
                {item<5?item:''}
              </Text>
            </View>
          } keyExtractor={(item, index) => index.toString()}/>
        </View>
          <Content padder style={global.watermarkOpacity}>
            <View style={{alignItems: 'center',margin:10}}>
              <View style={styles.whiteCircle}>
                <Image square style={styles.logoImage} resizeMode="contain" source={require("../../../assets/images/logo0.png")}/>
              </View>
            <Text style={styles.label1}>
              Thank you
            </Text>
            <Text style={styles.label2}>
              Reports Marked Complete
            </Text>
            <View style={{flex: 1, flexDirection: 'row', justifyContent: 'center',margin:30}}>
              <TouchableOpacity activeOpacity={0.6} style={global.button} onPress={() => this.props.navigation.navigate("WebRoute",{url:"http://www.coeltx.net/",name:"EAGLE LAKE TEXAS"})} >
                <Image style={{height: 80,width:80}} resizeMode="contain"
                       source={require('../../../assets/ui/R4.png')}/>
              </TouchableOpacity>
              <TouchableOpacity activeOpacity={0.6} style={global.button} onPress={() => this.props.navigation.navigate("WebRoute",{url:"http://www.coeltx.net/",name:"EAGLE LAKE TEXAS"})} >
                <Image style={{height: 80,width:80,marginLeft:30}} resizeMode="contain"
                       source={require('../../../assets/images/city_stamp.png')}/>
              </TouchableOpacity>
            </View>
            </View>
          </Content>
        <AdFooter/>
      </Container>
    );
  }
}

function matchDispatchToProps(dispatch) {
  return bindActionCreators({reportUser:Actions.reportUser,fetchIsLoading:Actions.fetchIsLoading}, dispatch);
}

const mapStateToProps = (state) => {
  return {
    isLoading: state.user.isLoading,
    lastError: state.user.lastError,
    report_id: state.user.report_id
  };
};

export default connect(mapStateToProps, matchDispatchToProps)(ConfirmPage);
