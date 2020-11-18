import React from "react";
import EStyleSheet from "react-native-extended-stylesheet";
import {View} from "react-native";
import {Icon, Text} from "react-native-elements";
import {useNavigation, useNavigationState} from '@react-navigation/native';

export default function Header() {
    const navigation = useNavigation()
    const state = useNavigationState(state => state);
    return (
        <View>
            {state.routes.length > 1 && <Icon
                containerStyle={styles.iconContainerStyle}
                name='arrow-left'
                type='font-awesome'
                onPress={() => navigation.goBack()}
            />}
            <Text style={styles.title}>Cardapioh</Text>
        </View>
    )
}
const styles = EStyleSheet.create({
    title: {
        height: '4rem',
        marginVertical: '1rem',
        fontFamily: '$sofiaProBlack',
        fontSize: '2.2rem',
        textAlign: "center"
    },
    iconContainerStyle: {
        position: 'absolute',
        '@media ios': {
            top: '1.25rem'
        },
        '@media android': {
            top: '2rem'
        },
        top: '1.50rem',
        left: '1rem',
        zIndex: 1,
        fontFamily: '$sofiaProBlack',
        fontSize: '5rem',
    }

})