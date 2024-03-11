import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

const Header = () => {
  return (
    <View style={styles.container}>

      <View style={styles.leftContainer}>
        <Text style={styles.title}>Explore</Text>
      </View>

      <View style={styles.rightContainer}>
        <Image style={styles.img} source={require('../../assets/logo-nasa.png')} />
      </View>
    </View>
  )
}

export default Header;

const styles = StyleSheet.create ({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  leftContainer: {
    flex: 1,
    alignItems: 'flex-start'
  },
  rightContainer: {
    flex: 1,
    alignItems: 'flex-end',
  },
  title: {
    fontSize: 20,
    color: '#fff',
  },
  img: {
    width: 60,
    height: 60,
  }
});