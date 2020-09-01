
import React from "react";
import { ImageBackground, StyleSheet, Text, View } from "react-native";
import ImageBack from "./../Images/Freedom.jpg";

const BackGround = () => (
  <View style={styles.container}>
    <ImageBackground source={ImageBack} style={styles.ImageBack}>
      <Text style={styles.text}>Inside</Text>
    </ImageBackground>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column"
  },
  ImageBack: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center"
  },
 
});

export default BackGround;