import React from 'react';
import {View,Button, Text, Alert, StyleSheet,ScrollView,ImageBackground,TextInput,StatusBar} from 'react-native';
import RadioBox from './radioBoxDrinks';
import RadioBoxOptions1 from './radioBoxOptions1';



export default class OrderScreen1 extends React.Component{


  constructor(props) {
    super(props);
    this.state = { text: 'Useless Placeholder' };
  }





	render(){

		    const { navigation } = this.props;
		    const mealName = navigation.getParam('mealName', 'NO-ID');
		    const mealDescription = navigation.getParam('mealDescription', 'some default value');
		    const foodUrl = navigation.getParam('foodUrl','Home');
		return(
			<ScrollView contentContainerStyle={styles.scrollViewStyle}>
			<StatusBar barStyle="light-content"/>
			<ImageBackground source={foodUrl}  style={{width: '100%', height: 300,paddingTop: 20}}>

			<View>
			<Text style={styles.foodName}>{mealName}</Text>
			<Text style={styles.foodDescription}>{mealDescription}</Text>
			</View>
			</ImageBackground>

			<View style={styles.foodChoices}>
				<RadioBox/>
			</View>

			<View style={styles.foodChoices}>
				<RadioBoxOptions1/>
			</View>


		<View style={{padding: 20}}>
					 <TextInput
					        style={styles.textInputBox}
					        onChangeText={(text) => this.setState({text})}
					        placeholder="Any extra instructions?"
					        multiline = {true}
					        
					      />
			</View>

			<View style={styles.buttonStyle}>
			<Button title="-" color="black" onPress={()=>{Alert.alert("Testing")}}/>
			<Button title="+" color="black" onPress={()=>{Alert.alert("Still Testing")}}/>
			</View>
			</ScrollView>

			);

	}
}

const styles =StyleSheet.create({

	scrollViewStyle:{
		alignItems: 'center'  

	},
	buttonStyle: 
	{
			margin: 20,
		    flexDirection: 'row',
		    justifyContent: 'center',
		    borderColor:'black',
		    alignItems:'center'
	},
	foodName: {
		fontSize:35,
		alignItems:"flex-start",
		color:"#fff",
		},
	foodDescription:{
		fontSize:20 ,
		bottom:0,
		color:"#fff",
		paddingTop: 100, 
		paddingLeft: 10,
		textAlignVertical: 'bottom',
		fontFamily: 'DevanagariSangamMN-Bold'
	},
	foodChoices: {
		backgroundColor: '#F0F0F0',
		width: 350,
		borderColor: 'black',
		borderRadius: 20,			
		marginTop: 20  ,
		shadowColor: 'black',
		shadowOffset: {
			width: 5,
			height: 5
		},
		shadowRadius: 5,
		shadowOpacity: 1
	},

	textInputBox:{
		padding: 5,
		backgroundColor: '#fff',
		height: 200,
		width: 350,
		borderRadius: 10,
		textAlignVertical: "top",
		shadowColor: 'gray',
		shadowOffset: {
			width: 5,
			height: 5
		},
		shadowRadius: 5,
		shadowOpacity: 1,
		justifyContent: 'flex-start',
		fontSize: 20,


	}

})