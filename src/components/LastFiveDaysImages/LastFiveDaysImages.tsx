import { FC } from "react";
import React from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import { PostImage as PostImageTypes } from "../../types";
import PostImages from "../PostImage";

const LastFiveDaysImages: FC<{ postImages?: PostImageTypes[] }> = ({ postImages }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Last 5 Days</Text>

      <ScrollView style={styles.content}>
        {postImages?.map(postImage => (
          <PostImages key={`post-image-${postImage.title}`}  {...postImage} />
        ))}
      </ScrollView>
    </View>
  )
};

export default LastFiveDaysImages;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginVertical: 8,
  },
  title: {
    color: '#fff',
    fontSize: 16,
    marginBottom: 18,
  },
  content: {
    paddingHorizontal: 24,
  }
})