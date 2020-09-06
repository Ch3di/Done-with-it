import React from "react";
import { Image, StyleSheet, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
function ViewImageScreen(props) {
    return (
        <View style={styles.container}>
            <Image
                style={styles.image}
                source={require("../assets/chair.jpg")}
                resizeMode="contain"
            />
            <MaterialCommunityIcons
                style={styles.closeIcon}
                name="close"
                color="white"
                size={35}
            ></MaterialCommunityIcons>
            <MaterialCommunityIcons
                style={styles.deleteIcon}
                color="white"
                size={35}
                name="trash-can-outline"
            ></MaterialCommunityIcons>
        </View>
    );
}

const styles = StyleSheet.create({
    closeIcon: {
        position: "absolute",
        top: 10,
        left: 17
    },
    container: {
        backgroundColor: "#000",
        flex: 1
    },
    deleteIcon: {
        position: "absolute",
        top: 10,
        right: 17
    },
    image: {
        width: "100%",
        height: "100%"
    }
});

export default ViewImageScreen;
