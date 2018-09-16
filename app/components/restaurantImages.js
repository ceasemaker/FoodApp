import React from 'react';
import {  Image, Text,StyleSheet,View ,Button,StatusBar,FlatList,TouchableOpacity,ImageBackground} from 'react-native';
import { Tile ,Icon} from 'react-native-elements';



export default class RestaurantImages extends React.Component{
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
								/> <Text style={styles.title}>{`${item.key} \n ${if(item.status <0.5){<Text> Hello</Text>}else {<Text>Hello </Text>}} `} </Text>
								<View><Icon   name='edit-location'/> <Text> {Math.round(Math.random()*10,2)}km </Text> </View>
								</TouchableOpacity>
						}
			/>
			
			</View>
			

			);
	}
}





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
  	fontSize: 5
  }




});


