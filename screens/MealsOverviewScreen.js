import { View,Text,FlatList, StyleSheet} from "react-native";
import { useLayoutEffect } from "react";
import MealItem from "../components/MealsList/MealItem";
import { CATEGORIES, MEALS } from "../data/dummy-data";
import MealsList from "../components/MealsList/MealsList";
function  MealsOverviewScreen({route,navigation}) {
    const categoryId = route.params.categoryId;
    const displayedMeals = MEALS.filter((meal)=>meal.categoryIds.indexOf(categoryId)>=0);
    useLayoutEffect(()=>{
        const categoryTitle= CATEGORIES.find((category)=>category.id ===categoryId).title
    navigation.setOptions({title:categoryTitle});
    },[categoryId ,navigation]);
    return(
       <MealsList items={displayedMeals}/>
    );


}
export default MealsOverviewScreen;