import React from "react";
import {Image, View, Text} from "react-native";
import EStyleSheet from "react-native-extended-stylesheet";
import Updated from "./Updated";

export default function HeaderMenu({place}) {
    return (
        <View style={styles.container}>
            <Image source={{uri: place.image}} style={styles.image}/>
            <Updated modified={place.modified}/>
            <Text style={styles.title}>{place.name}</Text>
            <Text style={styles.subTitle}>{place.address}</Text>
        </View>
    )
}

const styles = EStyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '$white',
    },
    image: {
        width: '100%',
        height: '12.5rem'
    },
    title: {
        fontFamily: '$sofiaProBlack',
        fontSize: '1.562rem',
        color: '$black',
        marginTop: '0.625rem',
        marginLeft: '0.625rem',
    },
    subTitle: {
        fontFamily: '$sofiaProLight',
        fontSize: '0.937rem',
        color: 'grey',
        marginVertical: '0.625rem',
        marginLeft: '0.625rem'
    },
    header: {
        paddingVertical: '0.937rem',
        marginLeft: '0.75rem',
        fontFamily: '$sofiaProBlack',
        fontSize: '1.25rem',
        backgroundColor: "$white"
    }

})