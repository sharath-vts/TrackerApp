import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {createAppContainer, createAppNavigator, createSwitchNavigator} from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import SignupScreen from './src/screens/SignupScreen';
import SigninScreen from './src/screens/SigninScreen';
import TrackDetailScreen from './src/screens/TrackDetailScreen';
import AccountScreen from './src/screens/AccountScreen';
import TrackListScreen from './src/screens/TrackListScreen';
import TrackCreateScreen from './src/screens/TrackCreateScreen';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Provider } from './src/context/AuthContext';
import { setNavigator } from './src/navigatioRef';
import InitialScreen from './src/screens/InitialScreen';

const switchNavigator = createSwitchNavigator({
  InitialScreen: InitialScreen,
  loginFlow: createStackNavigator({
    SignupScreen: SignupScreen,
    SigninScreen: SigninScreen
  }),
  mainFlow: createMaterialBottomTabNavigator({
    trackListFlow: createStackNavigator({
      TrackListScreen: TrackListScreen,
      TrackDetailScreen: TrackDetailScreen
    }),
    TrackCreateScreen: TrackCreateScreen,
    AccountScreen: AccountScreen
  })
})

const App = createAppContainer(switchNavigator)
export default () => {
  return (
  <Provider>
    <SafeAreaProvider>
      <App ref = {(navigator) => {setNavigator(navigator)}}/>
    </SafeAreaProvider>
    </Provider>
  )
}