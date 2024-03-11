import React, { FC } from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

import { PostImage } from "../../types";

const TodaysImage: FC<PostImage> = ({ date, title, url }) => {
  return (
    <View style={styles.container}>
        <View>
        {url ? (
          <Image source={{ uri: url }} style={styles.image} />
        ) : (
          <Text style={styles.imagePlaceholderText}>Loading...</Text>
        )}
      </View>
      <Text style={styles.title}>
        {title}
      </Text>
      <Text style={styles.date}>
        {date}
      </Text>
      <TouchableOpacity style={styles.buttonContainer}>
        <Text style={styles.button}>View</Text>
      </TouchableOpacity>

    </View>
  )
}

export default TodaysImage;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#2c449d',
    marginVertical: 16,
    marginHorizontal: 24,
    borderRadius: 32,
    padding: 16,
  },
  image: {
    width: '100%',
    borderRadius: 32,
    height: 190,
    borderWidth: 2,
    borderColor: '#fff',
  },
  imagePlaceholderText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 16,
  },
  title: {
    color: '#fff',
    fontSize: 20,
    marginVertical: 12,
    fontWeight: 'bold',
  },
  date: {
    color: '#fff',
    fontSize: 16,
  },
  buttonContainer: {
    alignItems: 'flex-end',
  },
  button: {
    color: '#fff',
  }
}) 