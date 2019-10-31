import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { ExpoLinksView } from '@expo/samples';
import CardChamada from '../components/cardChamada.js'


export default function LinksScreen() {
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
      {repeat()}
    </ScrollView>
  );
}


function repeat() {
  var array = []
  for (var x = 0; x < 5; x++) {
    array.push(<CardChamada style={styles.card} key={x} />)
  }
  return array
}

LinksScreen.navigationOptions = {
  title: 'A - Chamados Fechados',
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
