import React from 'react';
import { ScrollView, Image, Text,StyleSheet,View ,Button,StatusBar} from 'react-native';
import { Tile } from 'react-native-elements';



export default class RestaurantImages extends React.Component{
	render(){
		const Restaurants =[
		{ 
			imageUrl: require("../images/restaurantLogos/chickenInn.jpeg"),
			title:"Chicken Inn",
			caption:"Tap for menu" 
		},
		{ 
			imageUrl: require("../images/restaurantLogos/pizzaInn.jpg"),
			title:"Pizza Inn",
			caption:"Tap for menu" 
		},
		{ 
			imageUrl: require("../images/restaurantLogos/creamyInn.jpg"),
			title:"Creamy Inn",
			caption:"Tap for menu" 
		},
		{ 
			imageUrl: require("../images/restaurantLogos/bakersInn.jpg"),
			title:"Bakers Inn",
			caption:"Tap for menu"
			
		},


	

		];
		return(

			<ScrollView>
			<StatusBar barStyle="light-content"/>
		

			
			
			{	Restaurants.map((l,i) =>(
									<Tile 
									// Image dimensions are 370 by 300 
									key={i}
									imageSrc={ l.imageUrl}
										  title={l.title}
										  featured
										  caption={l.caption}				  
										  containerStyle={{marginBottom:10, width:"100%"}}
										  onPress={()=> this.props.navigation.navigate('Menu',{title: l.title})} />
						))}
			
			
			</ScrollView>
			

			);
	}
}





const styles = StyleSheet.create({
  container: {    
    alignItems: 'center',
    justifyContent: 'center'
  },
  images:{
  	marginTop:2,
  	marginBottom:2
  }
});


