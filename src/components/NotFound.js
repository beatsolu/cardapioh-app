import React from "react";
import {Image, Text, View} from "react-native";
import EStyleSheet from "react-native-extended-stylesheet";

export default function NotFound() {

    return (
        <View style={styles.container}>
            <Image source={require('../../assets/img/notFound/notFound.png')}/>
            <Text style={styles.title}>Não temos o que está procurando!</Text>
            <Text style={styles.subTitle}>We don't have what you're looking for!</Text>
        </View>)
}

const styles = EStyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center'
    },
    title: {
        marginTop: '0.625rem',
        fontSize: '0.937rem',
        color: '$black',
        fontFamily: '$sofiaProBlack',
    },
    subTitle: {
        marginTop: '0.2rem',
        color: '$grey',
        fontFamily: '$sofiaProLight',
    },

})