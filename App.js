import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
// import * as Font from "expo-font";
import { composeWithDevTools } from "redux-devtools-extension";
import { useFonts } from "@expo-google-fonts/inter";
import { AppLoading } from "expo";
import { enableScreens } from "react-native-screens";
import { createStore, combineReducers, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import mealsReducer from "./store/reducers/meals";

import MealsNavigator from "./navigation/MealsNavigator";

enableScreens();

const rootReducer = combineReducers({
  meals: mealsReducer,
});

// const store = createStore(rootReducer, composeWithDevTools);
const store = createStore(rootReducer);

// const fetchFonts = () => {
//   Font.loadAsync({
//     "open-sans": require("./assets/fonts/OpenSans-Regular.ttf"),
//     "open-sans-bold": require("./assets/fonts/OpenSans-Bold.ttf"),
//   });
// };
export default function App() {
  let [fontsLoaded] = useFonts({
    "open-sans": require("./assets/fonts/OpenSans-Regular.ttf"),
    "open-sans-bold": require("./assets/fonts/OpenSans-Bold.ttf"),
  });
  // const [fontLoaded, setFontLoaded] = useState(false);

  // if (!fontLoaded) {
  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <Provider store={store}>
      <MealsNavigator />
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
