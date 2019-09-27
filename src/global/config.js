/*
 * Usually this config.js file would NEVER be commited to github repo
 * @flow
*/
import {Platform} from "react-native";

export default {
    showDevScreens: __DEV__,
    useFixtures: false,
    ezLogin: false,
    yellowBox: __DEV__,
    reduxLogging: __DEV__,
    includeExamples: __DEV__,
    useReactotron: __DEV__,
    // BASE_URL : "http://192.168.1.53/ci-safety/api",
    BASE_URL : "http://ec2-18-222-196-29.us-east-2.compute.amazonaws.com/api",
    ROUTE_LOGIN : "/authentication/login",
  };
