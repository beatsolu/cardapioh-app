import React from 'react';
import {TouchableOpacity, View} from "react-native";
import {Card, Text} from "react-native-elements";
import EStyleSheet from "react-native-extended-stylesheet";

export default function ItemMenu({code, name, description, description_english, price, discount, image, detail = true, onPress}) {
    price = parseFloat(price)
    return (
        <TouchableOpacity onPress={onPress}>
            <Card containerStyle={styles.container}>
                {detail && image && <Card.Image style={styles.image} source={{uri: image}}/>}
                <Text style={styles.title}>
                    {`${code}. ${name}`}
                </Text>
                <Text style={styles.subTitle}>
                    {description}
                </Text>
                <Text style={styles.subTitleEnglish}>
                    {description_english}
                </Text>
                <View style={styles.priceContainer}>
                    <Text style={[styles.price, discount && styles.priceDiscount]}>
                        {`R$ ${price.toFixed(2)}`}
                    </Text>
                    {discount && (
                        <Text style={styles.price}>
                            {`R$ ${(price - (price * discount) / 100).toFixed(2)}`}
                        </Text>
                    )}
                    {discount && <Text style={styles.discountStyle}>{`-${discount}%`}</Text>}
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
    image: {
        height: '11.25rem',
    },
    innerContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    title: {
        fontSize: '0.937rem',
        color: '$black',
        fontFamily: '$sofiaProBlack',
        marginTop: '0.625rem',
        marginLeft: '0.625rem',
        marginBottom: '0.5rem',
    },
    subTitle: {
        marginLeft: '0.8rem',
        marginBottom: '0.5rem',
        color: '$grey',
        fontFamily: '$sofiaProLight',
    },
    subTitleEnglish: {
        marginLeft: '0.8rem',
        marginBottom: '0.5rem',
        color: '$grey',
        fontFamily: '$sofiaProBlack',
    },
    price: {
        color: '$black',
        fontFamily: '$sofiaProBlack',
        marginLeft: '0.625rem',
        marginVertical: '0.187rem'
    },
    priceContainer: {
        flexDirection: 'row',
    },
    priceDiscount: {
        textDecorationLine: 'line-through',
        color: '$grey',
        fontSize: '0.75rem'
    },
    discountStyle: {
        position: 'absolute',
        right: '0.2rem',
        bottom: '0.2rem',
        width: '2.8rem',
        height: '1.1rem',
        paddingTop: '0.185rem',
        paddingLeft: '0.4rem',
        includeFontPadding: false,
        textAlignVertical: 'center',
        backgroundColor: '$discount',
        borderRadius: 10,
        color: '$black',
        fontSize: '0.937rem',
        fontFamily: '$sofiaProBlack',
        overflow: 'hidden'
    }
})