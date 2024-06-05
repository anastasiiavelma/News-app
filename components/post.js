import React from "react";
import { View, Image, Text, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
const truncateTitle = (str) => {
  if (str.length >= 50) {
    return str.substring(0, 50) + "...";
  }

  return str;
};

export const Post = ({ title, imageUrl, createdAt }) => {
  return (
    <View>
      <LinearGradient
        start={{ x: 0, y: 1 }}
        end={{ x: 0, y: 0 }}
        colors={["#3495eb", "#d582e0"]}
        style={[styles.postView, styles.gradient]}
      >
        <Image source={{ uri: imageUrl }} style={styles.postImage} />
        <View style={styles.postDetails}>
          <Text style={styles.postTitle}>{truncateTitle(title)}</Text>
          <Text style={styles.postDate}>
            {new Date(createdAt).toLocaleDateString()}
          </Text>
        </View>
      </LinearGradient>
    </View>
  );
};

const styles = StyleSheet.create({
  gradient: {
    borderRadius: 20,
  },
  postView: {
    margin: 10,
    borderRadius: 20,
    backgroundColor: "#3495eb",
    flexDirection: "row",
    padding: 25,
    borderBottomWidth: 1,
    borderBottomColor: "rgba(0, 0, 0, 0.1)",
    borderBottomStyle: "solid",
  },
  postImage: {
    width: 120,
    height: 120,
    borderRadius: 12,
    marginRight: 12,
  },
  postTitle: {
    fontSize: 17,
    color: "#ffffff",
    fontWeight: "700",
  },
  postDetails: {
    flex: 1,
    justifyContent: "center",
  },
  postDate: {
    fontSize: 12,

    color: "#ffffff",
    marginTop: 2,
  },
});
