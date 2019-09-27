import React from "react";
import { Root } from "native-base";
import { StackNavigator, DrawerNavigator } from "react-navigation";

import Login from "./container/LoginContainer";
import BlankPage from "./pages/blankPage";
import Home from "./container/HomeContainer";
import SideBar from "./pages/sidebar";
import WebView from "./pages/webpage";
import ReportForm from "./pages/reportHome";
import Category from "./pages/category";
import ConfirmPage from "./pages/confirmPage";
import ThankyouPage from "./pages/thankyou";
import SignUpPage from "./pages/signup";

const Drawer = DrawerNavigator(
  {
    Login: { screen: Login },
    BlankPage: { screen: BlankPage },
    WebRoute: { screen: WebView },
    ReportRoute: { screen: ReportForm },
    CategoryRoute: { screen: Category },
    ConfirmRoute: { screen: ConfirmPage },
    ThankyouRoute: { screen: ThankyouPage },
    Home: { screen: Home }

  },
  {
    initialRouteName: "Home",
    contentOptions: {
      activeTintColor: "#e91e63"
    },
    contentComponent: props => <SideBar {...props} />
  }
);

const AppNavigator = StackNavigator(
  {
    Login: { screen: Login },
    BlankPage: { screen: BlankPage },
    HomeRoute: { screen: Drawer },
    SignUpRoute: { screen: SignUpPage },
    // AccordionIconStyle: { screen: AccordionIconStyle },
    // AccordionHeaderContentStyle: { screen: AccordionHeaderContentStyle },
    // AccordionCustomHeaderContent: { screen: AccordionCustomHeaderContent }
  },
  {
    initialRouteName: "Login",
    headerMode: "none"
  }
);

export default () =>
  <Root>
    <AppNavigator />
  </Root>;
