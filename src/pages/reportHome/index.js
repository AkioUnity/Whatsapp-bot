import React, {Component} from "react";
import AdFooter from "../base";
import Geolocation from 'react-native-geolocation-service';
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
import {FlatList, Image, ImageBackground, TouchableOpacity, View, PermissionsAndroid} from "react-native";
import global from "../../global/styles";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import * as Actions from "../../actions/user";
import call from 'react-native-phone-call'
import ImagePicker from 'react-native-image-picker';

const args = {
  number: '911', // String value with the number to call
  prompt: false // Optional boolean property. Determines if the user should be prompt prior to the call
};

const btns = [
  {
    key: "picture",
    icon: require("../../../assets/images/pictureBtn.png"),
    name: "what_text"
  },
  {
    key: "video",
    icon: require("../../../assets/images/videoBtn.png"),
    name: "where_text"
  },
  {
    key: "audio",
    icon: require("../../../assets/images/audioBtn.png"),
    name: "other_text"
  }
];

const datas = [
  {
    title: "What did you see?",
    key: "see",
    icon: "home",
    name: "what_text"
  },
  {
    title: "Where did it take place?",
    key: "place",
    icon: "arrow-up",
    name: "where_text"
  },
  {
    title: "Any other important details to add?",
    key: "other",
    icon: "arrow-down",
    name: "other_text"
  }
];

const priorities = [
  {
    key: "Minor",
    color: "#1C1D1C",
    textColor: "#fff"
  },
  {
    key: "Major",
    color: "#F5F513",
    textColor: "#000"
  },
  {
    key: "Critical",
    color: "#CC0000",
    textColor: "#fff"
  }
];

const step = [1, 2, 3, 4];

class ReportHome extends Component {
  state = {
    avatarSource: null,
    videoSource: null,
  };

  constructor(props) {
    super(props);
    this.props.fetchIsLoading(true);
    this.state = {
      what_text: ' ',
      priority: 0,
    };

    this.selectPhotoTapped = this.selectPhotoTapped.bind(this);
    this.selectVideoTapped = this.selectVideoTapped.bind(this);
  }

  async componentDidMount() {
    const granted = await PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION);

    if (granted) {
      console.log("You can use the ACCESS_FINE_LOCATION")
    } else {
      console.log("ACCESS_FINE_LOCATION permission denied")
    }

  }

  componentDidUpdate() {
    if (!this.props.isLoading) {
      this.OnReportSuccess()
    }
  }

  OnBtnReport() {
    // this.setState({isFetched:true});
    console.log(this.state);
    this.props.reportAction(this.state);
  }

  OnReportSuccess() {
    this.props.navigation.navigate("ConfirmRoute");
    this.props.fetchIsLoading(true);
  }

  onPriorityButton(type) {
    this.setState({priority: type});
    console.log(this.state);
  };

  onGetLocation() {
    Geolocation.getCurrentPosition(
      (position) => {
        console.log(position);
        let location = 'Latitude : ' + position.coords.latitude + '  Longitude: ' + position.coords.longitude;
        this.setState({location: location});
      },
      (error) => {
        // See error code charts below.
        console.log(error.code, error.message);
      },
      {enableHighAccuracy: true, timeout: 15000, maximumAge: 10000}
    );
  }

  selectPhotoTapped() {
    const options = {
      quality: 1.0,
      maxWidth: 500,
      maxHeight: 500,
      storageOptions: {
        skipBackup: true,
      },
    };

    ImagePicker.showImagePicker(options, (response) => {
      console.log('Response = ', response);

      if (response.didCancel) {
        console.log('User cancelled photo picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      } else {
        let source = { uri: response.uri };

        // You can also display the image using data:
        // let source = { uri: 'data:image/jpeg;base64,' + response.data };

        this.setState({
          avatarSource: source,
        });
      }
    });
  }

  selectVideoTapped() {
    const options = {
      title: 'Video Picker',
      takePhotoButtonTitle: 'Take Video...',
      mediaType: 'video',
      videoQuality: 'medium',
    };

    ImagePicker.showImagePicker(options, (response) => {
      console.log('Response = ', response);

      if (response.didCancel) {
        console.log('User cancelled video picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      } else {
        this.setState({
          videoSource: response.uri,
        });
      }
    });
  }


  render() {
    return (
      <Container style={styles.container}>
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
          <Title style={global.centerTitle}>Case Details</Title>
          </Body>
          <Right>
            <Button transparent onPress={() => this.props.navigation.navigate("CategoryRoute")}>
              <Image style={global.headerBackIcon} resizeMode="contain"
                     source={require("../../../assets/images/back_arrow.png")}/>
            </Button>
          </Right>
        </Header>
        <View style={styles.step}>
          <FlatList horizontal={true} data={step} renderItem={({item}) =>
            <View style={styles.stepCircle}>
              <Text style={styles.stepText}>
                {item < 3 ? item : ''}
              </Text>
            </View>
          } keyExtractor={(item, index) => index.toString()}/>
        </View>
        <Content padder style={global.watermarkOpacity}>
          <Item regular style={styles.location}>
            <TouchableOpacity onPress={() => this.onGetLocation()}>
              <Image style={{width: 12, marginLeft: 7}} resizeMode="contain"
                     source={require("../../../assets/images/location_icon.png")}/>
            </TouchableOpacity>
            <Input style={styles.locationText} autoFocus={false} placeholder="Mark the location of incident"
                   onChangeText={(text) => {
                     this.setState({location: text});
                   }}
                   returnKeyType='next'
                   onSubmitEditing={this.searchSubmit}
                   value={this.state.location}
            />
            {/*<Image style={{width:17,marginRight:7}} resizeMode="contain"*/}
            {/*source={require("../../../assets/images/mic_icon.png")}/>*/}
          </Item>
          <Text style={styles.addText}>Add Attachment</Text>

          <View style={styles.btns}>
            <TouchableOpacity onPress={this.selectPhotoTapped.bind(this)}>
                <Image style={styles.itemBtn} resizeMode="contain" source={require("../../../assets/images/pictureBtn.png")}/>
             </TouchableOpacity>

            <TouchableOpacity onPress={this.selectVideoTapped.bind(this)}>
              <Image style={styles.itemBtn} resizeMode="contain" source={require("../../../assets/images/videoBtn.png")}/>
            </TouchableOpacity>

            <TouchableOpacity >
              <Image style={styles.itemBtn} resizeMode="contain" source={require("../../../assets/images/audioBtn.png")}/>
            </TouchableOpacity>
          </View>

          <FlatList data={datas} renderItem={({item}) =>
            <View>
              <View style={{flex: 1, flexDirection: 'row', alignItems: 'stretch'}}>
                <Form>
                  <Textarea name={item.name} rowSpan={2} bordered style={styles.textArea} onChangeText={(text) => {
                    this.setState({[item.name]: text});
                  }} placeholder={item.title}/>
                </Form>
              </View>
            </View>
          }
          />
          <View style={styles.bottom}>
            <View style={styles.bottom1}>
              <Text style={styles.priorityText}>Priority</Text>
              <FlatList horizontal={true} data={priorities} extraData={this.state} renderItem={({item, index}) => (
                <TouchableOpacity onPress={() => this.onPriorityButton(index)}>
                  <Text style={{
                    backgroundColor: item.color,
                    fontSize: 10,
                    color: item.textColor,
                    paddingHorizontal: 16,
                    paddingVertical: 4,
                    marginHorizontal: 7,
                    borderRadius: 4,
                    borderWidth: (this.state.priority == index) ? 2 : 0,
                    borderColor: '#1ace11'
                  }}>
                    {item.key}
                  </Text>
                </TouchableOpacity>
              )}/>
            </View>
            <TouchableOpacity onPress={() => call(args).catch(console.error)}>
              <View style={styles.emergency}>
                <Text style={{fontSize: 10}}>EMERGENCY?</Text>
                <Text style={{color: '#f00', fontSize: 11, fontWeight: '500'}}>911</Text>
              </View>
            </TouchableOpacity>
          </View>

          <View style={{flexDirection: 'row', justifyContent: 'center', marginTop: 10}}>
            <TouchableOpacity activeOpacity={0.5} style={global.sendBtn} onPress={() => this.OnBtnReport()}>
              <Text style={{color: '#fff', fontSize: 10, padding: 2, textAlign: 'center'}}>SEND</Text>
            </TouchableOpacity>
          </View>
        </Content>
        <AdFooter/>
      </Container>
    );
  }
}

function matchDispatchToProps(dispatch) {
  return bindActionCreators({reportAction: Actions.reportData, fetchIsLoading: Actions.fetchIsLoading}, dispatch);
}

const mapStateToProps = (state) => {
  return {
    isLoading: state.user.isLoading,
    lastError: state.user.lastError
  };
};

export default connect(mapStateToProps, matchDispatchToProps)(ReportHome);
