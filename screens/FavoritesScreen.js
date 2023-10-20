import MealsList from "../components/MealsList/MealsList";
import { useContext } from "react";
import { MEALS } from "../data/dummy-data";
// import { FavoritesContext } from "../store/context/favorites-context";
import { StyleSheet, Text,View } from "react-native";
import { useSelector } from "react-redux";
StyleSheet
function FavoritesScreen(){
    const  favoriteMealIds=useSelector((state)=>state.favoriteMeals.ids);

    // const favoriteMealsCtx = useContext(FavoritesContext);
    const favoriteMeals=MEALS.filter(meal=>  favoriteMealIds.includes(meal.id)  )
   if(favoriteMeals.length !== 0){
       return <MealsList items={favoriteMeals}/>
   }
   else{
    return <View style={styles.root}><Text style={styles.text}>You have no Favorite Meals yet.</Text>
    </View> 
   }
}
export default FavoritesScreen;
const styles= StyleSheet.create({
    root:{
        flex:1,
        alignItems:"center",
        justifyContent:'center'
    },
    text:{
        fontSize:18,
        fontWeight:'bold',
        color:'white'
    }
})
