import React from "react";
import { DrawerNavigator } from "react-navigation";

import Login from "./container/LoginContainer";
import BlankPage from "./pages/blankPage";
import Home from "./container/HomeContainer";
import SideBar from "./pages/sidebar";


export default (Drawer = DrawerNavigator(
  {
    Login: { screen: Login },
    BlankPage: { screen: BlankPage },
    Home: { screen: Home }
  },
  {
    initialRouteName: "Home",
    contentOptions: {
      activeTintColor: "#e91e63"
    },
    contentComponent: props => <SideBar {...props} />
  }
));
