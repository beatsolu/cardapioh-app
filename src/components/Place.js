import React from 'react';
import {TouchableOpacity} from "react-native";
import {Card, Text} from "react-native-elements";
import EStyleSheet from "react-native-extended-stylesheet";
import Updated from "./Updated";


export default function Place({name, address, image, modified, onPress}) {
    return (
        <TouchableOpacity onPress={onPress}>
            <Card containerStyle={styles.container}>
                <Card.Image source={{uri: image}}/>
                <Updated modified={modified}/>
                <Card.FeaturedTitle style={styles.title}>
                    <Text style={styles.title}>{name}</Text>
                </Card.FeaturedTitle>
                <Card.FeaturedSubtitle style={styles.subTitle}>
                    <Text style={styles.subTitle}>{address}</Text>
                </Card.FeaturedSubtitle>
            </Card>
        </TouchableOpacity>

    )
}

const styles = EStyleSheet.create({
    container: {
        padding: 0,
        borderWidth: 1,
        borderColor: "$black",
    },
    innerContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between'
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
    }
})