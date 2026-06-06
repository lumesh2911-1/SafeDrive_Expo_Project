import React from "react";
import { Image, StyleSheet, View } from "react-native";
import { moderateScale } from "react-native-size-matters";
import logo from "../assets/images/logo.png";

export default function SplashScreen() {
  return (
    <View style={styles.container}>
      <Image source={logo} style={styles.logo} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    alignItems: "center",
    justifyContent: "center",
  },
  logo: {
    width: moderateScale(180),
    height: moderateScale(180),
    resizeMode: "contain",
  },
});
