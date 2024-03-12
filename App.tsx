

import React from 'react';
import { SafeAreaView, StyleSheet, View } from 'react-native';
import Routes from './src/routes'


function App() {


  return (

    <View style={styles.container}>
      <Routes/>
    </View>

  );
}


export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(7,26,93,255)',
  },
})