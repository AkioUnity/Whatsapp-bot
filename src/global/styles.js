import { Dimensions,StyleSheet } from "react-native";
const h=Dimensions.get('window').height;
const w=Dimensions.get('window').width;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#B0DAE6"
  },
  loginHeader: {
    height: 100,
    backgroundColor: "#ECECEC"
  },
  centerTitle: {
    alignSelf:'center',
    textAlign:'center',
    color:'#fff',
  },
  headerBackIcon: {
    width: 20,
    height:20
  },
  reportHeader: {
    height: h*0.16,
    backgroundColor: "#21428B",
    paddingBottom: h*0.08
  },
  alignCenter: {
    alignItems: "center"
  },
  black: { color: "#000" },
  buttonText: {
    textAlign: "center",
    color: "#FFF",
    fontWeight: "700",
    paddingHorizontal: 10
  },

  googlePlusButton: { backgroundColor: "#dd4b39" },
  facebookButton: { backgroundColor: "#3B5998" },

  disabledButton : {
    backgroundColor: "rgba(149, 165, 166,1.0)"
  },
  text: {
    paddingTop: 0,
    paddingBottom: 10,
    textAlign: "center"
  },
  watermark: {
    flex:1
  },
  watermarkOpacity: {
    backgroundColor: '#B0DAE6'
  },
  backBtn:{
    width: 25,
    height:25,
    margin: 15
  },
  image: {
    flex: 1,
    margin: 5,
    padding: 15,
    height: 50,
    width: 50
  },
  button: {
    alignItems: 'center'
  },

  //step
  step: {
    top:-h*0.027,
    alignItems:'center',
    marginBottom: -18,
  },
  stepCircle: {
    marginHorizontal:w*0.05,
    width:w*0.09,
    height:w*0.09,
    borderRadius:w*0.045,
    backgroundColor:'#ED882B'
  },
  stepText: {
    fontSize: w*0.045,
    color:'#fff',
    textAlign: 'center',
    padding:w*0.012
  },
  sendBtn: {
    width:w*0.28,
    height:w*0.08,
    borderRadius:w*0.04,
    backgroundColor:'#ED882B',
    justifyContent: 'center'
  },

});

export default styles;
