import React from 'react'
import { Platform } from "react-native";
import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { Ionicons } from '@expo/vector-icons'
import { createDrawerNavigator } from "react-navigation-drawer";
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs'

import CategoreisScreen from "../screens/CategoreisScreen";
import CategoryMealsScreen from "../screens/CategoryMealsScreen";
import MealDetailScreen from "../screens/MealDetailScreen";
import FavoriteScreen from '../screens/FavoritesScreen'
import FiltersScreen from '../screens/FiltersScreen';
import Colors from "../constants/Colors";


const defaultStackNavOptions = {
  headerStyle: {
    backgroundColor:
      Platform.OS === "android" ? Colors.primaryColor : "white",
  },
  headerTintColor:
    Platform.OS === "android" ? "white" : Colors.primaryColor,
}
const MealsNavigator = createStackNavigator(
  {
    Categories: {
      screen: CategoreisScreen,
    },
    CategoryMeals: {
      screen: CategoryMealsScreen,
    },
    MealDetail: MealDetailScreen,
  },
  {
    //initialRouteName:
    defaultNavigationOptions: defaultStackNavOptions
  }
);

const FavNavigator = createStackNavigator({
  Favorites: FavoriteScreen,
  MealDetail: MealDetailScreen
}, { //initialRouteName:
  defaultNavigationOptions:
    defaultStackNavOptions
});

const tabSccreenConfig = {
  Meals: {
    screen: MealsNavigator, navigationOptions: {
      tabBarIcon: (tabInfo) => {
        return <Ionicons name='ios-restaurant' size={25} color={tabInfo.tintColor} />
      }, tabBarColor: Colors.primaryColor
    }
  },
  Favorites: {
    screen: FavNavigator, navigationOptions: {
      // tabBarLabel: "Favorite!!",
      tabBarIcon: (tabInfo) => {
        return <Ionicons name='ios-star' size={25} color={tabInfo.tintColor} />
      }, tabBarColor: Colors.accentColor
    }
  }
}

const MealsFavTabNavigator = Platform.OS === 'android' ? createMaterialBottomTabNavigator(
  tabSccreenConfig, {
  activeColor: 'white',
  shifting: true,
  // barStyle: {
  //   backgroundColor: Colors.primaryColor
  // }
}
) : createBottomTabNavigator(
  tabSccreenConfig
  , {
    tabBarOptions: {
      activeTintColor: Colors.accentColor
    }
  });

const FiltersNavigator = createStackNavigator({
  Filters: FiltersScreen
});

const MainNavigator = createDrawerNavigator({
  MealsFavs: MealsFavTabNavigator,
  Filters: FiltersNavigator
});

export default createAppContainer(MainNavigator);
