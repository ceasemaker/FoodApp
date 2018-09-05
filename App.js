import React from 'react';
import { StyleSheet, Text, View ,Button} from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

//Import Views here
import TopBar from './app/components/header';
import RestaurantImage from './app/components/restaurantImages';
import Menu from './app/components/restaurantMenus/chickenInn/menu';
import UserLogin from './app/components/userLogin';
import OrderScreen1 from './app/components/restaurantMenus/chickenInn/orderScreens/orderScreen1';



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
// <RestaurantImage />  <Menu/> <UserLogin /> <TopBar/>
const RootStack = createStackNavigator(
{
  Home: RestaurantImage ,
  Menu: Menu,
  OrderScreen:OrderScreen1

  },
  {initialRouteName: 'Home'
   }
);

  createBottomTabNavigator({
  Home: RestaurantImage,
  Menu: Menu,
});