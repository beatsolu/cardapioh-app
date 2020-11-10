import 'react-native-gesture-handler';
import React from 'react';
import {AppLoading} from 'expo';
import {useFonts} from "expo-font";
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from "@react-navigation/stack";
import makeServer from "./server";
import {HomeScreen, MenuScreen} from "./src/screens";

const SofiaProBlack = require('./assets/fonts/SofiaPro/SofiaProBlack.otf')
const SofiaProLight = require('./assets/fonts/SofiaPro/SofiaProLight.otf')
const SofiaProSemiBold = require('./assets/fonts/SofiaPro/SofiaProSemiBold.otf')

if (process.env.NODE_ENV === "development") {
    if (window.server) {
        window.server.shutdown();
    }
    window.server = makeServer();
}


const Stack = createStackNavigator();

export default function App() {
    const [fontsLoaded] = useFonts({
        'Sofia Pro Black': SofiaProBlack,
        'Sofia Pro Light': SofiaProLight,
        'Sofia Pro Semi Bold': SofiaProSemiBold,
    });

    let Component;

    if (!fontsLoaded) {
        Component = <AppLoading/>;
    } else {
        Component = (
            <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen name="Home" component={HomeScreen} options={{headerShown: false}}/>
                    <Stack.Screen name="Menu" component={MenuScreen} options={{headerShown: false}}/>
                </Stack.Navigator>
            </NavigationContainer>
        );
    }
    return Component
}
