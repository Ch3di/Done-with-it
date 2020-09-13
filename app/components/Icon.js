import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { View } from "react-native";
function Icon({
    name,
    size = 40,
    backgroundColor = "#000",
    iconColor = "#fff"
}) {
    return (
        <View
            style={{
                height: size,
                width: size,
                borderRadius: size / 2,
                backgroundColor,
                justifyContent: "center",
                alignItems: "center"
            }}
        >
            <MaterialCommunityIcons
                name={name}
                size={size * 0.5}
                color={iconColor}
            />
        </View>
    );
}

export default Icon;
