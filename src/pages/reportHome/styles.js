import {Dimensions } from "react-native";
const h=Dimensions.get('window').height;
const w=Dimensions.get('window').width;

export default {
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  capture: {
    flex: 0,
    backgroundColor: '#fff',
    borderRadius: 5,
    padding: 15,
    paddingHorizontal: 20,
    alignSelf: 'center',
    margin: 20,
  },
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
    flex:1,
    flexDirection: 'row'
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
  textArea: {
    fontSize: w*0.03,
    width:w*0.91,
    backgroundColor: 'white',
    margin:w*0.02,
    marginVertical:h*0.004,
    borderRadius:12,
  },
  iconSize:{
    fontSize:12,
    color: "red"
  },
  bottom:{
    margin:w*0.005,
    // backgroundColor:'#d79a96',
    flexDirection: 'row',
    alignItems:'flex-end',
    alignContent:'space-around'

  },
  bottom1: {
    // alignItems:'center',
    width:w*0.65,
    marginBottom: 10,
  },
  emergency:{
    width:w*0.26,
    height:w*0.13,
    backgroundColor:'#DED9D9',
    alignItems:'center',
    justifyContent:'center',

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.30,
    shadowRadius: 4.65,

    elevation: 8,
  },
  priorityText: {
    fontSize: w*0.03,
    color:'#000',
    padding:w*0.02
  },

};
