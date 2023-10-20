import { Text, View, Image,StyleSheet, ScrollView } from 'react-native';
import { MEALS } from '../data/dummy-data';
import MealDetails from '../components/MealDetails';
import Subtitle from '../components/MealDetail/Subtitle';
import List from '../components/MealDetail/List';
import { useContext, useLayoutEffect } from 'react';
import IconButton from '../components/IconButton';
import { FavoritesContext } from '../store/context/favorites-context';
import { useDispatch, useSelector } from 'react-redux';
import {addFavorite,removeFavorite} from '../store/redux/favorites';
function MealDetailsScreen({ route,navigation }) {
    
    // const favoriteMealsCtx=useContext(FavoritesContext);
    const  favoriteMealIds=useSelector((state)=>state.favoriteMeals.ids);
    const dispatch =useDispatch();
    const mealId = route.params.mealId
    const selectedMeal = MEALS.find((meal) => meal.id === mealId)
    const mealIsFavorite = favoriteMealIds.includes(mealId);
   console.log(mealIsFavorite)
    function changeFavoritesStatusHandler(){
    if(mealIsFavorite){
        // favoriteMealsCtx.removeFavorite(mealId);
        dispatch(removeFavorite({id:mealId}));
    }else{
        // favoriteMealsCtx.addFavorite(mealId);
        dispatch(addFavorite({id:mealId}));
    }

    
   }
    useLayoutEffect(()=>{
    navigation.setOptions({
    headerRight:()=>{
            return <IconButton icon={mealIsFavorite?'star':'star-outline'} color={'white'} onPress={changeFavoritesStatusHandler}/>
    }})
   },[navigation,changeFavoritesStatusHandler]);
   return <ScrollView style={styles.root}>
        <Image style={styles.image} source={{uri:selectedMeal.imageUrl}}/>
        <Text style={styles.title}>{selectedMeal.title}</Text>
       <MealDetails 
       duration={selectedMeal.duration} 
       complexity={selectedMeal.complexity} 
       affordability={selectedMeal.affordability}
       textStyle={styles.detailText} />
       <View  style={styles.listOuterContainer}>
       <View style={styles.listContainer}>
       <Subtitle>Ingredients</Subtitle>
       <List data={selectedMeal?.ingredients}/>
        <Subtitle>Steps</Subtitle>
        <List data={selectedMeal?.steps}/>
       </View>

       </View>

     
    </ScrollView>
}
export default MealDetailsScreen;
const styles= StyleSheet.create({
    root:{
        marginBottom:32
    }
    ,image:{
        width:'100%',
        height:350
    },
    title:{
        fontSize:24
        ,fontWeight:'bold',
        margin:'8',
        textAlign:"center",
        color:"white"
    },
    detailText:{
        color:'white'
    },
    listContainer:{
        width:'80%'
    },
    listOuterContainer:{
        alignItems:'center'
    }
})