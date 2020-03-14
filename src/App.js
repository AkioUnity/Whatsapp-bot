import { createAppContainer} from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Login from './container/LoginContainer';
import MainScreen from './components/MainScreen';
import AddContactScreen from './components/AddContactScreen';
import Chat from './components/Chat';
import SelectContact from './components/SelectContact';
import Home from './container/HomeContainer';

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
