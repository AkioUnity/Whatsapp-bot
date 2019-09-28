import React from "react";
import { Root } from "native-base";
import { createStackNavigator, createDrawerNavigator ,createAppContainer} from "react-navigation";

import Login from "./container/LoginContainer";
import BlankPage from "./pages/blankPage";
import Home from "./container/HomeContainer";
import SideBar from "./pages/sidebar";

const Drawer = createDrawerNavigator(
  {
    Login: { screen: Login },
    // BlankPage: { screen: BlankPage },
    // WebRoute: { screen: WebView },
    // ReportRoute: { screen: ReportForm },
    // CategoryRoute: { screen: Category },
    // ConfirmRoute: { screen: ConfirmPage },
    // ThankyouRoute: { screen: ThankyouPage },
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

const AppNavigator = createStackNavigator(
  {
    Login: { screen: Login },
    // BlankPage: { screen: BlankPage },
    HomeRoute: { screen: Drawer },
    // SignUpRoute: { screen: SignUpPage },
    // AccordionIconStyle: { screen: AccordionIconStyle },
    // AccordionHeaderContentStyle: { screen: AccordionHeaderContentStyle },
    // AccordionCustomHeaderContent: { screen: AccordionCustomHeaderContent }
  },
  {
    initialRouteName: "Login",
    headerMode: "none"
  }
);
const App = createAppContainer(AppNavigator);
export default App;
