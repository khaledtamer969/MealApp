import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet,Text } from 'react-native';
import CategoriesScreen from './screens/CategoriesScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MealsOverviewScreen from './screens/MealsOverviewScreen';
import MealDetailsScreen from './screens/MealDetailsScreen';
import { Ionicons } from '@expo/vector-icons';
import FavoritesScreen from './screens/FavoritesScreen';
// import FavoritesContextProvider from './store/context/favorites-context';
import { Provider } from 'react-redux';
import  {store} from './store/redux/store'
const Stack = createNativeStackNavigator();
 const Drawer = createDrawerNavigator();
function DrawerNavigator(){
  return <Drawer.Navigator initialRouteName="MealsCategories"
   screenOptions={{
    headerStyle:{backgroundColor:'#351401'},
    headerTintColor:'white',
    sceneContainerStyle:{backgroundColor:'#3f2f25'},
    drawerContentStyle:{backgroundColor:'#351401'},
    drawerInactiveTintColor: "white",
    drawerActiveTintColor:"#351401",
    drawerActiveBackgroundColor:"#e4baa1",
    }} >
  <Drawer.Screen  name="Categories" 
component={CategoriesScreen}
options={{
  drawerIcon:({color,size})=>{
    return <Ionicons name = "list" size={size} color={color}/>
  }
}}
/>
  <Drawer.Screen  options={{
  drawerIcon:({color,size})=>{
   return <Ionicons name="star" size={size} color={color}/>
  }
}} name="Favorites"  component={FavoritesScreen}/>
</Drawer.Navigator>
}
export default function App() {
  return (
  <>
  {/* <FavoritesContextProvider> */}
  <Provider store={store}>
  <StatusBar style="light" ></StatusBar>
   <NavigationContainer>
    <Stack.Navigator screenOptions={{headerStyle:{backgroundColor:'#351401'},headerTintColor:'white',contentStyle:{backgroundColor:'#3f2f25'}}}>
      <Stack.Screen 
      name="Drawer" 
        component={DrawerNavigator}
        options={{
          headerShown:false
        }}
        />
      <Stack.Screen
       name="MealsOverview"
      component={MealsOverviewScreen} />
      <Stack.Screen name="MealDetail" component={MealDetailsScreen}
      >

      </Stack.Screen>
      </Stack.Navigator>
   </NavigationContainer>
   </Provider>
   {/* </FavoritesContextProvider> */}
  </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
