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

export default class AdicionarChamado3 extends React.Component {

    constructor() {
        super()
        this.state = {
            props,
            titulo: "",
            tags: []
        }
        this.SalvarChamado = this.SalvarChamado.bind(this)
    }

    SalvarChamado() {
        console.log('Inicio axios')
        axios.post('http://192.168.15.11:8080/chamado', {
            "idAutor": this.state.idAutor,
            "titulo": this.state.titulo,
            "descricao": this.state.descricao,
            "tipo": this.state.tipo,
            "cep": this.state.cep,
            "tagsRegional": this.state.tags
        })
            .then(function (response) {
                if(response.data.status == 200){
                    navigate('Abertos')
                }else{
                    this.setState({text: "Não foi possivel concluir o Chamado"})
                }
            });
    }

    NovaTag() {
        var tags = this.state.tags
        tags.push(this.state.titulo)
        this.setState({ tags })
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.titulo}>
                    Qual é o seu Problema?
                </Text>
                <TextInput
                    style={{ height: 40 }}
                    placeholder="Titulo"
                    onChangeText={(titulo) => this.setState({ titulo })}
                    value={this.state.titulo}
                />
                <Button
                    title="Adicionar"
                    onPress={() => this.NovaTag()}
                />
                <ScrollView
                    style={styles.container}
                    contentContainerStyle={styles.contentContainer}
                >
                    {this.state.tags}
                </ScrollView>
                <Button
                    title="<-"
                    onPress={() => navigate('AdicionarChamado2')}
                />
                <Button
                    title="->"
                    onPress={() => SalvarChamado()}
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
