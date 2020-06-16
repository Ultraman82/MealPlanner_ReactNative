import React from "react";
import { View, Text, StyleSheet } from "react-native";

const FiltersScreen = (pops) => {
  return (
    <View style={styles.screen}>
      <Text>Filters</Text>
    </View>
  );
};

FiltersScreen.navigationOptions = {
  headerTitle: 'Filter'
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default FiltersScreen;
