import { createAppContainer, createStackNavigator } from 'react-navigation';
import HomeScreen from '../app/screens/home.screen';
import SplashScreen from '../app/screens/splash.screen';
import HomeComponent from '../app/components/home.component';

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

const initialRoute = {
  initialRoute: Splash
}

const AppNavigator = createStackNavigator({
  Splash: Splash,
  Home: Home
}, initialRoute)

const AppContainer = createAppContainer(AppNavigator);

export default AppContainer;
