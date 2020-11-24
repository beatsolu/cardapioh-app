import {FlatList, View} from "react-native";
import {Text} from "react-native-elements";
import React from "react";
import EStyleSheet from "react-native-extended-stylesheet";

export default function Price({discount, prices}) {
    function renderItem({item}) {
        const price = parseFloat(item.value)
        return (
            <View>
                {item.label && <Text style={styles.price}>{item.label}</Text>}
                 <Text style={[styles.price, discount && styles.priceDiscount]}>
                    {`R$ ${price.toFixed(2)}`}
                </Text>
                {discount && (
                    <Text style={styles.price}>
                        {`R$ ${(price - (price * discount) / 100).toFixed(2)}`}
                    </Text>
                )}
            </View>
        )
    }

    return (
        <FlatList
            style={{flex: 1}}
            horizontal
            data={prices}
            keyExtractor={(item, index) => index.toString()}
            renderItem={renderItem}
            ItemSeparatorComponent={() => (<Text style={styles.price}>|</Text>)}
        />
    )
}

const styles = EStyleSheet.create({
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
    }
})