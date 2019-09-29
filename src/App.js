import React from 'react';
import { Root } from 'native-base';
import { createStackNavigator, createDrawerNavigator ,createAppContainer} from 'react-navigation';

import Login from './container/LoginContainer';
import BlankPage from './pages/blankPage';
import Home from './container/HomeContainer';
import SideBar from './pages/sidebar';

const Drawer = createDrawerNavigator(
  {
    Login: { screen: Login },
    // WebRoute: { screen: WebView },
    Home: { screen: Home },
  },
  {
    initialRouteName: 'Home',
    contentOptions: {
      activeTintColor: '#e91e63',
    },
    contentComponent: props => <SideBar {...props} />,
  }
);

const AppNavigator = createStackNavigator(
  {
    Login: { screen: Login },
    HomeRoute: { screen: Home},
    // SignUpRoute: { screen: SignUpPage },
  },
  {
    initialRouteName: 'Login',
    headerMode: 'none',
  }
);
const App = createAppContainer(AppNavigator);
export default App;
