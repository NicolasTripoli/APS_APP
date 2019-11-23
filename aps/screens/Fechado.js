import * as WebBrowser from 'expo-web-browser';
import React from 'react';
import {
  ScrollView,
  StyleSheet,
  View,
} from 'react-native';
import CardChamada from '../components/cardChamada.js'
import axios from 'axios';

export default class LinksScreen extends React.Component {

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
    axios.get('http://192.168.15.11:8080/chamado/status/FECHADO?size=5&page=' + pageAtual)
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

LinksScreen.navigationOptions = {
  title: 'Chamados Fechados - UserTecnico1',
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
  contentContainer: {
    paddingTop: 30,
  },
});
