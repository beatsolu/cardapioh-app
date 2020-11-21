import React from "react";
import {Image, Text, View} from "react-native";
import EStyleSheet from "react-native-extended-stylesheet";

export default function NotFound() {

    return (
        <View style={styles.container}>
            <Image source={require('../../assets/img/notFound/notFound.png')}/>
            <Text style={styles.title}>O que está procurando?</Text>
        </View>)
}

const styles = EStyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center'
    },
    title: {
        fontSize: '0.937rem',
        color: '$black',
        fontFamily: '$sofiaProBlack',
        marginTop: '0.625rem',
    },

})