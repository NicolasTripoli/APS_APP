import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import CardChamada from '../components/cardChamada.js'


export default function SettingsScreen() {
  /**
   * Go ahead and delete ExpoConfigView and replace it with your content;
   * we just wanted to give you a quick view of your config.
   */
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

SettingsScreen.navigationOptions = {
  title: 'A - Chamados Solucionados',
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