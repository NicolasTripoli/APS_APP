import React from 'react';
import { Text, View, StyleSheet, Dimensions } from 'react-native';

const width = Dimensions.get('window').width; //full width
const height = Dimensions.get('window').height; //full height

export default function CardChamada(props) {

    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>{props.titulo}</Text>
            <Text style={styles.descricao}>{props.descricao}</Text>
            <Text style={styles.data}>{props.data}</Text>
        </View>
    );
}



const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
        borderRadius: 30,
        borderWidth: 0.5,
        borderColor: '#d6d7da',
        width: width * 0.95,
        height: height * 0.2,
        alignSelf: 'center',
        padding: 0,
        marginBottom: 20,
    },
    titulo: {
        flex: 1,
        alignSelf: 'center',
        fontSize: 20,
    },
    descricao: {
        flex: 1,
        alignSelf: 'center',
        margin: 10,
        fontSize: 12,
    },
    data: {
        flex: 1,
        fontSize: 15,
        marginRight: 20,
        alignSelf: 'flex-end',
        justifyContent: "flex-end",
    },
});