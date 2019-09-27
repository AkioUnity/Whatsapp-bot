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
  label:{
    color: '#000'
  },
  input:{
    color: '#756c73',
    fontSize:h*0.017
  },
  inputRadius:{
    width:width,
    marginBottom:h*0.020,
    marginLeft:w*0.01,
    borderColor:'#aa8d89',
  },
  loginText:{
    fontSize: 22, color: '#000',
    marginBottom:50
  },
  loginImage:{
    width: 150,
    height:55,
    marginBottom:20
  },
  shadow: {
    flex: 1,
    width: undefined,
    height: undefined,
  },
  facebookRadius:{
    backgroundColor: '#F58320',
    width:width,
    height:50,
    borderRadius: 25,
    marginBottom:h*0.030,
    marginTop:h*0.030,
    alignSelf:'center'
  },
});
export default styles;
