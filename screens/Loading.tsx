import React from "react";
import { ActivityIndicator, Image, StatusBar, StyleSheet, View } from "react-native";

export default function Loading() {
    return (
        <View style={styles.loadingContainer}>
            <StatusBar hidden={true} />
            <Image source={require("./../assets/icon.png")} style={styles.loadingImage} />
            <ActivityIndicator size="large" color="#1E3E6D" />
            <Image source={require("./../assets/waves1.png")} style={styles.waves} />
        </View>
    )
}

const styles = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    gap: 50,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ffffff",
    zIndex: 1
  },
  loadingImage: {
    width: 270,
    height: 270,
    borderRadius: 100
  },
  waves: {
    position: 'absolute',
    bottom: 0,
    width: "100%",
    zIndex: 0
  }
});