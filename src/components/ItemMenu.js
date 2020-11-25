import React from 'react';
import {View} from "react-native";
import {Card, Text} from "react-native-elements";
import EStyleSheet from "react-native-extended-stylesheet";
import Price from "./Price";

export default function ItemMenu({code, name, description, sub_description, prices, discount, image}) {
    return (
        <Card containerStyle={styles.container}>
            {image && <Card.Image style={styles.image} source={{uri: image}}/>}
            <Text style={styles.title}>
                {`${code ? `${code}.` : ''} ${name}`}
            </Text>
            {!!description && <Text style={styles.subTitle}> {description}</Text>}
            {!!sub_description && <Text style={styles.subTitleEnglish}> {sub_description} </Text>}
            <View style={styles.priceContainer}>
                <Price discount={discount} prices={prices}/>
                {discount && <Text style={styles.discountStyle}>{`-${discount}%`}</Text>}
            </View>
        </Card>
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
    discountStyle: {
        position: 'absolute',
        right: '0.2rem',
        bottom: '0.2rem',
        width: '2.8rem',
        height: '1.1rem',
        '@media ios': {
            paddingTop: '0.185rem',
        },
        '@media android': {
            paddingTop: '0.15rem',
        },
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