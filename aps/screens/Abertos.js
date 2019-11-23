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

export default class HomeScreen extends React.Component {

  constructor() {
    super()
    this.state = {
      chamados: [],
      pagesTotal: 0,
      pageAtual: 0,
      keys: [],
    }
    this.api = this.api.bind(this)
  }

  api() {
    console.log('Inicio axios')
    var pagesTotal = this.state.pagesTotal
    var pageAtual = this.state.pageAtual
    var chamados = this.state.chamados
    var keys = this.state.keys
    axios.get('http://192.168.15.11:8080/chamado/status/ABERTO?size=5&page=' + pageAtual)
      .then(response => {

        var resposta = response.data.content;
        for (var x = 0; x < resposta.length; x++) {
          keys.push(resposta[x].id)
          var data = resposta[x].dataAbertura.split('T')[0]
          data = data.split('-')[2] + '/' + data.split('-')[1] + '/' + data.split('-')[0]
          chamados.push(<CardChamada style={styles.card} key={resposta[x].id} titulo={resposta[x].titulo_Chamado} descricao={resposta[x].descricao_Chamado} data={data} />)
        }

        pagesTotal = response.data.totalPages;
        pageAtual++;

        this.setState({ chamados, pagesTotal, pageAtual, keys })
        console.log(pageAtual)
        console.log(pagesTotal)
        console.log(keys)
        if (pageAtual < (pagesTotal - 1)) {
          this.api()
        }
      })
      .catch(error => {
        console.log(error);
      });

  }

  componentDidMount() {
    this.api()
  }

  render() {
    return (
      <View style={styles.container}>
        
        <ScrollView
          style={styles.container}
          contentContainerStyle={styles.contentContainer}
        >
          {this.state.chamados}
        </ScrollView>
      </View>
    )
  }
}

HomeScreen.navigationOptions = {
  title: 'Chamados Abertos - UserTecnico1',
  headerStyle: {
    backgroundColor: '#299B41',
  },
  headerTintColor: '#fff',
  headerTitleStyle: {
    fontWeight: 'bold',
  },
};

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
