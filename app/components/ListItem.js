import React from "react";
import { View, Image, StyleSheet, TouchableHighlight } from "react-native";
import AppText from "./AppText";
import colors from "../config/colors";
import Swipeable from "react-native-gesture-handler/Swipeable";
function ListItem({
    image,
    title,
    subtitle,
    IconComponent,
    onPress,
    renderRightActions
}) {
    return (
        <Swipeable renderRightActions={renderRightActions}>
            <TouchableHighlight underlayColor={colors.light} onPress={onPress}>
                <View style={styles.container}>
                    {IconComponent}
                    {image && <Image style={styles.image} source={image} />}
                    <View style={styles.details}>
                        <AppText style={styles.title}>{title}</AppText>
                        {subtitle && (
                            <AppText style={styles.subtitle}>
                                {subtitle}
                            </AppText>
                        )}
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
        padding: 10,
        backgroundColor: colors.white
    },
    details: {
        marginLeft: 12,
        justifyContent: "center"
    },
    image: {
        height: 70,
        width: 70,
        borderRadius: 35,
        marginLeft: 10
    },
    subtitle: {
        color: colors.medium
    },
    title: {
        fontSize: 20,
        fontWeight: "bold"
    }
});
