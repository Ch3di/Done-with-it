import React, { useState, useContext } from "react";
import { StyleSheet, Image } from "react-native";
import * as Yup from "yup";

import Screen from "../components/Screen";
import {
    ErrorMessage,
    AppForm,
    AppFormField,
    SubmitButton
} from "../components/forms";
import authApi from "../api/auth";
import useAuth from "../auth/useAuth";

const validationSchema = Yup.object().shape({
    email: Yup.string().required().email().label("Email"),
    password: Yup.string().required().min(5).label("Password")
});

function LoginScreen(props) {
    const [loginFailed, setLoginFailed] = useState(false);
    const auth = useAuth();
    const handleSubmit = async ({ email, password }) => {
        const result = await authApi.login(email, password);
        if (!result.ok) return setLoginFailed(true);
        setLoginFailed(false);
        auth.logIn(result.data);
    };
    return (
        <Screen style={styles.container}>
            <Image
                style={styles.logo}
                source={require("../assets/logo-red.png")}
            />
            <AppForm
                initialValues={{ email: "", password: "" }}
                onSubmit={handleSubmit}
                validationSchema={validationSchema}
            >
                <ErrorMessage
                    error="Invalid email and/or password."
                    visible={loginFailed}
                />
                <AppFormField
                    autoCapitalize="none"
                    autoCorrect={false}
                    name="email"
                    icon="email"
                    keyboardType="email-address"
                    placeholder="Email"
                    textContentType="emailAddress"
                />
                <AppFormField
                    autoCapitalize="none"
                    autoCorrect={false}
                    name="password"
                    icon="lock"
                    placeholder="Password"
                    secureTextEntry
                    textContentType="password"
                />
                <SubmitButton title="Login" />
            </AppForm>
        </Screen>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 15
    },
    logo: {
        width: 80,
        height: 80,
        alignSelf: "center",
        marginTop: 50,
        marginBottom: 20
    }
});

export default LoginScreen;
