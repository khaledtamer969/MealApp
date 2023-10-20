import { View,Pressable,Text,Image,StyleSheet} from "react-native";
import { useNavigation } from "@react-navigation/native";
import MealDetails from "../MealDetails";
function MealItem({id,title,imageUrl,duration,complexity,affordability }){
    const navigation =useNavigation();
    function selectMealItemHandeler(){
        navigation.navigate('MealDetail',{mealId:id})
    }
    return(
        <View style={styles.mealItem}>
            <Pressable android_ripple={{color: '#ccc'}} onPress={selectMealItemHandeler}>
                <View>
                    <Image source={{uri:imageUrl}}  style={styles.image}/>
                    <Text style={styles.title}>{title}</Text>
                </View>
                <MealDetails 
                duration={duration}
                affordability={affordability}
                complexity={complexity}
                />
            </Pressable>
        </View>
    )
}
export default MealItem;

const styles = StyleSheet.create({
    mealItem:{
        elevation:4,
        shadowColor:'black',
        shadowOpacity: 0.25,
        shadowOffset: {width:0, height:2}
        ,margin:16,
        borderRadius:8,
        overflow: 'hidden',
        backgroundColor: 'white'
    },
    image:{
        width: '100%',
        height: '200px'
    },
    title:{
        fontWeight:'bold',
        textAlign: 'center',
        fontSize:18,
        margin:8
    }
})