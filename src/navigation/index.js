import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from "@react-navigation/stack";
import {HomeScreen} from "../screens";
import MenuScreen from "../screens/MenuScreen";


const Stack = createStackNavigator();

const config = {
    screens: {
        Home: '/',
        Cardapioh: 'menu/:id/',
    },
};

const linking = {
    prefixes: ['cardapioh://', ''],
    config,
};

export default function Navigation() {
    return (
        <NavigationContainer linking={linking}>
            <Stack.Navigator>
                <Stack.Screen name="Home" component={HomeScreen} options={{headerShown: false}}/>
                <Stack.Screen name="Cardapioh" component={MenuScreen} options={{headerShown: false}}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}