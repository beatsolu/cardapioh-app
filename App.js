import 'react-native-gesture-handler';
import React, {useState} from 'react';
import {Dimensions} from "react-native";
import {useFonts} from "expo-font";
import EStyleSheet from 'react-native-extended-stylesheet';
import {SplashScreen} from "./src/screens";
import Navigation from "./src/navigation";
import {useAssets} from "expo-asset";

const SofiaProBlack = require('./assets/fonts/SofiaPro/SofiaProBlack.otf')
const SofiaProLight = require('./assets/fonts/SofiaPro/SofiaProLight.otf')
const SofiaProSemiBold = require('./assets/fonts/SofiaPro/SofiaProSemiBold.otf')


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


export default function App() {
    const [isLoaded, setIsLoaded] = useState(false)
    useAssets([
        require('./assets/img/notFound/notFound.png')
    ])
    useFonts({
        'Sofia Pro Black': SofiaProBlack,
        'Sofia Pro Light': SofiaProLight,
        'Sofia Pro Semi Bold': SofiaProSemiBold,
    });
    let Component;
    if (!isLoaded) {
        Component = <SplashScreen onAnimationFinish={() => setIsLoaded(true)}/>;
    } else {
        Component = <Navigation/>
    }
    return Component
}
