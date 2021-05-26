import AsyncStorage from "@react-native-async-storage/async-storage";

export const storeData = async (key, value) => {
  try {
    await AsyncStorage.setItem(key, JSON.stringify(value));
  } catch (e) {
    console.log("Error occured storing data");
  }
  console.log("Done.");
};

export const getData = async (key) => {
  try {
    const jsonValue = await AsyncStorage.getItem(key);
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch (e) {
    console.log("Error occurred getting data");
  }
};

export const clearData = async (key) => {
  try {
    await AsyncStorage.clear();
  } catch (e) {
    // clear error
  }

  console.log("Done.");
};

export const removeData = async (key) => {
  try {
    await AsyncStorage.removeItem(key);
  } catch (e) {
    console.log("Error occurred removing item");
  }

  console.log("Done.");
};

export const updateData = async (key, newwData) => {
  try {
    await AsyncStorage.mergeItem(key, JSON.stringify(newwData));

    const currentData = await AsyncStorage.getItem(key);

    console.log(currentData);
  } catch (e) {
    console.log("Error occurred updating  data");
  }
};
