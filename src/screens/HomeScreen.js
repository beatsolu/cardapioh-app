import React, {useEffect, useState,} from "react";
import {FlatList, SafeAreaView} from "react-native";
import EStyleSheet from 'react-native-extended-stylesheet';
import {SearchBar} from "react-native-elements";
import {getPlaces} from "../api";
import {Header, Place} from "../components";


export default function HomeScreen({navigation}) {
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
            <SearchBar
                value={search}
                onChangeText={setSearch}
                placeholder="Pesquise por local..."
                containerStyle={styles.searchBarContainerStyle}
                inputContainerStyle={styles.inputContainerStyle}
                inputStyle={styles.inputStyle}
            />
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
    searchBarContainerStyle: {
        width: '100%',
        marginLeft: '0.4rem',
        backgroundColor: '$white',
        borderTopWidth: 0,
        borderBottomWidth: 0
    },
    inputContainerStyle: {
        marginRight: '0.8rem',
        backgroundColor: '$white',
        borderColor: 'black',
        borderLeftWidth: 1,
        borderTopWidth: 1,
        borderRightWidth: 1,
        borderBottomWidth: 1,
    },
    inputStyle: {
        backgroundColor: '$white'
    }
})