import React, { useState, useEffect } from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import { Image } from "react-native-expo-image-cache";

import AppText from "../components/AppText";
import colors from "../config/colors";
import ListItem from "../components/ListItem";
import ContactSellerForm from "../components/ContactSellerForm";
import useApi from "../hooks/useApi";
import userApi from "../api/users";

function ListingDetailsScreen({ route }) {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const item = route.params;
    const userId = item["userId"];
    const getUsersApi = useApi(userApi.getUsers);
    useEffect(() => {
        getUserInfo();
    }, [username, email]);

    const getUserInfo = async () => {
        const result = await getUsersApi.request();

        if (result.ok) {
            let [user] = result.data.filter((user) => user["id"] == userId);
            if (user) {
                setUsername(user["name"]);
                setEmail(user["email"]);
            }
        }
    };

    // console.log(route.params);

    return (
        <ScrollView
            contentContainerStyle={{ flexGrow: 1 }}
            keyboardShouldPersistTaps="handled"
            style={styles.container}
        >
            <Image
                style={styles.image}
                uri={item.images[0].url}
                tint="light"
                preview={{ uri: item.images[0].thumbnailUrl }}
            />
            <View style={styles.detailsContainer}>
                <AppText style={styles.title}> {item.title}</AppText>
                <AppText style={styles.price}> ${item.price} </AppText>
            </View>
            <View style={styles.userContainer}>
                <ListItem
                    title={username}
                    subtitle={email}
                    image={require("../assets/user.jpeg")}
                />
            </View>
            <View style={styles.ContactFormContainer}>
                <ContactSellerForm listing={item} />
            </View>
        </ScrollView>
    );
}

export default ListingDetailsScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    image: {
        width: "100%",
        height: 300
    },
    detailsContainer: {
        padding: 20
    },
    ContactFormContainer: {
        paddingHorizontal: 20,
        marginBottom: 28
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
        marginVertical: 20,
        paddingHorizontal: 10
    }
});
