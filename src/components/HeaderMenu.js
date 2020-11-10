import React from "react";
import {Image, StyleSheet, View} from "react-native";
import {Badge, Text} from "react-native-elements";
import normalize from "react-native-normalize";

export default function HeaderMenu({place}) {
    return (
      <View style={styles.container}>
        <Image source={{uri: place.image}} style={styles.image} />
        <Badge
          textStyle={styles.badgeTextStyle}
          badgeStyle={styles.badgeStyle}
          containerStyle={styles.badgeContainerStyle}
          value={`Atualizado em: ${place.modified}`}
        />
        <Text style={styles.title}>{place.name}</Text>
        <Text style={styles.subTitle}>{place.address}</Text>
      </View>
)
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff',
    },
    image: {
        width: normalize(500),
        height: normalize(200, 'height')
    },
    title: {
        fontFamily: 'Sofia Pro Black',
        fontSize: normalize(25),
        color: 'black',
        marginTop: normalize(10, 'height'),
        marginLeft: normalize(10)
    },
    subTitle: {
        fontFamily: 'Sofia Pro Light',
        fontSize: normalize(15),
        color: 'grey',
        marginVertical: normalize(10, 'height'),
        marginLeft: normalize(10)
    },
    header: {
        paddingVertical: normalize(15),
        marginLeft: normalize(12),
        fontFamily: 'Sofia Pro Black',
        fontSize: normalize(20),
        backgroundColor: "#fff"
    },
    badgeStyle: {
        width: normalize(150),
        height: normalize(20, 'height'),
        backgroundColor: '#D7E8FE',
        borderRadius: normalize(20)
    },
    badgeTextStyle: {
        color: '#000000',
        fontSize: normalize(10),
        fontFamily: 'Sofia Pro Semi Bold',
    },
    badgeContainerStyle: {
        marginTop: normalize(10, 'height'),
        marginLeft: normalize(-210)
    }

})