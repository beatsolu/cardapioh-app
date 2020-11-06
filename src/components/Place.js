import React from 'react';
import {StyleSheet} from "react-native";
import {Card} from "react-native-elements";
import normalize from "react-native-normalize"


export default function Place({name, address, image}) {
    return (
        <Card containerStyle={styles.container}>
            <Card.Image source={{uri: image}}/>
            <Card.FeaturedTitle style={styles.title}>
                {name}
            </Card.FeaturedTitle>
            <Card.FeaturedSubtitle style={styles.subTitle}>
                {address}
            </Card.FeaturedSubtitle>
        </Card>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: normalize(0),
        borderWidth: normalize(1),
        borderColor: "#000000",
        fontFamily: 'Sofia Pro'
    },
    title: {
        fontFamily: 'Sofia Pro Black',
        color: 'black',
        marginTop: normalize(10, 'height'),
        marginLeft: normalize(10)
    },
    subTitle: {
        fontFamily: 'Sofia Pro Light',
        color: 'grey',
        marginLeft: normalize(10)
    }
})