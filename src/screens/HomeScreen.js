import React, {useEffect, useState,} from "react";
import {FlatList, SafeAreaView, StyleSheet, View} from "react-native";
import {getPlaces} from "../api";
import {Place} from "../components";
import {Icon, SearchBar, Text} from "react-native-elements";
import normalize from "react-native-normalize";

export default function HomeScreen({navigation, route}) {
    const [places, setPlaces] = useState()
    useEffect(() => {
        getPlaces().then(({data}) => {
            setPlaces(data)
        }).catch()
    }, []);

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.title}>
                Cardapioh
            </Text>
            <View style={styles.innerContainer}>
                <SearchBar
                    containerStyle={styles.searchBarContainerStyle}
                    inputContainerStyle={styles.inputContainerStyle}
                    inputStyle={styles.inputStyle}/>
                <Icon
                    name='qrcode'
                    type='font-awesome'
                    containerStyle={styles.iconContainerStyle}
                    iconStyle={styles.iconStyle}
                />
            </View>
            <FlatList
                data={places}
                renderItem={({item}) => <Place {...item}/>}
                keyExtractor={item => item.id}
            />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff',
    },
    innerContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    title: {
        height: normalize(50,'height'),
        marginVertical: normalize(15, 'height'),
        fontFamily: 'Sofia Pro Black',
        fontSize: normalize(35),
        textAlign: "center"
    },
    searchBarContainerStyle: {
        width: normalize(300),
        marginLeft: normalize(6),
        backgroundColor: '#ffffff',
        borderTopWidth: 0,
        borderBottomWidth: 0
    },
    inputContainerStyle: {
        backgroundColor: '#ffffff',
        borderColor: 'black',
        borderLeftWidth: 1,
        borderTopWidth: 1,
        borderRightWidth: 1,
        borderBottomWidth: 1,
    },
    inputStyle: {
        backgroundColor: '#ffffff'
    },
    iconContainerStyle: {
        marginTop: normalize(12),
        marginRight: normalize(25)
    },
    iconStyle: {
        fontSize: 40
    }

})