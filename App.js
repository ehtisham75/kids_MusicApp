import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
//------------------Containers------------------->>
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack'
//------------------Screens------------------->>
import SplashScreen from './SourceCode/Views/Welcome/SplashScreen';
import NoInternetScreen from './SourceCode/Views/NetInfo/NoInternetScreen';
import HomeScreen from './SourceCode/Views/HomeScreen/HomeScreen';
import PianoScreen from './SourceCode/Views/HomeScreen/PianoScreen';
import XylophoneScreen from './SourceCode/Views/HomeScreen/XylophoneScreen';
import DrumScreen from './SourceCode/Views/HomeScreen/DrumScreen';
import AlphabetScreen from './SourceCode/Views/HomeScreen/AlphabetScreen';
import CountingScreen from './SourceCode/Views/HomeScreen/CountingScreen';
// ----------------------ONE SIGNAL----------------------->>
import OneSignal from 'react-native-onesignal';

const Stack = createStackNavigator()

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  componentDidMount() {
    // OneSignal.setAppId("2a75f2df-7214-4afc-91f1-5726f5983398"); //-->> id of itpanther
    OneSignal.setAppId("a25dd97a-3d7e-44fb-83ac-2aa2167fa5aa");  //-->> ID of Rapid Grow
    OneSignal.promptForPushNotificationsWithUserResponse();

    OneSignal.setNotificationOpenedHandler(notification => {
      console.log("OneSignal: notification opened:", notification);
    });
  }

  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false
          }}>

          <Stack.Screen name="SplashScreen" component={SplashScreen} />
          <Stack.Screen name="NoInternetScreen" component={NoInternetScreen} />
          <Stack.Screen name="HomeScreen" component={HomeScreen} />
          <Stack.Screen name="PianoScreen" component={PianoScreen} />
          <Stack.Screen name="XylophoneScreen" component={XylophoneScreen} />
          <Stack.Screen name="DrumScreen" component={DrumScreen} />
          <Stack.Screen name="AlphabetScreen" component={AlphabetScreen} />
          <Stack.Screen name="CountingScreen" component={CountingScreen} />

        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}



 