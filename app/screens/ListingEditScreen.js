import React, { useState } from "react";
import { StyleSheet } from "react-native";
import * as Yup from "yup";

import Screen from "../components/Screen";
import {
    AppForm,
    AppFormField,
    AppFormPicker,
    SubmitButton
} from "../components/forms";
import CategoryPickerItem from "../components/CategoryPickerItem";
import AppFormImagePicker from "../components/forms/AppFormImagePicker";
import useLocation from "../hooks/useLocation";
import listingsApi from "../api/listings";
import listings from "../api/listings";
import UploadScreen from "../screens/UploadScreen";

const validationSchema = Yup.object().shape({
    title: Yup.string().required().min(1).label("Title"),
    price: Yup.number().required().min(1).max(10000).label("Price"),
    description: Yup.string().label("Description"),
    category: Yup.object().required().nullable().label("Category"),
    images: Yup.array().min(1, "Please select at least one image.")
});

const categories = [
    { label: "Furniture", value: 1, backgroundColor: "yellow", icon: "email" },
    { label: "Clothing", value: 2, backgroundColor: "red", icon: "lock" },
    { label: "Camera", value: 3, backgroundColor: "green", icon: "email" }
];

function ListingEditScreen(props) {
    const location = useLocation();
    const [uploadVisible, setUploadVisible] = useState(false);
    const [progress, setProgress] = useState(0);
    const handleSubmit = async (listing, { resetForm }) => {
        setProgress(0);
        setUploadVisible(true);
        const result = await listingsApi.addListing(
            { ...listing, location },
            (progress) => setProgress(progress)
        );
        if (!result.ok) {
            setUploadVisible(false);
            return alert("Couldn't add the listing.");
        }
        resetForm();
    };

    return (
        <Screen style={styles.container}>
            <UploadScreen
                progress={progress}
                visible={uploadVisible}
                onDone={() => setUploadVisible(false)}
            />
            <AppForm
                initialValues={{
                    title: "",
                    price: "",
                    description: "",
                    category: null,
                    images: []
                }}
                onSubmit={handleSubmit}
                validationSchema={validationSchema}
            >
                <AppFormImagePicker name="images" />
                <AppFormField
                    maxLength={255}
                    name="title"
                    placeholder="Title"
                />
                <AppFormField
                    keyboardType="numeric"
                    maxLength={8}
                    name="price"
                    placeholder="Price"
                    width={130}
                />
                <AppFormPicker
                    items={categories}
                    name="category"
                    // numberOfColumns={3}
                    // PickerItemComponent={CategoryPickerItem}
                    placeholder="Category"
                    width={150}
                />
                <AppFormField
                    maxLength={255}
                    multiline
                    name="description"
                    numberOfLines={3}
                    placeholder="Description"
                />
                <SubmitButton title="Post" />
            </AppForm>
        </Screen>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 15
    }
});

export default ListingEditScreen;
