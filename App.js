import React from "react";
import { StyleSheet } from "react-native";
import Screen from "./app/components/Screen";
import Icon from "./app/components/Icon";
import ListItem from "./app/components/ListItem";
import AccountScreen from "./app/screens/AccountScreen";
import ListingScreen from "./app/screens/ListingScreen";
import AppTextInput from "./app/components/AppTextInput";
export default function App() {
    return (
        <Screen>
            <AppTextInput icon="email" />
        </Screen>
    );
}

const styles = StyleSheet.create({});
