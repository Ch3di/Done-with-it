import React from "react";
import { StyleSheet } from "react-native";
import Screen from "./app/components/Screen";
import AppTextInput from "./app/components/AppTextInput";
export default function App() {
    return (
        <Screen>
            <AppTextInput icon="email" />
        </Screen>
    );
}

const styles = StyleSheet.create({});
