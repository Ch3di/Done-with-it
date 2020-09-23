import React, { useState } from "react";
import { StyleSheet } from "react-native";
import MessagesScreen from "./app/screens/MessagesScreen";
import ListingScreen from "./app/screens/ListingScreen";
import ListingEditScreen from "./app/screens/ListingEditScreen";
import ImageInput from "./app/components/ImageInput";
import ImageInputList from "./app/components/ImageInputList";

export default function App() {
    return <ListingEditScreen />;
}

const styles = StyleSheet.create({});
