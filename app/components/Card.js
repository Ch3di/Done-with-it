import React from "react";
import {
    Image,
    View,
    StyleSheet,
    TouchableWithoutFeedback
} from "react-native";

import AppText from "./AppText";
import colors from "../config/colors";

function Card({ title, subTitle, imageUrl, onPress }) {
    return (
        <TouchableWithoutFeedback onPress={onPress}>
            <View style={styles.card}>
                <Image source={{ uri: imageUrl }} style={styles.image} />
                <View style={styles.detailsContainer}>
                    <AppText style={styles.title} numberOfLines={1}>
                        {title}
                    </AppText>
                    <AppText style={styles.subtitle} numberOfLines={2}>
                        {subTitle}
                    </AppText>
                </View>
            </View>
        </TouchableWithoutFeedback>
    );
}

export default Card;

const styles = StyleSheet.create({
    card: {
        borderRadius: 15,
        marginBottom: 20,
        backgroundColor: colors.white,
        overflow: "hidden"
    },
    detailsContainer: {
        padding: 20
    },
    image: {
        width: "100%",
        height: 200
    },
    subtitle: {
        color: colors.secondary,
        fontWeight: "bold"
    },
    title: {
        marginBottom: 7
    }
});
