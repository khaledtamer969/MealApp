import { Pressable, View ,Text,StyleSheet ,Platform} from "react-native";

function CategoryGridTile({ title, color,onPress }) {
    return (
        <View style={styles.gridItem}>
            <Pressable onPress={onPress} style={({pressed})=>pressed?[styles.button,styles.buttonPressed]:styles.button}>
                <View style={[styles.innerContainer,{backgroundColor:color}]}>
                    <Text style={styles.title}>{title}</Text>
                </View>
            </Pressable>
        </View>
    );
}
export default CategoryGridTile;
const styles = StyleSheet.create({
    gridItem: {
        flex: 1,
        margin:16,
        height: 150,
        borderRadius: 8,
        elevation: 4,
        shadowColor: "black",
        backgroundColor:Platform.OS ==="ios" ? "white" : "transparent" ,
        shadowOpacity: 0.26,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 8,
        overflow:Platform.OS ==="ios" ? "visible" : "hidden" ,
    },
    button:{
        flex: 1,
    },
    buttonPressed:{
     opacity:0.5,
    }
    ,
    innerContainer: {
        flex: 1,
        borderRadius: 8,
        padding: 16,
        justifyContent: "center",
        alignItems: "center",
    },
    title:{
        fontWeight:"bold",
    }

});