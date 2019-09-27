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
  Form,
  Textarea, FooterTab, Footer, Input, Item
} from "native-base";
import styles from "./styles";
import {FlatList, Image, ImageBackground, TouchableOpacity, View} from "react-native";
import global from "../../global/styles";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import * as Actions from "../../actions/user";
import AdFooter from "../base";

const datas = [
  {
    key: "Right of Way Maintenance/Safety",
    color: "#F09FA0",
  },
  {
    key: "Facility Maintenance/Safety",
    color: "#7AC0C8",
  },
  {
    key: "Public Safety Concerns",
    color: "#97D6A1"
  },
  {
    key: "Signage & Lighting Maintenance/Safety",
    color: "#DC9DF6",
  },
  {
    key: "Parks & Recreational Maintenance/Safety",
    color: "#B5B4F0",
  },
];

const step = [ 1,2,3,4];

class Category extends Component {
  constructor(props) {
    super(props);
    this.props.fetchIsLoading(true);
    this.state = {
      what_text:' '
    };
  }

  componentDidUpdate(){
    if (!this.props.isLoading) {
      this.OnReportSuccess()
    }
  }

  OnBtnReport(){
    // this.setState({isFetched:true});
    console.log(this.state);
    this.props.reportAction(this.state);
  }

  OnReportSuccess(){
    this.props.navigation.navigate("ConfirmRoute");
    this.props.fetchIsLoading(true);
  }

  render() {
    return (
      <Container style={styles.container}>
        <Header style={global.reportHeader}>
          <Left>
            <Button transparent onPress={() => this.props.navigation.navigate("DrawerOpen")}>
              <Icon name="menu"/>
            </Button>
          </Left>
          <Body>
          <Title style={global.centerTitle}>Case Category</Title>
          </Body>
          <Right>
            <Button transparent onPress={() => this.props.navigation.goBack()}>
              <Image style={global.headerBackIcon} resizeMode="contain" source={require("../../../assets/images/back_arrow.png")}/>
            </Button>
          </Right>
        </Header>
        <View style={styles.step}>
          <FlatList horizontal={true} data={step} renderItem={({item}) =>
            <View style={styles.stepCircle}>
              <Text style={styles.stepText}>
                {item<2?item:''}
              </Text>
            </View>
            } keyExtractor={(item, index) => index.toString()}/>
        </View>
          <Content padder style={global.watermarkOpacity}>
            {/*<Item  regular style={styles.location}>*/}
              {/*<Image style={{width:12,marginLeft:7}} resizeMode="contain"*/}
                     {/*source={require("../../../assets/images/location_icon.png")}/>*/}
              {/*<Input style={styles.locationText} autoFocus={false} placeholder="Mark the location of inciden"*/}
                     {/*onChangeText={(text) => {this.setState({term:text}); }}*/}
                     {/*returnKeyType='next'*/}
                     {/*onSubmitEditing={this.searchSubmit}*/}
                     {/*value={this.state.term}*/}
              {/*/>*/}
              {/*<Image style={{width:17,marginRight:7}} resizeMode="contain"*/}
                     {/*source={require("../../../assets/images/mic_icon.png")}/>*/}
            {/*</Item>*/}

            <FlatList data={datas} renderItem={({item}) =>
              <TouchableOpacity style={styles.area}  onPress={() => this.props.navigation.navigate("ReportRoute")}>
                  <View style={{backgroundColor:item.color,width:30,
                    height:styles.w*0.15,borderRadius:12,}}>
                  </View>
                  <Text style={styles.textArea}>{item.key}</Text>
              </TouchableOpacity>
            }
            />

          </Content>
        <AdFooter/>
      </Container>
    );
  }
}

function matchDispatchToProps(dispatch) {
  return bindActionCreators({reportAction:Actions.reportData,fetchIsLoading:Actions.fetchIsLoading}, dispatch);
}

const mapStateToProps = (state) => {
  return {
    isLoading: state.user.isLoading,
    lastError: state.user.lastError
  };
};

export default connect(mapStateToProps, matchDispatchToProps)(Category);
