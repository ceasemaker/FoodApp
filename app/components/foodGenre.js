import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  StatusBar,
  ImageBackground,
  TouchableOpacity
} from 'react-native';
import GridLayout from 'react-native-layout-grid';
 
export default class FoodGenre extends Component<{}> {
 
  renderGridItem = (Restaurants) => (
   
      <TouchableOpacity onPress={()=>this.props.navigation.navigate('RetaurantImages')}>
      <ImageBackground source={Restaurants.imageUrl} style={{height: 130,borderRadius: 20,justifyContent: 'center',alignItems: 'center',borderTopRightRadius: 30,}}>  	
      <Text style={styles.name} >
        {Restaurants.title}
      </Text>
      </ImageBackground>
      </TouchableOpacity>

 
  );
 
  render() {
  	const Restaurants =[
		{ 
			imageUrl: require("../images/genreImages/traditional.jpg"),
			title:"Traditional", 
			nextScreen: "RestaurantImages"
		},
		{ 
			imageUrl: require("../images/genreImages/fastFood.jpg"),
			title:"Fast Food", 
			nextScreen: "RestaurantImages"
		},
		{ 
			imageUrl: require("../images/genreImages/burgers.jpg"),
			title:"Burgers", 
			nextScreen: "RestaurantImages"
		},
		{ 
			imageUrl: require("../images/genreImages/pizza.jpg"),
			title:"Pizza",
			nextScreen: "RestaurantImages"
			
		},	
		{ 
			imageUrl: require("../images/genreImages/mexican.jpg"),
			title:"Mexican",
			nextScreen: "RestaurantImages"
			
		},	
		{ 
			imageUrl: require("../images/genreImages/italian.jpg"),
			title:"Italian",
			nextScreen: "RestaurantImages"
			
		},	

		];

   
    return (
     
      <View style={styles.container}>     
        <StatusBar barStyle="dark-content"/>
      <TouchableOpacity onPress={()=>this.props.navigation.navigate('RetaurantImages')}>
      <ImageBackground source={require("../images/genreImages/allRestaurants.jpg")} style={{width: '100%' ,height: 300}}>
        <Text style={styles.welcome}>
          Restaurants
        </Text>
        </ImageBackground>
         </TouchableOpacity>
        <View style={styles.flex}>
          <GridLayout
            items={Restaurants}
            itemsPerRow={2}
            renderItem={this.renderGridItem}


          />
        </View>
         <StatusBar barStyle="light-content"/>
      </View>
    );
  }
}
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  welcome: {
    fontSize: 40,
    color: '#fff',
    textAlign: 'center',
    alignItems:  'center' , 
    marginTop:  100,
    backgroundColor: 'black',
    borderRadius: 30,
    opacity: 0.7
  },
  flex: {
    flex: 1,
  },
  item: {
    height: 150,
    backgroundColor: '#CCCCCC',
    borderRadius: 50
    
  },
  name: {
    fontSize: 30,
    textAlign: 'center',
    color: '#fff',
    textAlignVertical:  'center' ,
    justifyContent:  'center' ,
    backgroundColor: 'black',
    width: '100%',
    opacity: 0.7
  },
});