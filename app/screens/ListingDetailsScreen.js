import React from "react";
import { View, Image, StyleSheet } from "react-native";

import AppText from "../components/AppText";
import colors from "../config/colors";
import ListItem from "../components/ListItem";

function ListingDetailsScreen({ route }) {
    const item = route.params;
    return (
        <View>
            <Image style={styles.image} source={item.image} />
            <View style={styles.detailsContainer}>
                <AppText style={styles.title}> {item.title}</AppText>
                <AppText style={styles.price}> ${item.price} </AppText>
            </View>
            <View style={styles.userContainer}>
                <ListItem
                    title={"Chady"}
                    subtitle={"8 Listings"}
                    image={require("../assets/user.jpeg")}
                />
            </View>
        </View>
    );
}

export default ListingDetailsScreen;

const styles = StyleSheet.create({
    image: {
        width: "100%",
        height: 300
    },
    detailsContainer: {
        padding: 20
    },
    price: {
        fontSize: 20,
        color: colors.secondary,
        fontWeight: "bold",
        marginVertical: 10
    },
    title: {
        fontSize: 24,
        fontWeight: "500"
    },
    userContainer: {
        marginVertical: 20
    }
});
