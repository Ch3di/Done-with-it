import React, { useState } from "react";
import { StyleSheet } from "react-native";
import MessagesScreen from "./app/screens/MessagesScreen";
import ListingScreen from "./app/screens/ListingScreen";
import ListingEditScreen from "./app/screens/ListingEditScreen";
import ImageInput from "./app/components/ImageInput";
import ImageInputList from "./app/components/ImageInputList";
import AccountScreen from "./app/screens/AccountScreen";
import LoginScreen from "./app/screens/LoginScreen";
import { NavigationContainer } from "@react-navigation/native";
import AuthNavigator from "./app/navigation/AuthNavigator";
import navigationTheme from "./app/navigation/navigationTheme";
import AppNavigator from "./app/navigation/AppNavigator";

export default function App() {
    return (
        <NavigationContainer theme={navigationTheme}>
            <AppNavigator />
        </NavigationContainer>
    );
}

const styles = StyleSheet.create({});
