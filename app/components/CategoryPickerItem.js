import React from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import Icon from "./Icon";
import AppText from "./AppText";
function CategoryPickerItem({ item, onPress }) {
    return (
        <TouchableOpacity style={styles.container} onPress={onPress}>
            <View>
                <Icon
                    backgroundColor={item.backgroundColor}
                    name={item.icon}
                    size={80}
                />
                <AppText style={styles.label}>{item.label}</AppText>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingVertical: 15,
        paddingHorizontal: 30,
        alignItems: "center",
        width: "33%"
    },
    label: {
        marginTop: 5,
        textAlign: "center",
        fontSize: 18
    }
});

export default CategoryPickerItem;
