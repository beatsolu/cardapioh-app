import 'react-native-gesture-handler';
import React from 'react';
import {Text} from "react-native";
import {AppLoading} from 'expo';
import {useFonts} from "expo-font";
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from "@react-navigation/stack";
import EStyleSheet from 'react-native-extended-stylesheet';
import makeServer from "./server";
import {HomeScreen, MenuScreen} from "./src/screens";
import Dimensions from "react-native-web/src/exports/Dimensions";

const SofiaProBlack = require('./assets/fonts/SofiaPro/SofiaProBlack.otf')
const SofiaProLight = require('./assets/fonts/SofiaPro/SofiaProLight.otf')
const SofiaProSemiBold = require('./assets/fonts/SofiaPro/SofiaProSemiBold.otf')

if (process.env.NODE_ENV === "development") {
    if (window.server) {
        window.server.shutdown();
    }
    window.server = makeServer();
}

EStyleSheet.build({
    $rem: Dimensions.get('window').width > 375 ? 18 : 16,
    $black: '#000000',
    $white: '#FFFFFF',
    $grey: '#8d8d8d',
    $discount: '#E2AAA9',
    $updated: '#D7E8FE',
    $sofiaProBlack: 'Sofia Pro Black',
    $sofiaProLight: 'Sofia Pro Light',
    $sofiaProSemiBold: 'Sofia Pro Semi Bold'
})

const Stack = createStackNavigator();

const config = {
    screens: {
        Home: '/',
        Menu: 'menu/:id',
    },
};

const linking = {
    prefixes: ['cardapioh://', ''],
    config,
};

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
            <NavigationContainer linking={linking} fallback={<Text>Loading...</Text>}>
                <Stack.Navigator>
                    <Stack.Screen name="Home" component={HomeScreen} options={{headerShown: false}}/>
                    <Stack.Screen name="Menu" component={MenuScreen} options={{headerShown: false}}/>
                </Stack.Navigator>
            </NavigationContainer>
        );
    }
    return Component
}
