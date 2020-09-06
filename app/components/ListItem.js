import React from "react";
import { View, Image, StyleSheet } from "react-native";
import AppText from "./AppText";
import colors from "../config/colors";

function ListItem({ image, title, subtitle }) {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={image} />
      <View>
        <AppText style={styles.title}>{title}</AppText>
        <AppText style={styles.subtitle}>{subtitle}</AppText>
      </View>
    </View>
  );
}

export default ListItem;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
  },
  image: {
    height: 70,
    width: 70,
    borderRadius: 35,
    marginLeft: 20,
    marginRight: 12,
  },
  subtitle: {
    color: colors.medium,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
});
