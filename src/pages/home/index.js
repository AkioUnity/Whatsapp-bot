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
  Footer,
  FooterTab
} from "native-base";
import styles from "./styles";
import global from "../../global/styles";
import {Image, ImageBackground, TouchableOpacity, View,Linking} from "react-native";
import AdFooter from "../base";
const logoImage = require("../../../assets/images/logo0.png");
class Home extends Component {
  render() {
    return (
      <Container>
        {/*<Header>*/}
          {/**/}
          {/*<Right/>*/}
        {/*</Header>*/}
        {/*<ImageBackground resizeMode="contain" source={require("../../../assets/ui/Logo1.png")}*/}
                         {/*style={global.watermark}>*/}


          <Content padder style={global.watermarkOpacity}>
            <Button transparent onPress={() => this.props.navigation.navigate("DrawerOpen")} >
              <Icon name="menu"/>
            </Button>
            <View style={{alignItems: 'center'}}>
              <Text style={styles.hello}>Hello</Text>
              <View style={styles.whiteRec}>
                <Image square style={styles.logoImage} resizeMode="contain" source={logoImage}/>
                <View style={styles.logoRight}>
                  <Text style={styles.reportText}>Submit Report</Text>
                  <TouchableOpacity activeOpacity={0.5} style={global.button}
                                  onPress={() => this.props.navigation.navigate("CategoryRoute")}>
                  <Image style={styles.goArrow} resizeMode="contain" source={require('../../../assets/images/goArrow.png')}/>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
            <Text style={styles.spectitleText}>Welcome to Safety in Numbers:</Text>
            <Text style={styles.specText}>Thank you for using your city’s safety reporting system "Safety in Numbers" also referred to as "SiN".</Text>

            <Text style={styles.specText}>* Please do not use this application to report emergencies.  If you wish to report an emergency, please call 911.</Text>

            <Text style={styles.specText}>* If you choose to report "Anonymously", you will not have the option for follow up status communications on items you report. For those wishing status updates, please login with your Facebook or Google accounts or create an account and choose to receive status updates when filling out your report.</Text>

            <Text style={styles.specText}>* We will not be able to process cases that fail to provide relevant details, or reports that contain irrational emotional reports, verbal abuse, foul language, or reproduction of news</Text>

            <Text style={styles.specText}>* Please provide accurate information to aid the city’s efficiency. Please do not repeatedly file a report without new facts or causes.</Text>
            <Text style={styles.specText}>* If you receive a satisfaction survey after using SiN, Please respond to help us improve our product and services.</Text>
            <View style={{flex: 1, flexDirection: 'row', justifyContent: 'space-around'}}>
              <TouchableOpacity activeOpacity={0.5} style={global.button}
                                onPress={() => this.props.navigation.navigate("Login")}>
                <Image style={{width: 50, flex: 1}} resizeMode="contain"
                       source={require('../../../assets/images/login_icon.png')}/>
                <Text style={styles.loginText}>Log in</Text>
              </TouchableOpacity>
              {/*<TouchableOpacity activeOpacity={0.5} style={styles.acceptBtn}*/}
                                {/*onPress={() => this.props.navigation.navigate("Login")}>*/}
                {/*<Text style={styles.acceptBtnText}>ACCEPT TO</Text>*/}
              {/*</TouchableOpacity>*/}
            </View>
            <View style={styles.topRec}>
              <Text style={styles.goLeft}>Questions or Comments?</Text>
              <TouchableOpacity activeOpacity={0.5} style={global.button}
                                onPress={() => Linking.openURL('mailto:info@reasaintl.com') }>
                <Image style={styles.goBtn} resizeMode="contain" source={require('../../../assets/images/goBtn.png')}/>
              </TouchableOpacity>
            </View>
          </Content>
        {/*</ImageBackground>*/}
        <AdFooter/>
      </Container>
    );
  }
}

export default Home;
