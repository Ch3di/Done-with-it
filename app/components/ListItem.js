import React from "react";
import { View, Image, StyleSheet, TouchableHighlight } from "react-native";
import AppText from "./AppText";
import colors from "../config/colors";
import Swipeable from "react-native-gesture-handler/Swipeable";
import ListItemDeleteAction from "./ListItemDeleteAction";
function ListItem({ image, title, subtitle, onPress }) {
    return (
        <Swipeable renderRightActions={ListItemDeleteAction}>
            <TouchableHighlight underlayColor={colors.light} onPress={onPress}>
                <View style={styles.container}>
                    <Image style={styles.image} source={image} />
                    <View>
                        <AppText style={styles.title}>{title}</AppText>
                        <AppText style={styles.subtitle}>{subtitle}</AppText>
                    </View>
                </View>
            </TouchableHighlight>
        </Swipeable>
    );
}

export default ListItem;

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        padding: 12
    },
    image: {
        height: 70,
        width: 70,
        borderRadius: 35,
        marginLeft: 20,
        marginRight: 12
    },
    subtitle: {
        color: colors.medium
    },
    title: {
        fontSize: 20,
        fontWeight: "bold"
    }
});
