import {Dimensions} from "react-native";

const h=Dimensions.get('window').height;
const w=Dimensions.get('window').width;

export default {
  container: {
    backgroundColor: "#FCE292"
  },
  form: {
    borderRadius: 6,
    borderWidth: 1,
    borderColor: '#a3a3c3',
    fontSize: 20
  },
  inputLine: {
    flexDirection: 'row',
    margin:10,
    justifyContent:'space-between'
  },
  whiteCircle:{
    backgroundColor: '#fff',
    width:h*0.2,
    height:h*0.2,
    borderRadius: h*0.2*0.5,
    margin:h*0.03,
  },
  logoImage:{
    width: h*0.2*0.6,
    height:h*0.2*0.6,
    margin:h*0.2*0.4*0.5
  },
  label1: {
    fontSize: w*0.07,
    color:'#696969',
    padding:7,
  },
  label2: {
    fontSize: w*0.04,
    color:'#696969',
    padding:7,
  },
  mb10: {
    marginBottom: 10
  },
  starImage:{
    // alignSelf: "stretch",
    // height: deviceHeight / 8,
    // width: null,
    width: 250,
    height:250,
    flex: 1,
    // position: "relative",
    // marginBottom: 40,
    // resizeMode: "cover"
  },

  leftImage:{
    width: 200,
    flex:1
  },
  reportText: {
    fontSize: 12
  }
};
