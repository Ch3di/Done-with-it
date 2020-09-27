import React, { useState, useEffect } from "react";
import { StyleSheet } from "react-native";
import { AppLoading } from "expo";
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
import OfflineNotice from "./app/components/OfflineNotice";
import AuthContext from "./app/auth/context";
import authStorage from "./app/auth/storage";
import JwtDecode from "jwt-decode";

export default function App() {
    const [user, setUser] = useState();
    const [ready, setReady] = useState(false);

    const restoreUser = async () => {
        const user = await authStorage.getUser();
        return user ? setUser(user) : null;
    };

    if (!ready)
        return (
            <AppLoading
                startAsync={restoreUser}
                onFinish={() => setReady(true)}
            />
        );

    return (
        <AuthContext.Provider value={{ user, setUser }}>
            <NavigationContainer theme={navigationTheme}>
                {user ? <AppNavigator /> : <AuthNavigator />}
            </NavigationContainer>
            <OfflineNotice />
        </AuthContext.Provider>
    );
}

const styles = StyleSheet.create({});
