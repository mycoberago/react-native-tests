import { createAppContainer, createStackNavigator } from 'react-navigation';
import HomeScreen from '../app/screens/home.screen';
import SplashScreen from '../app/screens/splash.screen';
import HomeComponent from '../app/components/home.component';
import MarketItemDetailsComponent from '../app/components/market_item_details.component';

const Splash = {
  screen: SplashScreen,
  navigationOptions: {
    header: null
  }
}

const Home = {
  screen: HomeScreen,
  navigationOptions: {
    header: null
  }
}

const MarketItemDetails = {
  screen: MarketItemDetailsComponent
}

const initialRoute = {
  initialRoute: Splash
}

const AppNavigator = createStackNavigator({
  Splash: Splash,
  Home: Home,
  MarketItemDetails: MarketItemDetails
}, initialRoute)

const AppContainer = createAppContainer(AppNavigator);

export default AppContainer;
