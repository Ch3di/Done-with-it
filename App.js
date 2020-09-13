import React, { useState } from "react";
import { StyleSheet } from "react-native";
import Screen from "./app/components/Screen";
import AppTextInput from "./app/components/AppTextInput";
import AppPicker from "./app/components/AppPicker";

const categories = [
    { label: "Furniture", value: 1 },
    { label: "Clothing", value: 2 },
    { label: "Cameras", value: 3 }
];

export default function App() {
    const [category, setCategory] = useState(categories[0]);
    return (
        <Screen>
            <AppTextInput icon="email" />
            <AppPicker
                selectedItem={category}
                onSelectItem={(item) => setCategory(item)}
                icon="apps"
                placeholder="categories"
                items={categories}
            />
        </Screen>
    );
}

const styles = StyleSheet.create({});
