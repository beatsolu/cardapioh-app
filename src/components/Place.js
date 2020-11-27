import React from 'react';
import {TouchableOpacity} from "react-native";
import {Card, Text} from "react-native-elements";
import EStyleSheet from "react-native-extended-stylesheet";
import * as Linking from 'expo-linking';
import Updated from "./Updated";


export default function Place({name, address, phone, image, modified, onPress}) {
    return (
        <TouchableOpacity onPress={onPress}>
            <Card containerStyle={styles.container}>
                <Card.Image style={styles.image} source={{uri: image}}/>
                <Updated modified={modified}/>
                <Card.FeaturedTitle style={styles.title}>
                    <Text style={styles.title}>{name}</Text>
                </Card.FeaturedTitle>
                <Card.FeaturedSubtitle style={styles.subTitle}>
                    <Text style={styles.subTitle}>{address} -
                        <Text style={styles.phone} onPress={() => Linking.openURL(`tel:${phone}`)}> {phone}</Text>
                    </Text>
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
    phone: {
        fontFamily: '$sofiaProBlack',
        fontSize: '0.937rem',
        color: '$black',
        marginVertical: '0.625rem',
        marginLeft: '0.625rem'
    },
    image: {
        height: '18.75rem'
    }

})