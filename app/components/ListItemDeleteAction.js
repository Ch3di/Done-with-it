import React from "react";
import { View, StyleSheet } from "react-native";
import colors from "../config/colors";
import { MaterialCommunityIcons } from "@expo/vector-icons";

function ListItemDeleteAction(props) {
    return (
        <View style={styles.container}>
            <MaterialCommunityIcons
                name="trash-can"
                size={35}
                color={colors.white}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        justifyContent: "center",
        width: 70,
        backgroundColor: colors.danger
    }
});
export default ListItemDeleteAction;
