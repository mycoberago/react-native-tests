import { createAppContainer, createStackNavigator } from 'react-navigation';
import HomeScreen from '../app/screens/home.screen';
import SplashScreen from '../app/screens/splash.screen';
import HomeComponent from '../app/components/home.component';
import MarketItemDetailsComponent from '../app/components/market_item_details.component';
import MessageUserComponent from '../app/components/message_user.component';

const Splash = {
  screen: SplashScreen,
  navigationOptions: {
    header: null
  }
}

const Home = {
  screen: HomeScreen,
  navigationOptions: {
    header: null,
    gesturesEnabled: false
  }
}

const MarketItemDetails = {
  navigationOptions: {
    headerBackTitle: ""
  },
  screen: MarketItemDetailsComponent
}


const MessageUser = {
  navigationOptions: {
    headerBackTitle: ""
  },
  screen: MessageUserComponent
}


const initialRoute = {
  initialRoute: Splash
}

const AppNavigator = createStackNavigator({
  Splash: Splash,
  Home: Home,
  MarketItemDetails: MarketItemDetails,
  MessageUser: MessageUser
}, initialRoute)

const AppContainer = createAppContainer(AppNavigator);

export default AppContainer;
