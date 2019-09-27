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
  label: {
    fontSize: 16,
    color:'#696969',
    padding:5,
  },
  input: {
    backgroundColor: "#fff1f3",
    borderWidth: 1,
    borderColor: '#bcbcbc',
    fontSize:w*0.035,
    width:w*0.6,
    height: w*0.09,
    borderRadius: 10,
    padding:w*0.01,
    // paddingTop:w*0.013,
    paddingLeft:w*0.02,
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
