import {Dimensions } from "react-native";
const h=Dimensions.get('window').height;
const w=Dimensions.get('window').width;

export default {
  w:w,
  container: {
    backgroundColor: "#B0DAE6"
  },
  mb10: {
    marginBottom: 10
  },
  step: {
    top:-h*0.027,
    alignItems:'center',
    marginBottom: -18,
  },
  btns: {
    alignItems:'center',
    marginBottom: 10,
  },
  itemBtn: {
    width:w*0.32,
    height:w*0.21,
    // marginHorizontal:w*0.00005,
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
  location: {
    backgroundColor:'#ffffff',
    padding:w*0.012,
    borderRadius:w*0.03,
    height:h*0.06,
  },
  locationText: {
    fontSize: w*0.03,
    color:'#5c5c5c',
    padding:w*0.012
  },
  addText: {
    fontSize: w*0.03,
    color:'#3c3c3c',
    padding:w*0.03
  },
  reportText: {
    fontSize: 22,
    width:350
  },
  area: {
    width:w*0.88,
    height:w*0.15,
    backgroundColor: 'white',
    margin:w*0.04,
    marginVertical:h*0.015,
    borderRadius:16,
    flex: 1, flexDirection: 'row', alignItems: 'stretch',
    // justifyContent:'center'
  },
  area0: {
    width:w*0.88,
    height:w*0.15,
    borderRadius:16,
  },
  textArea: {
    fontSize: w*0.03,
    width:w*0.81,
    height:w*0.15,
    backgroundColor: 'white',
    left:-w*0.033 ,
    color:'#636363',
    paddingTop:w*0.04,
    paddingLeft:w*0.03,
    // justifyContent:'center',
    // alignItems:'center',
    // alignSelf:'center'
  },
};
