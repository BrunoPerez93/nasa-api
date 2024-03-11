import React, { useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";
import Header from "../../components/Header";
import fetchApi from '../../utils/fetch.tsx'
import TodaysImage from "../../components/TodayImage/TodaysImage.tsx";
import { PostImage } from "../../types/index.ts";

const Home = () => {

  const [todayImage, setTodayImage] = useState<PostImage>({});

  useEffect(() => {
    const loadTodayImage = async () => {
      try {
        const todayImageResponse = await fetchApi();
        setTodayImage(todayImageResponse);

      } catch (error) {
        console.log('ERROR', error);
        setTodayImage({});
      }

    };
    loadTodayImage().catch(null);
  }, []);

  return (
    <View style={styles.container}>
      <Header />
      <TodaysImage {...todayImage} />
    </View>
  )
}

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
  }
})