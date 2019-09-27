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
    this.state = {
      checkbox1: true,
      checkbox2: true,
      report_id:this.props.report_id,
      showToast: false
    };
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
    // Toast.show({
    //   text: "Successfully Reported!",
    //   buttonText: "Okay",
    //   type: "success",
    //   duration: 5000
    // });
    this.props.navigation.navigate("ThankyouRoute");
  }

  toggleSwitch1() {
    this.setState({
      checkbox1: !this.state.checkbox1
    });
  }

  toggleSwitch2() {
    this.setState({
      checkbox2: !this.state.checkbox2
    });
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
          <Title style={global.centerTitle}>Submit</Title>
          </Body>
          <Right>
            <Button transparent onPress={() => this.props.navigation.navigate("ReportRoute")}>
              <Image style={global.headerBackIcon} resizeMode="contain" source={require("../../../assets/images/back_arrow.png")}/>
            </Button>
          </Right>
        </Header>
        <View style={global.step}>
          <FlatList horizontal={true} data={step} renderItem={({item}) =>
            <View style={global.stepCircle}>
              <Text style={global.stepText}>
                {item<4?item:''}
              </Text>
            </View>
          } keyExtractor={(item, index) => index.toString()}/>
        </View>
          <Content padder style={global.watermarkOpacity}>
            {/*<View>*/}
              {/*<ListItem button onPress={() => this.toggleSwitch1()}>*/}
                {/*<Body>*/}
                {/*<Text style={{fontSize: 20}}>Save report details to phone</Text>*/}
                {/*</Body>*/}
                {/*<CheckBox*/}
                  {/*checked={this.state.checkbox1}*/}
                  {/*onPress={() => this.toggleSwitch1()}*/}
                {/*/>*/}
              {/*</ListItem>*/}
              {/*<ListItem button onPress={() => this.toggleSwitch2()}>*/}
                {/*<Body>*/}
                {/*<Text style={{fontSize: 20}}>Would you like a follow up? </Text>*/}
                {/*</Body>*/}
                {/*<CheckBox*/}
                  {/*color="red"*/}
                  {/*checked={this.state.checkbox2}*/}
                  {/*onPress={() => this.toggleSwitch2()}*/}
                {/*/>*/}
              {/*</ListItem>*/}
            {/*</View>*/}
            <View style={styles.form}>
              <View style={styles.inputLine}>
                <Text style={styles.label}>Name:</Text>
                <Input style={styles.input} onChangeText={(text) => {this.setState({username:text}); }}/>
              </View>
              <View style={styles.inputLine}>
                <Text style={styles.label} >Email: </Text>
                <Input style={styles.input} onChangeText={(text) => {this.setState({email:text}); }}/>
              </View>
              <View style={styles.inputLine}>
                <Text style={styles.label} >Mobile#: </Text>
                <Input style={styles.input} onChangeText={(text) => {this.setState({phone:text}); }}/>
              </View>
            </View>
            <View style={{flex: 1, flexDirection: 'row', justifyContent: 'center',margin:10}}>
              <TouchableOpacity activeOpacity={0.6} style={global.button} onPress={() => this.props.navigation.navigate("WebRoute",{url:"http://www.coeltx.net/",name:"EAGLE LAKE TEXAS"})} >
                <Image style={{height: 150, flex: 1}} resizeMode="contain"
                       source={require('../../../assets/ui/R4.png')}/>
              </TouchableOpacity>
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'center',marginTop:10}}>
              <TouchableOpacity activeOpacity={0.5} style={global.sendBtn} onPress={() => this.OnBtnReport()} >
                <Text style={{color:'#fff',fontSize:10,padding:8,textAlign: 'center'}}>Submit</Text>
              </TouchableOpacity>
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
