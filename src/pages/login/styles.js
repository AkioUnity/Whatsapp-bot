import { Dimensions, StyleSheet } from "react-native";

const h = Dimensions.get("window").height;
const w = Dimensions.get("window").width;
const width=w*0.8;
const styles: any = StyleSheet.create({
  container: {
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: "#FBFAFA",
  },
  whiteCircle:{
    backgroundColor: '#fff',
    width:h*0.1,
    height:h*0.1,
    borderRadius: h*0.1*0.5,
    margin:h*0.03,
  },
  inputRadius:{
    backgroundColor: '#fff',
    width:width,
    height:45,
    borderRadius: 21,
    marginBottom:h*0.02,
    marginLeft:0,
    padding:h*0.02,
    fontSize: 12,
  },
  loginRadius:{
    backgroundColor: '#387EF5',
    width:width,
    height:50,
    margin:h*0.03,
  },
  loginText:{
    fontSize: 20, color: '#000',
    margin:w*0.1,
    textAlign: 'center'
  },
  helloText:{
    fontSize: 25, color: '#000',
    margin:w*0.1,
    marginBottom:w*0.5,
  },
  loginImage:{
    width: 150,
    height:h*0.05,
    marginBottom:h*0.02
  },
  shadow: {
    flex: 1,
    width: undefined,
    height: undefined,
  },
  facebookRadius:{
    backgroundColor: '#F58320',
    width:width,
    height:40,
    borderRadius: 20,
    marginBottom:h*0.04
  },
  facebookLogin:{
    marginBottom:h*0.04
  },
});
export default styles;
