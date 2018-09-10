import React from 'react';
import { StyleSheet, Text, View ,Button} from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

//Import Views here
import RestaurantImage from './app/components/restaurantImages';
import Menu from './app/components/restaurantMenus/chickenInn/menu';
import UserLogin from './app/components/userLogin';
import OrderScreen1 from './app/components/restaurantMenus/chickenInn/orderScreens/orderScreen1';
import FoodGenre from './app/components/foodGenre';



 export default  class App extends React.Component {
  render() {
    return (<RootStack />);
  }
}





const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const RootStack = createStackNavigator({

  Home: {
    screen: FoodGenre ,
    navigationOptions: () => ({
      header: null
    }),
  },


  RetaurantImages:{ 
    screen: RestaurantImage,
     navigationOptions: () => ({
      header: null
    }), 
  },
  Menu: {
    screen: Menu,
    navigationOptions: ({ navigation }) => {
      return {
            title: navigation.getParam('title', 'A Nested Details Screen')
          };
        }, 

  },
  OrderScreen: {
    screen: OrderScreen1,
    navigationOptions: () => ({
      header: null,
    }), 
  },
  
 });

