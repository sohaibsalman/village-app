import AsyncStorage from "@react-native-async-storage/async-storage";

const storeData = async (key: string, value: string) => {
  try {
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem(key, jsonValue);
  } catch (e) {}
};

const getData = async (key: string) => {
  try {
    const jsonValue = await AsyncStorage.getItem(key);
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch (e) {}
};

const removeData = async (key: string) => {
  try {
    await AsyncStorage.removeItem(key);
  } catch (error) {
    console.error(error);
  }
};

export { storeData, getData, removeData };
