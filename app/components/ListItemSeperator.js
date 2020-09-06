import React from "react";
import { StyleSheet, View } from "react-native";
import colors from "../config/colors";
function ListItemSeperator(props) {
    return <View style={styles.seperator} />;
}

const styles = StyleSheet.create({
    seperator: {
        backgroundColor: colors.light,
        width: "100%",
        height: 1
    }
});

export default ListItemSeperator;
