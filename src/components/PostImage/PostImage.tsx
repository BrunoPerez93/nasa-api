import React, { FC } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { PostImage, RootStacksParams } from "../../types";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useNavigation } from "@react-navigation/native";

type PostimageNavigationProps = NativeStackNavigationProp<
  RootStacksParams,
  'Detail'
>;


const PostImages: FC<PostImage> = ({ title, date, url, explanation }) => {
  const {navigate} = useNavigation<PostimageNavigationProps>();

  const handleViewPress = () => {
    navigate('Detail', {title, date, url, explanation})
  }
  
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.date}>{date}</Text>
      <TouchableOpacity style={styles.buttonContainer} onPress={handleViewPress}>
        <Text style={styles.button}>View</Text>
      </TouchableOpacity>
    </View>
  )

}

export default PostImages;


const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgba(18,39,113,255)',
    borderRadius: 20,
    marginBottom: 12,
    padding: 16,
  },
  title: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 18,
    marginBottom: 12,
  },
  date: {
    color: '#fff',
  },
  buttonContainer: {
    alignItems: 'flex-end',
  },
  button: {
    color: '#fff',
  }
}) 