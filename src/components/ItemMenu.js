import React from 'react';
import {StyleSheet, TouchableOpacity, View} from "react-native";
import {Badge, Card, Icon, Text} from "react-native-elements";
import normalize from "react-native-normalize";

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
                {detail && image && <Card.Image style={{height: normalize(180, 'height')}} source={{uri: image}}/>}
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

const styles = StyleSheet.create({
    container: {
        padding: 0,
        borderWidth: 1,
        borderColor: "#000000",
        fontFamily: 'Sofia Pro Black'
    },
    iconContainerStyle: {
        position: "absolute",
        zIndex: 1,
        right: 5
    },
    title: {
        color: 'black',
        fontFamily: 'Sofia Pro Black',
        marginTop: normalize(10, 'height'),
        marginLeft: normalize(10),
    },
    innerContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    subTitle: {
        color: 'grey',
        fontFamily: 'Sofia Pro Light',
        marginLeft: normalize(10),
        marginVertical: normalize(3, 'height'),

    },
    price: {
        color: 'black',
        fontFamily: 'Sofia Pro Black',
        marginLeft: normalize(10),
        marginVertical: normalize(3, 'height'),
    },
    priceContainer: {
        flexDirection: 'row'
    },
    priceDiscount: {
        textDecorationLine: 'line-through',
        color: 'grey',
        fontSize: normalize(12)
    },
    badgeContainerStyle: {
        marginTop: normalize(10, 'height'),
        marginRight: normalize(10),
    },
    badgeStyle: {
        width: normalize(51),
        height: normalize(23),
        backgroundColor: '#E2AAA9',
        borderRadius: normalize(20)
    },
    badgeTextStyle: {
        color: '#000000',
        fontSize: normalize(15),
        fontFamily: 'Sofia Pro Black',
        marginVertical: normalize(5),
    }
})