import React, {useEffect, useState,} from "react";
import {FlatList, SafeAreaView, View} from "react-native";
import EStyleSheet from 'react-native-extended-stylesheet';
import {Icon, SearchBar} from "react-native-elements";
import {getPlaces} from "../api";
import {Header, Place} from "../components";


export default function HomeScreen({navigation, route}) {
    const [places, setPlaces] = useState()
    const [search, setSearch] = useState('')
    useEffect(() => {
        getPlaces().then(({data}) => {
            setPlaces(data.results)
        }).catch()
    }, []);

    useEffect(() => {
        console.log(search)
    }, [search])

    return (
        <SafeAreaView style={styles.safeAreaContainer}>
            <Header/>
            <View style={styles.container}>
                <SearchBar
                    value={search}
                    onChangeText={setSearch}
                    placeholder="Pesquise por local..."
                    containerStyle={styles.searchBarContainerStyle}
                    inputContainerStyle={styles.inputContainerStyle}
                    inputStyle={styles.inputStyle}
                />
                <Icon
                    name='qrcode'
                    type='font-awesome'
                    containerStyle={styles.iconContainerStyle}
                    iconStyle={styles.iconStyle}
                />
            </View>
            <FlatList
                data={places}
                renderItem={({item}) => <Place {...item} onPress={() => navigation.navigate('Menu', item)}/>}
                keyExtractor={item => item.id}
            />
        </SafeAreaView>
    );
}

const styles = EStyleSheet.create({
    safeAreaContainer: {
        flex: 1,
        backgroundColor: '$white',
    },
    container: {
        flexDirection: 'row',
    },
    searchBarContainerStyle: {
        width: '86.5%',
        marginLeft: '0.4rem',
        backgroundColor: '$white',
        borderTopWidth: 0,
        borderBottomWidth: 0
    },
    inputContainerStyle: {
        backgroundColor: '$white',
        borderColor: 'black',
        borderLeftWidth: 1,
        borderTopWidth: 1,
        borderRightWidth: 1,
        borderBottomWidth: 1,
    },
    inputStyle: {
        backgroundColor: '$white'
    },
    iconContainerStyle: {
        marginTop: '0.675rem',
        marginRight: '1.5rem',
        '@media ios': {
            marginTop: '0.9rem',
        },
        '@media android': {
            marginTop: '0.875rem',
        },
    },
    iconStyle: {
        fontSize: '2.5rem',
    },
    '@media (min-width: 750)': {
        searchBarContainerStyle: {
            width: '96%',
        }
    },

})