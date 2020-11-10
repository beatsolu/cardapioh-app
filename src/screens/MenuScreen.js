import React, {useEffect, useState,} from "react";
import {Platform, SafeAreaView, SectionList, StyleSheet, View} from "react-native";
import {Icon, SearchBar, Text} from "react-native-elements";
import normalize from "react-native-normalize";
import {getMenu} from "../api";
import {HeaderMenu, ItemMenu} from "../components";

export default function MenuScreen({navigation, route}) {
    const place = route.params;
    const [menu, setMenu] = useState()
    const [search, setSearch] = useState('')
    useEffect(() => {
        getMenu(place.id).then(({data}) => {
            setMenu(data.results)
        }).catch()
    }, []);

    useEffect(() => {
        console.log(search)
    }, [search])


    return (
      <SafeAreaView style={styles.container}>
        <View style={{flexDirection: 'row'}}>
          <Icon
            iconStyle={styles.iconTitle}
            name='arrow-left'
            type='font-awesome'
            onPress={() => navigation.navigate('Home')}
          />
          <Text style={styles.title}>Cardapioh</Text>
        </View>
        <SearchBar
          value={search}
          onChangeText={setSearch}
          placeholder="Pesquise por itens..."
          containerStyle={styles.searchBarContainerStyle}
          inputContainerStyle={styles.inputContainerStyle}
          inputStyle={styles.inputStyle}
        />

        <SectionList
          sections={menu}
          keyExtractor={(item, index) => index}
          onEndReached={(info) => console.log(info)}
          onEndReachedThreshold={0}
          ListHeaderComponent={<HeaderMenu place={place} />}
          renderItem={({item}) => <ItemMenu {...item} detail={false} />}
          renderSectionHeader={({section}) => (
            <Text style={styles.header}>{section.category}</Text>
                )}
          stickySectionHeadersEnabled
        />
      </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff',
    },
    title: {
        height: normalize(50, 'height'),
        marginLeft: normalize(68),
        marginVertical: normalize(15, 'height'),
        fontFamily: 'Sofia Pro Black',
        fontSize: normalize(35),
    },
    iconTitle: {
        ...Platform.select({
            'ios': {marginTop: normalize(20, "height")},
            'android': {marginTop: normalize(35, "height")}
        }),
        marginLeft: normalize(15),
        fontFamily: 'Sofia Pro Black',
        fontSize: normalize(20),
        textAlign: "center"
    },
    searchBarContainerStyle: {
        width: normalize(360),
        marginLeft: normalize(6),
        marginBottom: normalize(10),
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
    header: {
        paddingVertical: normalize(15),
        marginLeft: normalize(12),
        fontFamily: 'Sofia Pro Black',
        fontSize: normalize(15),
        backgroundColor: "#fff"
    }

})
