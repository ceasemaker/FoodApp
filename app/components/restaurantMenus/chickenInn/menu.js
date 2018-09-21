import React from 'react';
import { Badge } from 'react-native-elements'
import { ScrollView, Image, Text,StyleSheet,View ,ImageBackground, StatusBar, SectionLis, TouchableOpacity, SectionList} from 'react-native';



export default class Menu extends React.Component{

render () {
	const list = [
  {
    title: "Soups and Salads",
   data: [
          { name: 'Tomato Fish Soup',
           description: 'Tomato & Med herb soup with white fish pieces',
           price:"$"+ `${Math.round(Math.random()*18) +3}`,
           orderScreen:'OrderScreen',
           foodUrl: require('../../../images/restaurantLogos/bakersInn.jpg')},

           { name: 'Creamy Salmon Soup',
           description: 'Creamy soup with salmon and potato pieces',
           price:"$"+ `${Math.round(Math.random()*18) +3}`,
           orderScreen:'OrderScreen',
           foodUrl: require('../../../images/restaurantLogos/bakersInn.jpg')},
           
           { name: 'Vintage Salad For 1',
           description: '',
           price:"$"+ `${Math.round(Math.random()*18) +3}`,
           orderScreen:'OrderScreen',
           foodUrl: require('../../../images/restaurantLogos/bakersInn.jpg')},

           { name: 'Vintage Table Salad',
           description: '',
           price:"$"+ `${Math.round(Math.random()*18) +3}`,
           orderScreen:'OrderScreen',
           foodUrl: require('../../../images/restaurantLogos/bakersInn.jpg')},
           
           { name: 'Med Veg Salad',
           description: 'Roasted Mediterranean vegetable with halloumi cheese',
           price:"$"+ `${Math.round(Math.random()*18) +3}`,
           orderScreen:'OrderScreen',
           foodUrl: require('../../../images/restaurantLogos/bakersInn.jpg')},
           
           { name: 'Seared Salmon Salad',
           description: '70g salmon or tuna with fresh avom ponzu (soy & cirtus) sauce & sesame seeds',
           price:"$"+ `${Math.round(Math.random()*18) +3}`,
           orderScreen:'OrderScreen',
           foodUrl: require('../../../images/restaurantLogos/bakersInn.jpg')},
           ] 
  },

  {
    title: "Starters & Meze",
    data:[
           { name: 'Fresh Oysters (1/ 12)',
           description: 'Subject to availability',
           price:"$"+ `${Math.round(Math.random()*18) +3}`,
           orderScreen:'OrderScreen',
           foodUrl: require('../../../images/restaurantLogos/bakersInn.jpg')},
           
           { name: 'Mussels',
           description: 'In lemmon garlic sauce',
           price:"$"+ `${Math.round(Math.random()*18) +3}`,
           orderScreen:'OrderScreen',
           foodUrl: require('../../../images/restaurantLogos/bakersInn.jpg')},
           
           { name: 'Mussels',
           description: 'In a tomato based Mediterranean sauce',
           price:"$"+ `${Math.round(Math.random()*18) +3}`,
           orderScreen:'OrderScreen',
           foodUrl: require('../../../images/restaurantLogos/bakersInn.jpg')},
           
           { name: 'Firecracker Squid',
           description: 'Tender squid meat in a crisp crust with a touch of chilli',
           price:"$"+ `${Math.round(Math.random()*18) +3}`,
           orderScreen:'OrderScreen',
           foodUrl: require('../../../images/restaurantLogos/bakersInn.jpg')},
           
           { name: 'Calamari',
           description: 'Grilled / Fried',
           price:"$"+ `${Math.round(Math.random()*18) +3}`,
           orderScreen:'OrderScreen',
           foodUrl: require('../../../images/restaurantLogos/bakersInn.jpg')},
           
           { name: 'Calamari Bowl',
           description: 'Grilled calamari tossed in a Med salsa topped with rocket',
           price:"$"+ `${Math.round(Math.random()*18) +3}`,
           orderScreen:'OrderScreen',
           foodUrl: require('../../../images/restaurantLogos/bakersInn.jpg')},
           
           { name: 'Crumbed Prawn Tails',
           description: 'Served with herb mayo',
           price:"$"+ `${Math.round(Math.random()*18) +3}`,
           orderScreen:'OrderScreen',
           foodUrl: require('../../../images/restaurantLogos/bakersInn.jpg')},
           
           { name: 'Spanish Anchovies',
           description: 'Served with Med salsa',
           price:"$"+ `${Math.round(Math.random()*18) +3}`,
           orderScreen:'OrderScreen',
           foodUrl: require('../../../images/restaurantLogos/bakersInn.jpg')},

           { name: 'Salmon Bites',
           description: 'Crumbless grilled salmon & trout cakes',
           price:"$"+ `${Math.round(Math.random()*18) +3}`,
           orderScreen:'OrderScreen',
           foodUrl: require('../../../images/restaurantLogos/bakersInn.jpg')},
           
           { name: 'Zuccini Fritters',
           description: '',
           price:"$"+ `${Math.round(Math.random()*18) +3}`,
           orderScreen:'OrderScreen',
           foodUrl: require('../../../images/restaurantLogos/bakersInn.jpg')},
           
           { name: 'Mediterranean Salsa',
           description: '',
           price:"$"+ `${Math.round(Math.random()*18) +3}`,
           orderScreen:'OrderScreen',
           foodUrl: require('../../../images/restaurantLogos/bakersInn.jpg')},
           
           { name: 'Tzatziki or Tarama',
           description: '',
           price:"$"+ `${Math.round(Math.random()*18) +3}`,
           orderScreen:'OrderScreen',
           foodUrl: require('../../../images/restaurantLogos/bakersInn.jpg')},
           
           { name: 'Olives or Feta',
           description: '',
           price:"$"+ `${Math.round(Math.random()*18) +3}`,
           orderScreen:'OrderScreen',
           foodUrl: require('../../../images/restaurantLogos/bakersInn.jpg')},
           
    ]
  },

  {
    title: "Calamari",
    data: [

           { name: 'Calamri',
           description: '',
           price:"$"+ `${Math.round(Math.random()*18) +3}`,
           orderScreen:'OrderScreen',
           foodUrl: require('../../../images/restaurantLogos/bakersInn.jpg')},
           
           { name: 'Calamari 3 Ways',
           description: 'Grilledm fried and cajuan-style',
           price:"$"+ `${Math.round(Math.random()*18) +3}`,
           orderScreen:'OrderScreen',
           foodUrl: require('../../../images/restaurantLogos/bakersInn.jpg')},
           
           { name: 'Calamari Steak',
           description: '',
           price:"$"+ `${Math.round(Math.random()*18) +3}`,
           orderScreen:'OrderScreen',
           foodUrl: require('../../../images/restaurantLogos/bakersInn.jpg')}

    ]
  },

  {
    title: "Fish",
    data: [

           
           { name: 'Famous Fish & Chips (200g)',
           description: 'All time favourite hake',
           price:"$"+ `${Math.round(Math.random()*18) +3}`,
           orderScreen:'OrderScreen',
           foodUrl: require('../../../images/restaurantLogos/bakersInn.jpg')},
           
           { name: 'OB Fish & Chips',
           description: 'Basa best served fried',
           price:"$"+ `${Math.round(Math.random()*18) +3}`,
           orderScreen:'OrderScreen',
           foodUrl: require('../../../images/restaurantLogos/bakersInn.jpg')},

           {name: 'Tilapia',
           description: 'Light meal, topped with spicy butter served with paprika sweet potato coated. This fish is a sustainable fresh water option.',
           price:"$"+ `${Math.round(Math.random()*18) +3}`,
           orderScreen:'OrderScreen',
           foodUrl: require('../../../images/restaurantLogos/bakersInn.jpg')},
           
           { name: 'Kinglip (200g)',
           description: '',
           price:"$"+ `${Math.round(Math.random()*18) +3}`,
           orderScreen:'OrderScreen',
           foodUrl: require('../../../images/restaurantLogos/bakersInn.jpg')},
           
           { name: 'Kinglip (300g)',
           description: '',
           price:"$"+ `${Math.round(Math.random()*18) +3}`,
           orderScreen:'OrderScreen',
           foodUrl: require('../../../images/restaurantLogos/bakersInn.jpg')},
           
           { name: 'Speciality Fish',
           description: 'dorado or yellowtail, depending on availability',
           price:"$"+ `${Math.round(Math.random()*18) +3}`,
           orderScreen:'OrderScreen',
           foodUrl: require('../../../images/restaurantLogos/bakersInn.jpg')},
           
           { name: 'Sole (180g)',
           description: '',
           price:"$"+ `${Math.round(Math.random()*18) +3}`,
           orderScreen:'OrderScreen',
           foodUrl: require('../../../images/restaurantLogos/bakersInn.jpg')},
           
           { name: 'Grilled Salmon (200g)',
           description: '',
           price:"$"+ `${Math.round(Math.random()*18) +3}`,
           orderScreen:'OrderScreen',
           foodUrl: require('../../../images/restaurantLogos/bakersInn.jpg')},
           
           { name: 'Grilled Tuna (200g)',
           description: '',
           price:"$"+ `${Math.round(Math.random()*18) +3}`,
           orderScreen:'OrderScreen',
           foodUrl: require('../../../images/restaurantLogos/bakersInn.jpg')},
           
           
    ]
  },

{
  title: "Pick of Season",
  data: [
           { name: 'Siler Warehou Goujons',
           description: '(to nibble on) Golder battered fillet pieces deep fried served with zesty mayo',
           price:"$"+ `${Math.round(Math.random()*18) +3}`,
           orderScreen:'OrderScreen',
           foodUrl: require('../../../images/restaurantLogos/bakersInn.jpg')},


           { name: 'Silver Warehou  Fillet',
           description: 'Thick fillet pieces grilled with spicy butter, seved with a side of your choice',
           price:"$"+ `${Math.round(Math.random()*18) +3}`,
           orderScreen:'OrderScreen',
           foodUrl: require('../../../images/restaurantLogos/bakersInn.jpg')},

  ]
}

  

  // more items
  ];
  const { navigation } = this.props;
  const imageUrl = navigation.getParam("imageUrl", 'NO-ID');

  return (
  	<ImageBackground source={require('../../../images/backgroundImage/greyImage.jpg')} style={{width: '100%', height: '100%'}}>
  	
    <Image source={imageUrl} style={{width: '100%',height:250 }}/>

    <StatusBar barStyle="light-content"/>

 <SectionList
          sections={list}
          renderItem={({item}) => <TouchableOpacity style={styles.container}
                                      onPress={()=> this.props.navigation.navigate(item.orderScreen,{ mealName:item.name,
                                                                                                      mealDescription:item.description,
                                                                                                      foodUrl:item.foodUrl }) }>

                                    <View style={{flexDirection: 'column'} }>
                                    <Text style={styles.item}>{item.name}</Text>
                                    <Text style={styles.description}>{item.description}</Text>
                                    </View>

                                    <View style={{borderRadius: 1 }}>
                                    <Badge containerStyle={{marginRight: 2,justifyContent:  'center' ,justifyContent:  'center'}} value={item.price} textStyle={{color: 'orange',width: 26}}/>
                                    </View>


                                  </TouchableOpacity> }

          renderSectionHeader={({section}) => <Text style={styles.sectionHeader}>{section.title}</Text>}
          keyExtractor={(item, index) => index}
        />

</ImageBackground>
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


  },
  sectionHeader: {
    paddingTop: 2,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 2,
    fontSize: 14,
    fontWeight: 'bold',
    backgroundColor: 'rgba(247,247,247,1.0)',
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
  description:{
    fontSize: 15,
    fontStyle: 'italic' ,
    width: 300,
    marginLeft: 5,
  },
  price:{
    fontSize: 15,
    width: 30,
    height: 20,
    borderRadius: 20,
    backgroundColor: '#fff',
    borderTopLeftRadius: 50,
    marginRight: 20,
  }
})
