
import { View,FlatList ,StyleSheet} from "react-native"
import MealItem from "./MealItem"
function MealsList({items}){
    function renderMealItem(itemData){
        const mealItemProps={
            id: itemData.item.id,
            title: itemData.item.title,
            imageUrl: itemData.item.imageUrl,
            duration: itemData.item.duration,
            complexity: itemData.item.complexity,
            affordability: itemData.item.affordability
        }
        return <MealItem {...mealItemProps}/>
    }
return (<View style={styles.screen}>
<FlatList data={items} keyExtractor={(item)=>item.id} renderItem={renderMealItem}/>
</View>)
}
export default MealsList

const styles = StyleSheet.create({
    screen:{
        flex:1,
        padding:16,
    }
    });