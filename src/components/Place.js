import React from 'react';
import {StyleSheet, TouchableOpacity} from "react-native";
import {Badge, Card, Text} from "react-native-elements";
import normalize from "react-native-normalize";


export default function Place({name, address, image, modified, onPress}) {
    return (
      <TouchableOpacity onPress={onPress}>
        <Card containerStyle={styles.container}>
          <Card.Image source={{uri: image}} />
          <Badge
            textStyle={styles.badgeTextStyle}
            badgeStyle={styles.badgeStyle}
            containerStyle={styles.badgeContainerStyle}
            value={`Atualizado em: ${modified}`}
          />
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

const styles = StyleSheet.create({
    container: {
        padding: normalize(0),
        borderWidth: 1,
        borderColor: "#000000",
    },
    innerContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between'
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
        marginLeft: normalize(-180)
    }
})