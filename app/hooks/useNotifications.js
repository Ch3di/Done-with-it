import React, { useEffect } from "react";
import expoPushTokensApi from "../api/expoPushTokens";
import { Notifications } from "expo";
import * as Permissions from "expo-permissions";

export default useNotifications = (notificationListener) => {
    const registerForPushNotifications = async () => {
        try {
            const permission = await Permissions.askAsync(
                Permissions.NOTIFICATIONS
            );
            if (!permission.granted) return;

            const token = await Notifications.getExpoPushTokenAsync();
            expoPushTokensApi.register(token);
        } catch (error) {
            console.log("error getting push notification token", error);
        }
    };

    useEffect(() => {
        registerForPushNotifications();

        if (notificationListener)
            Notifications.addListener(notificationListener);
    }, []);
};
