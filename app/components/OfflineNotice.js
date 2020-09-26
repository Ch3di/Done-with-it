import React from "react";
import { View, StyleSheet } from "react-native";
import Constants from "expo-constants";
import { useNetInfo } from "@react-native-community/netinfo";
import colors from "../config/colors";
import AppText from "../components/AppText";

function OfflineNotice(props) {
    const netInfo = useNetInfo();
    if (netInfo.type !== "unknown" && netInfo.isInternetReachable === false)
        return (
            <View style={styles.container}>
                <AppText style={styles.text}>No Internet Connection</AppText>
            </View>
        );
    return null;
}

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        backgroundColor: colors.primary,
        position: "absolute",
        height: 50,
        justifyContent: "center",
        top: Constants.statusBarHeight,
        width: "100%",
        zIndex: 1
    },
    text: {
        color: colors.white
    }
});

export default OfflineNotice;
