import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import { MEALS } from "../data/dummy-data";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import HeaderButton from "../components/HeaderButton";
const MealDetailScreen = (props) => {
  const mealId = props.navigation.getParam("mealId");

  const seletedMael = MEALS.find((meal) => meal.id === mealId);

  return (
    <View style={styles.screen}>
      <Text>{seletedMael.title}</Text>
      <Button
        title="go back to Categories"
        onPress={() => {
          props.navigation.popToTop();
        }}
      ></Button>
    </View>
  );
};

MealDetailScreen.navigationOptions = (navigationData) => {
  const mealId = navigationData.navigation.getParam("mealId");
  const seletedMael = MEALS.find((meal) => meal.id === mealId);
  return {
    headerTitle: seletedMael.title,
    headerRight: () => (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          title="Favorite"
          iconName="ios-star"
          onPress={() => {
            console.log("Mark as favoriddddte");
          }}
        />
        <Item
          title="unFavorite"
          iconName="ios-star-outline"
          onPress={() => {
            console.log("Mark as favoriddddte");
          }}
        />
      </HeaderButtons>
    ),
  };
};
const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default MealDetailScreen;
