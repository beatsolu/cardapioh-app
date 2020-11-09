import 'react-native-gesture-handler';
import React from 'react';
import {StyleSheet} from 'react-native';
import {makeServer} from "./server";
import {AppLoading} from 'expo';
import {useFonts} from "expo-font";
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from "@react-navigation/stack";
import HomeScreen from './src/screens/HomeScreen'

if (process.env.NODE_ENV === "development") {
  if (window.server) {
    window.server.shutdown();
  }
  window.server = makeServer();
}




const Stack = createStackNavigator();

export default function App() {
  let [fontsLoaded] = useFonts({
    'Sofia Pro Black': require('./assets/fonts/SofiaPro/SofiaProBlack.otf'),
    'Sofia Pro Light': require('./assets/fonts/SofiaPro/SofiaProLight.otf'),
    'Sofia Pro Semi Bold': require('./assets/fonts/SofiaPro/SofiaProSemiBold.otf'),
  });

  if (!fontsLoaded) {
    return <AppLoading/>;
  } else {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Home" component={HomeScreen} options={{headerShown: false}}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
});
