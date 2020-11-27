import React, {useEffect, useRef, useState} from "react";
import {SafeAreaView, SectionList, View} from "react-native";
import EStyleSheet from "react-native-extended-stylesheet";
import {SearchBar, Text} from "react-native-elements";
import {getMenu, searchItem} from "../api";
import {Header, HeaderMenu, ItemMenu, NotFound} from "../components";
import {useDebouncedEffect} from "../hooks";


export default function MenuScreen({route}) {
    const searchRef = useRef()
    const [place, setPlace] = useState(null)
    const [sections, setSections] = useState(null)
    const [search, setSearch] = useState(null)

    useEffect(() => {
        _getMenu()
    }, [])

    useDebouncedEffect(() => {
        if (search) {
            _search()
        }
    }, 500, [search])

    function normalizeItems(data) {
        let sections = [{data: []}]
        if (data) {
            const isEmpty = !data.length;
            const results = data.length;
            const plural = (word) => `${word}${results > 1 ? 's:' : ':'} ${results}`
            if (isEmpty) {
                sections = []
            } else {
                sections = [{
                    name: plural('Encontrado'),
                    sub_name: plural('Found'),
                    data
                }]
            }
        }
        setSections(sections);
    }

    function _getMenu() {
        getMenu(route.params.slug).then(({data}) => {
            setPlace(data)
            setSections(data.sections)
        })
    }


    function _search() {
        searchItem(place.id, search).then(({data}) => {
            normalizeItems(data)
        })

    }

    function handleOnFocus() {
        normalizeItems()
    }

    function handleOnBlur() {
        !search && _getMenu()
    }

    function handleOnClear() {
        _getMenu()
    }

    return (
        <SafeAreaView style={styles.safeAreaContainer}>
            <Header/>
            <SearchBar
                ref={searchRef}
                value={search}
                onFocus={handleOnFocus}
                onBlur={handleOnBlur}
                onClear={handleOnClear}
                returnKeyType={"done"}
                onChangeText={setSearch}
                placeholder="Pesquise por itens..."
                containerStyle={styles.searchBarContainerStyle}
                inputContainerStyle={styles.inputContainerStyle}
                inputStyle={styles.inputStyle}
            />
            {sections && <SectionList
                sections={sections}
                keyExtractor={(item, index) => index}
                ListEmptyComponent={<NotFound/>}
                ListHeaderComponent={!search && sections[0].data.length > 0 && <HeaderMenu place={place}/>}
                renderItem={({item}) => <ItemMenu {...item} />}
                renderSectionHeader={({section}) => (
                    <View>
                        <Text style={styles.header}>{section.name}</Text>
                        <Text style={styles.headerEnglish}>{section.sub_name}</Text>
                    </View>
                )}
                stickySectionHeadersEnabled
            />}
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
        marginVertical: '0.375rem',
        marginBottom: '0.625rem',
        backgroundColor: '$white',
        borderTopWidth: 0,
        borderBottomWidth: 0
    },
    inputContainerStyle: {
        backgroundColor: '$white',
        borderColor: '$black',
        borderLeftWidth: 1,
        borderTopWidth: 1,
        borderRightWidth: 1,
        borderBottomWidth: 1,
    },
    inputStyle: {
        backgroundColor: '$white'
    },
    header: {
        paddingVertical: '0.1rem',
        marginLeft: '0.75rem',
        fontFamily: '$sofiaProBlack',
        fontSize: '0.937rem',
        backgroundColor: "$white"
    },
    headerEnglish: {
        paddingBottom: '0.5rem',
        marginLeft: '0.75rem',
        fontFamily: '$sofiaProLight',
        fontSize: '0.7rem',
        backgroundColor: "$white"
    },
    overlayStyle: {
        width: '22rem'
    }

})
