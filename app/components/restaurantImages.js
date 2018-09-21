import React from 'react';
import {  Image, Text,StyleSheet,View ,Button,StatusBar,FlatList,TouchableOpacity,ImageBackground} from 'react-native';
import { Tile ,Icon} from 'react-native-elements';



export default class RestaurantImages extends React.Component{

	openClosed(randomNumber){
		if (randomNumber <0.2)
		{
			return "Closed"
		}
		else
		{
			return "Open";
		}

	};
	render(){
		const Restaurants =[
		{ 
			imageUrl: require("../images/restaurantLogos/bakersInn.jpg"),
			key:"Chicken Inn",
			caption:"Tap for menu",
			status:Math.random()
			
		},
		{ 
			imageUrl: require("../images/restaurantLogos/pizzaInn.jpg"),
			key:"Pizza Inn",
			caption:"Tap for menu",
			status:Math.random()
		},
		{ 
			imageUrl: require("../images/restaurantLogos/creamyInn.jpg"),
			key:"Creamy Inn",
			caption:"Tap for menu",
			status:Math.random()
		},
		{ 
			imageUrl: require("../images/restaurantLogos/bakersInn.jpg"),
			key:"Bakers Inn",
			caption:"Tap for menu",
			status:Math.random()
			
		},
		//added restaurants
		{ 
			imageUrl: require("../images/restaurantLogos/bakersInn.jpg"),
			key:"La Fontaine",
			caption:"Tap for menu",
			status:Math.random()
			
		},
		{ 
			imageUrl: require("../images/restaurantLogos/bakersInn.jpg"),
			key:"Miller's Restaurant",
			caption:"Tap for menu",
			status:Math.random()
			
		},
		{ 
			imageUrl: require("../images/restaurantLogos/bakersInn.jpg"),
			key:"Blue Banana",
			caption:"Tap for menu",
			status:Math.random()
			
		},
		{ 
			imageUrl: require("../images/restaurantLogos/bakersInn.jpg"),
			key:"Coimbara",
			caption:"Tap for menu",
			status:Math.random()
			
		},
		{ 
			imageUrl: require("../images/restaurantLogos/bakersInn.jpg"),
			key:"Paul's Place",
			caption:"Tap for menu",
			status:Math.random()
			
		},
		{ 
			imageUrl: require("../images/restaurantLogos/bakersInn.jpg"),
			key:"Alo Alo Restaurant",
			caption:"Tap for menu",
			status:Math.random()
			
		},
		{ 
			imageUrl: require("../images/restaurantLogos/bakersInn.jpg"),
			key:"Mojo's Restaurant",
			caption:"Tap for menu",
			status:Math.random()
			
		},
		{ 
			imageUrl: require("../images/restaurantLogos/bakersInn.jpg"),
			key:"Steak Out",
			caption:"Tap for menu",
			status:Math.random()
			
		},
		{ 
			imageUrl: require("../images/restaurantLogos/bakersInn.jpg"),
			key:"Steakhouse Butcher and Grill",
			caption:"Tap for menu",
			status:Math.random()
			
		},
			{ 
			imageUrl: require("../images/restaurantLogos/bakersInn.jpg"),
			key:"Italian Bakery",
			caption:"Tap for menu",
			status:Math.random()
			
		},
			{ 
			imageUrl: require("../images/restaurantLogos/bakersInn.jpg"),
			key:"Applegee's",
			caption:"Tap for menu",
			status:Math.random()
			
		},
		{ 
			imageUrl: require("../images/restaurantLogos/bakersInn.jpg"),
			key:"Sopranos",
			caption:"Tap for menu",
			status:Math.random()
			
		},
		{ 
			imageUrl: require("../images/restaurantLogos/bakersInn.jpg"),
			key:"Piccobello Pizzeria",
			caption:"Tap for menu",
			status:Math.random()
			
		},
		{ 
			imageUrl: require("../images/restaurantLogos/bakersInn.jpg"),
			key:"Vanilla Moon",
			caption:"Tap for menu",
			status:Math.random()
			
		},
		{ 
			imageUrl: require("../images/restaurantLogos/bakersInn.jpg"),
			key:"Tinkerbell Restaurant",
			caption:"Tap for menu",
			status:Math.random()
			
		},
		{ 
			imageUrl: require("../images/restaurantLogos/bakersInn.jpg"),
			key:"Da Eros Trattoria",
			caption:"Tap for menu",
			status:Math.random()
			
		},
		{ 
			imageUrl: require("../images/restaurantLogos/bakersInn.jpg"),
			key:"DV8",
			caption:"Tap for menu",
			status:Math.random()
			
		},
		{ 
			imageUrl: require("../images/restaurantLogos/bakersInn.jpg"),
			key:"Queen of Hearts Cafe",
			caption:"Tap for menu",
			status:Math.random()
			
		},
		{ 
			imageUrl: require("../images/restaurantLogos/bakersInn.jpg"),
			key:"Peppers Restaurant",
			caption:"Tap for menu",
			status:Math.random()
			
		},
		{ 
			imageUrl: require("../images/restaurantLogos/bakersInn.jpg"),
			key:"PaGokoro African Cuisine",
			caption:"Tap for menu",
			status:Math.random()
			
		},
		{ 
			imageUrl: require("../images/restaurantLogos/bakersInn.jpg"),
			key:"Fusion Café Bar",
			caption:"Tap for menu",
			status:Math.random()
			
		},
		{ 
			imageUrl: require("../images/restaurantLogos/bakersInn.jpg"),
			key:"Shangri-La",
			caption:"Tap for menu",
			status:Math.random()
			
		},




















		];
		return(

			<View>
			<StatusBar barStyle="light-content"/>
			<FlatList
			data={Restaurants}
			renderItem={
				({item}) => <TouchableOpacity style={styles.container} onPress={()=> this.props.navigation.navigate('Menu',{title: item.key,imageUrl: item.imageUrl})}>
								<Image
									style={styles.images}
									title={item.key}
									source={item.imageUrl}
									onPress={()=> this.props.navigation.navigate('Menu',{title: item.key,imageUrl: item.imageUrl})}
								/> 
								<View style={styles.restaurantNameContainer}> 
								<Text style={styles.title}>{`${item.key}`} </Text>
								<Text style={styles.OpenClosed} >{this.openClosed(item.status)} </Text>

								</View>
								<View><Icon   name='edit-location'/> <Text> {Math.round(Math.random()*10,2)}km </Text> </View>
								</TouchableOpacity>
						}
			/>
			
			</View>
			

			);
	}
}


// \n ${if(item.status <0.5){<Text> Hello</Text>}else {<Text>Hello </Text>}}


const styles = StyleSheet.create({
  container: {    
  	alignItems: 'center',
    borderTopColor: 'black',
    borderTopWidth: 1,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 100,

  },
  images:{
  	marginTop:2,
  	marginBottom:2,
  	width: 80,
  	height: 80,
  	borderRadius:40 ,
  	margin: 10  	
  },

  title: {
  	fontStyle: 'italic' ,
  	fontSize: 30
  },
  OpenClosed:{
  	fontSize: 15,
  	marginTop: 7
  },
  restaurantNameContainer:{
  	flex:1 ,
  	flexDirection: 'column' ,
  	justifyContent: 'flex-start'// 'flex-end' 'center' 'space-between' 'space-around' 

  }




});


