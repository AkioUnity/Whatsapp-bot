import React from 'react';
import { Root } from 'native-base';
import { createStackNavigator, createDrawerNavigator ,createAppContainer} from 'react-navigation';

import Login from './container/LoginContainer';
import MainScreen from './components/MainScreen';
import AddContactScreen from './components/AddContactScreen';
import Chat from './components/Chat';
import SelectContact from './components/SelectContact';
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
    MainScreen: { screen: MainScreen},
    Chat: { screen: Chat },
      SelectContact: { screen: SelectContact },
      AddContactScreen: { screen: AddContactScreen },
  },
  {
    initialRouteName: 'Login',
    headerMode: 'none',
  }
);
const App = createAppContainer(AppNavigator);
export default App;
