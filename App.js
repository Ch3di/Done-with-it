import React from "react";
import { StyleSheet } from "react-native";
import Screen from "./app/components/Screen";
import Icon from "./app/components/Icon";
import ListItem from "./app/components/ListItem";
import AccountScreen from "./app/screens/AccountScreen";
export default function App() {
    return (
        <Screen>
            <AccountScreen />
        </Screen>
    );
}

const styles = StyleSheet.create({});
