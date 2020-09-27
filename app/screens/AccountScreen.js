import React from "react";
import { View, StyleSheet, FlatList } from "react-native";

import ListItem from "../components/ListItem";
import Screen from "../components/Screen";
import colors from "../config/colors";
import ListItemSeperator from "../components/ListItemSeperator";
import Icon from "../components/Icon";
import routes from "../navigation/routes";
import useAuth from "../auth/useAuth";

const menuItems = [
    {
        title: "My Listings",
        icon: {
            name: "format-list-bulleted",
            backgroundColor: colors.primary
        }
    },
    {
        title: "Messages",
        icon: {
            name: "email",
            backgroundColor: colors.secondary
        },
        targetScreen: routes.MESSAGES
    }
];

function AccountScreen({ navigation }) {
    const { user, logOut } = useAuth();

    return (
        <Screen style={styles.screen}>
            <View style={styles.container}>
                <ListItem
                    title={user.name}
                    subtitle={user.email}
                    image={require("../assets/user.jpeg")}
                />
            </View>
            <View style={styles.container}>
                <FlatList
                    data={menuItems}
                    keyExtractor={(menuItem) => menuItem.title}
                    ItemSeparatorComponent={ListItemSeperator}
                    renderItem={({ item }) => (
                        <ListItem
                            title={item.title}
                            IconComponent={
                                <Icon
                                    name={item.icon.name}
                                    backgroundColor={item.icon.backgroundColor}
                                />
                            }
                            onPress={() =>
                                navigation.navigate(item.targetScreen)
                            }
                        />
                    )}
                />
            </View>
            <ListItem
                title="log out"
                IconComponent={<Icon name="logout" backgroundColor="#ffe66d" />}
                onPress={() => logOut()}
            />
        </Screen>
    );
}

const styles = StyleSheet.create({
    container: {
        marginVertical: 15
    },
    screen: {
        backgroundColor: colors.light
    }
});
export default AccountScreen;
