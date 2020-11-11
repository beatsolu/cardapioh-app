import React from 'react';
import {StyleSheet, TouchableOpacity, View} from "react-native";
import {Badge, Card, Icon, Text} from "react-native-elements";
import normalize from "react-native-normalize";
import EStyleSheet from "react-native-extended-stylesheet";

export default function ItemMenu({code, name, description, price, discount, image, detail = true, onPress}) {
    return (
        <TouchableOpacity onPress={image && onPress}>
            <Card containerStyle={styles.container}>
                {detail &&
                <Icon
                    name="close"
                    type="font-awesome"
                    color="#fff"
                    containerStyle={styles.iconContainerStyle}
                />}
                {detail && image && <Card.Image style={styles.image} source={{uri: image}}/>}
                <View style={styles.innerContainer}>
                    <Card.FeaturedTitle style={styles.title}>
                        <Text style={styles.title}>
                            {`${code}. ${name}`}
                        </Text>
                    </Card.FeaturedTitle>
                    {discount && (
                        <Badge
                            textStyle={styles.badgeTextStyle}
                            badgeStyle={styles.badgeStyle}
                            containerStyle={styles.badgeContainerStyle}
                            value={`- ${discount}%`}
                        />
                    )}
                </View>
                <Card.FeaturedSubtitle style={styles.subTitle}>
                    <Text style={styles.subTitle}>
                        {description}
                    </Text>
                </Card.FeaturedSubtitle>
                <View style={styles.priceContainer}>
                    <Text style={[styles.price, discount && styles.priceDiscount]}>
                        {`R$ ${price.toFixed(2)}`}
                    </Text>
                    {discount && (
                        <Text style={styles.price}>
                            {`R$ ${(price - (price * discount) / 100).toFixed(2)}`}
                        </Text>
                    )}
                </View>
            </Card>
        </TouchableOpacity>
    )
}

const styles = EStyleSheet.create({
    container: {
        padding: 0,
        borderWidth: 1,
        borderColor: "$black",
        marginBottom: '1rem'
    },
    iconContainerStyle: {
        position: "absolute",
        zIndex: 1,
        right: 5
    },
    image:{
        height: '11.25rem',
    },
    title: {
        color: 'black',
        fontFamily: '$sofiaProBlack',
        marginTop: '0.625rem',
        marginLeft: '0.625rem',
    },
    innerContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    subTitle: {
        color: '$grey',
        fontFamily: '$sofiaProLight',
        marginLeft: '0.625rem',
        marginVertical: '0.187rem'

    },
    price: {
        color: '$black',
        fontFamily: '$sofiaProBlack',
        marginLeft: '0.625rem',
        marginVertical: '0.187rem'
    },
    priceContainer: {
        flexDirection: 'row'
    },
    priceDiscount: {
        textDecorationLine: 'line-through',
        color: '$grey',
        fontSize: '0.75rem'
    },
    badgeContainerStyle: {
        marginTop: '0.625rem',
        marginRight: '0.625rem',
    },
    badgeStyle: {
        width: '3.187rem',
        height: '1.437rem',
        backgroundColor: '$discount',
        borderRadius: '1.25rem'
    },
    badgeTextStyle: {
        color: '$black',
        fontSize: '0.937rem',
        fontFamily: '$sofiaProBlack',
        marginVertical: '0.3rem',
    }
})