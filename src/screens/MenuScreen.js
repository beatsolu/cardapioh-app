import React, {useRef, useState} from "react";
import {Modal, Platform, SafeAreaView, SectionList, View} from "react-native";
import EStyleSheet from "react-native-extended-stylesheet";
import {Overlay, SearchBar, Text} from "react-native-elements";
import ModalWeb from 'modal-react-native-web'
import {getMenu, searchItem} from "../api";
import {Header, HeaderMenu, ItemMenu, NotFound} from "../components";
import {useDebouncedEffect} from "../hooks";


export default function MenuScreen({route}) {
    const searchRef = useRef()
    const [place, setPlace] = useState({})
    const [sessions, setSessions] = useState()
    const [overlay, setOverlay] = useState({})
    const [search, setSearch] = useState()

    function normalizeSessions(data) {
        const isEmpty = !data.length;
        const results = data.length;
        const plural = (word) => `${word}${results > 1 ? 's:' : ':'} ${results}`
        let sessions;
        if (isEmpty) {
            sessions = []
        } else {
            sessions = [{
                name: plural('Encontrado'),
                name_english: plural('Found'),
                data
            }]
        }
        return sessions;
    }

    useDebouncedEffect(() => {
        if (search) {
            searchItem(route.params.id, search).then(({data}) => {
                setSessions(normalizeSessions(data, search))
                searchRef.current.blur()
            })
        } else {
            getMenu(route.params.id).then(({data}) => {
                setPlace(data)
                setSessions(data.sessions)
            })
        }
    }, 300, [search])
    return (
        <SafeAreaView style={styles.safeAreaContainer}>
            <Header/>
            <SearchBar
                ref={searchRef}
                value={search}
                onFocus={() => setSessions([{data:[]}])}
                onClear={() => searchRef.current.blur()}
                onChangeText={setSearch}
                placeholder="Pesquise por itens..."
                containerStyle={styles.searchBarContainerStyle}
                inputContainerStyle={styles.inputContainerStyle}
                inputStyle={styles.inputStyle}
            />
            {sessions && <SectionList
                sections={sessions}
                keyExtractor={(item, index) => index}
                ListEmptyComponent={<NotFound/>}
                ListHeaderComponent={!search && sessions.length > 1 && <HeaderMenu place={place}/>}
                renderItem={({item}) => (
                    <View>
                        <ItemMenu {...item} detail={false} onPress={() => setOverlay({[item.name]: true})}/>
                        <Overlay
                            overlayStyle={styles.overlayStyle}
                            ModalComponent={Platform.OS === 'web' ? ModalWeb : Modal}
                            isVisible={overlay[item.name] || false}
                            onBackdropPress={() => setOverlay({[item.name]: false})}
                        >
                            <ItemMenu {...item} />
                        </Overlay>
                    </View>
                )}
                renderSectionHeader={({section}) => (
                    <View>
                        <Text style={styles.header}>{section.name}</Text>
                        <Text style={styles.headerEnglish}>{section.name_english}</Text>
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
