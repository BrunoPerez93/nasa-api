import React, { useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";
import Header from "../../components/Header";
import fetchApi from '../../utils/fetch.tsx'
import TodaysImage from "../../components/TodayImage/TodaysImage.tsx";
import { PostImage } from "../../types/index.ts";
import { format, sub } from 'date-fns'
import LastFiveDaysImages from "../../components/LastFiveDaysImages/LastFiveDaysImages.tsx";

const Home = () => {

  const [todayImage, setTodayImage] = useState<PostImage>({});
  const [lastFiveDaysImages, setLastFiveDaysImages] = useState<PostImage[]>([]);

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
    loadTodayImage();
    loadLast5DaysImages().catch(null);
  }, []);


  const loadLast5DaysImages = async () => {
    try {
      const date = new Date();
      const todaysDate = format(date, 'yyyy-MM-dd');
      const fiveDaysAgoDate = format(sub(date, { days: 5 }), 'yyyy-MM-dd');

      const lastFiveDaysImagesResponse = await fetchApi(`&start_date=${fiveDaysAgoDate}&end_date=${todaysDate}`);

      setLastFiveDaysImages(lastFiveDaysImagesResponse);

    } catch (error) {
      console.error(error)
    }
  }

  return (
    <View style={styles.container}>
      <Header />
      <TodaysImage {...todayImage} />
      <LastFiveDaysImages postImages={lastFiveDaysImages}/>

    </View>
  )
}

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    backgroundColor: 'rgba(7,26,93,255)',
    
  }
})