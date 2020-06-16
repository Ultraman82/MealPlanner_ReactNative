import React from "react";
//import { View, Text, StyleSheet, FlatList } from "react-native";
import { CATEGORIES, MEALS } from "../data/dummy-data";
import MealList from '../components/MealList'

const CategoryMealsScreen = (props) => {


  const catId = props.navigation.getParam("categoryId");
  const displayedMeals = MEALS.filter(
    (meal) => meal.categoryIds.indexOf(catId) >= 0
  );


  return (
    <MealList listData={displayedMeals} navigation={props.navigation}></MealList>
  );
};
CategoryMealsScreen.navigationOptions = (navigationData) => {
  const catId = navigationData.navigation.getParam("categoryId");
  const seletedCategory = CATEGORIES.find((cat) => cat.id === catId);

  return {
    headerTitle: seletedCategory.title,
  };
};
export default CategoryMealsScreen;
