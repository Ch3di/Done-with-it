import React from "react";
import { View, Image, StyleSheet, TouchableHighlight } from "react-native";
import Swipeable from "react-native-gesture-handler/Swipeable";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import AppText from "./AppText";
import colors from "../config/colors";

function ListItem({
    image,
    title,
    subtitle,
    IconComponent,
    onPress,
    renderRightActions
}) {
    const SubtitleComponent = () => {
        if (subtitle)
            return (
                <AppText style={styles.subtitle} numberOfLines={2}>
                    {subtitle}
                </AppText>
            );
        return null;
    };

    return (
        <Swipeable renderRightActions={renderRightActions}>
            <TouchableHighlight underlayColor={colors.light} onPress={onPress}>
                <View style={styles.container}>
                    {IconComponent}
                    {image && <Image style={styles.image} source={image} />}
                    <View style={styles.details}>
                        <AppText style={styles.title} numberOfLines={1}>
                            {title}
                        </AppText>
                        {SubtitleComponent()}
                    </View>
                    <MaterialCommunityIcons
                        name="chevron-right"
                        size={25}
                        color={colors.medium}
                    />
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
        backgroundColor: colors.white,
        alignItems: "center"
    },
    details: {
        marginLeft: 12,
        justifyContent: "center",
        flex: 1
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
