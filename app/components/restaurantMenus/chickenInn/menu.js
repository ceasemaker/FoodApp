import React from 'react';
import { ListItem } from 'react-native-elements'
import { ScrollView, Image, Text,StyleSheet,View ,ImageBackground, StatusBar} from 'react-native';



export default class Menu extends React.Component{

render () {
	const list = [
  {
    name: 'Chicken Fillet',
    description: 'Deep fried chicken with a side of  chips, mushroom sause and potato wedges',
    price:'$3',
    orderScreen:'OrderScreen',
    foodUrl: require('../../../images/restaurantLogos/bakersInn.jpg') 
  },
  {
    name: '2 Piece',
    description: 'Two pieces of chiken drumsticks served with drumsticks and chips',
    price:'$9',
    orderScreen:'OrderScreen',
    foodUrl: require('../../../images/restaurantLogos/bakersInn.jpg') 
  }
  ,
  {
    name: '3 Piece',
    description: 'Three pieces of chiken drumsticks served with drumsticks and chips',
    price:'$7',
    orderScreen:'OrderScreen',
    foodUrl: require('../../../images/restaurantLogos/bakersInn.jpg') 
  },
  {
    name: 'Lunch box',
    description: 'Sadza two pieces of chicken and gravy on the side with a drink',
    price:'$3',
    orderScreen:'OrderScreen',
    foodUrl: require('../../../images/restaurantLogos/bakersInn.jpg') 
  },
  {
    name: ' Bucket',
    description: '21 mixed pieces of chicken with 4 portions of chipsand 4 large 2l cokes',
    price:'$5',
    orderScreen:'OrderScreen',
    foodUrl: require('../../../images/restaurantLogos/bakersInn.jpg') 
  }, {
    name: 'Chicken Fillet',
    description: 'Deep fried chicken with a side of  chips, mushroom sause and potato wedges',
    price:'$3'
  ,
  orderScreen:'OrderScreen',
  foodUrl: require('../../../images/restaurantLogos/bakersInn.jpg') 
  },
  {
    name: '2 Piece',
    description: 'Two pieces of chiken drumsticks served with drumsticks and chips',
    price:'$9',
    orderScreen:'OrderScreen',
    foodUrl: require('../../../images/restaurantLogos/bakersInn.jpg') 
  }
  ,
  {
    name: '3 Piece',
    description: 'Three pieces of chiken drumsticks served with drumsticks and chips',
    price:'$7',
    orderScreen:'OrderScreen',
    foodUrl: require('../../../images/restaurantLogos/bakersInn.jpg') 
  },
  {
    name: 'Lunch box',
    description: 'Sadza two pieces of chicken and gravy on the side with a drink',
    price:'$3',
    orderScreen:'OrderScreen',
    foodUrl: require('../../../images/restaurantLogos/bakersInn.jpg') 
  },
  {
    name: ' Bucket',
    description: '21 mixed pieces of chicken with 4 portions of chipsand 4 large 2l cokes',
    price:'$5',
    orderScreen:'OrderScreen',
    foodUrl: require('../../../images/restaurantLogos/bakersInn.jpg') 
  },
   {
    name: 'Chicken Fillet',
    description: 'Deep fried chicken with a side of  chips, mushroom sause and potato wedges',
    price:'$3'
  ,
  orderScreen:'OrderScreen',
  foodUrl: require('../../../images/restaurantLogos/bakersInn.jpg') 
  },
  {
    name: '2 Piece',
    description: 'Two pieces of chiken drumsticks served with drumsticks and chips',
    price:'$9',
    orderScreen:'OrderScreen',
    foodUrl: require('../../../images/restaurantLogos/bakersInn.jpg') 
  }
  ,
  {
    name: '3 Piece',
    description: 'Three pieces of chiken drumsticks served with drumsticks and chips',
    price:'$7',
    orderScreen:'OrderScreen',
    foodUrl: require('../../../images/restaurantLogos/bakersInn.jpg') 
  },
  {
    name: 'Lunch box',
    description: 'Sadza two pieces of chicken and gravy on the side with a drink',
    price:'$3',
    orderScreen:'OrderScreen',
    foodUrl: require('../../../images/restaurantLogos/bakersInn.jpg') 
  },
  {
    name: ' Bucket',
    description: '21 mixed pieces of chicken with 4 portions of chipsand 4 large 2l cokes',
    price:'$5',
    orderScreen:'OrderScreen',
    foodUrl: require('../../../images/restaurantLogos/bakersInn.jpg') 
  }
  // more items
  ];
  const { navigation } = this.props;
  const imageUrl = navigation.getParam("imageUrl", 'NO-ID');

  return (
  	<ImageBackground source={require('../../../images/backgroundImage/greyImage.jpg')} style={{width: '100%', height: '100%'}}>
  	<ScrollView >
    <Image source={imageUrl} style={{width: '100%',height:250 }}/>

    <StatusBar barStyle="light-content"/>

  

  	
  {
    list.map((l, i) => (
      <ListItem
        key={i}
        title={l.name}
        subtitle={l.description}
        badge={{ value: l.price, textStyle: { color: 'orange' }, containerStyle: { marginTop: -20 } }}
        subtitleStyle={{color:'black'}}
        onPress={()=> this.props.navigation.navigate(l.orderScreen,{ mealName:l.name,
                                                                      mealDescription:l.description,
                                                                       foodUrl:l.foodUrl }) }
      />
    ))
  }
  
</ScrollView>
</ImageBackground>
  );
}

}

const styles = StyleSheet.create({
  subtitleView: {
    flexDirection: 'row',
    paddingLeft: 10,
    paddingTop: 5
  },
  ratingImage: {
    height: 19.21,
    width: 100
  },
  ratingText: {
    paddingLeft: 10,
    color: 'grey'
  },
  container: {
    position: 'relative'
  },
  fixed: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  }


})