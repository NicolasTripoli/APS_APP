import * as WebBrowser from 'expo-web-browser';
import React from 'react';
import {
    Platform,
    ScrollView,
    StyleSheet,
    View,
} from 'react-native';
import CardChamada from '../components/cardChamada.js'
import axios from 'axios';

export default class AdicionarChamado1 extends React.Component {

    constructor() {
        super()
        this.state = {
            idAutor: this.props.Usuario,
            titulo: "",
            descricao: "",
            tipo: "",
            cep: "",
            tagsRegional: []
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.titulo}>
                    Qual é o seu Problema?
                </Text>
                    <Button
                        title="Local"
                        onPress={() => navigate('AdicionarChamado2',"Local")}
                    />
                    <Button
                        title="Veiculo"
                        onPress={() => navigate("AdicionarChamado2","Veiculo")}
                    />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#20DB46',
    },
    card: {
        flex: 1,
        alignSelf: 'center',
    },
    developmentModeText: {
        marginBottom: 20,
        color: 'rgba(0,0,0,0.4)',
        fontSize: 14,
        lineHeight: 19,
        textAlign: 'center',
    },
    contentContainer: {
        paddingTop: 30,
    },
    welcomeContainer: {
        alignItems: 'center',
        marginTop: 10,
        marginBottom: 20,
    },
    welcomeImage: {
        width: 100,
        height: 80,
        resizeMode: 'contain',
        marginTop: 3,
        marginLeft: -10,
    },
    getStartedContainer: {
        alignItems: 'center',
        marginHorizontal: 50,
    },
    homeScreenFilename: {
        marginVertical: 7,
    },
    codeHighlightText: {
        color: 'rgba(96,100,109, 0.8)',
    },
    codeHighlightContainer: {
        backgroundColor: 'rgba(0,0,0,0.05)',
        borderRadius: 3,
        paddingHorizontal: 4,
    },
    getStartedText: {
        fontSize: 17,
        color: 'rgba(96,100,109, 1)',
        lineHeight: 24,
        textAlign: 'center',
    },
    tabBarInfoContainer: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        ...Platform.select({
            ios: {
                shadowColor: 'black',
                shadowOffset: { width: 0, height: -3 },
                shadowOpacity: 0.1,
                shadowRadius: 3,
            },
            android: {
                elevation: 20,
            },
        }),
        alignItems: 'center',
        backgroundColor: '#fbfbfb',
        paddingVertical: 20,
    },
    tabBarInfoText: {
        fontSize: 17,
        color: 'rgba(96,100,109, 1)',
        textAlign: 'center',
    },
    navigationFilename: {
        marginTop: 5,
    },
    helpContainer: {
        marginTop: 15,
        alignItems: 'center',
    },
    helpLink: {
        paddingVertical: 15,
    },
    helpLinkText: {
        fontSize: 14,
        color: '#2e78b7',
    },
});
