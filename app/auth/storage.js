import * as SecureStorage from "expo-secure-store";
import JwtDecode from "jwt-decode";

const key = "authToken";

const storeToken = async (authToken) => {
    try {
        await SecureStorage.setItemAsync(key, authToken);
    } catch (error) {
        console.log("error storing the auth token", error);
    }
};

const getToken = async () => {
    try {
        return await SecureStorage.getItemAsync(key);
    } catch (error) {
        console.log("error getting the token", error);
    }
};

const getUser = async () => {
    const token = await getToken();
    return token ? JwtDecode(token) : null;
};

const removeToken = async () => {
    try {
        await SecureStorage.deleteItemAsync(key);
    } catch (error) {
        console.log("error removing the auth token", error);
    }
};

export default { getToken, getUser, removeToken, storeToken };
