import React from "react";
import {Text} from "react-native";
import EStyleSheet from "react-native-extended-stylesheet";

export default function Updated({modified}) {
    return (
        <Text style={styles.textStyle}>
            {`Atualizado em: ${modified}`}
        </Text>
    )
}

const styles = EStyleSheet.create({
    textStyle: {
        width: '8.5rem',
        height: '1.25rem',
        paddingTop: '0.1rem',
        paddingLeft: '0.5rem',
        marginTop: '0.5rem',
        marginLeft: '0.5rem',
        borderRadius: 10,
        color: '$black',
        backgroundColor: '$updated',
        fontSize: '0.625rem',
        fontFamily: '$sofiaProSemiBold',
        overflow: 'hidden'
    }

})