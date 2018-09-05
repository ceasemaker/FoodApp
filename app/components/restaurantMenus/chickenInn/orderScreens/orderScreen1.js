import React from 'react';
import {View,Button, Text, Alert, StyleSheet,ScrollView,ImageBackground} from 'react-native';
import {CheckBox} from 'react-native-elements';


export default class OrderScreen1 extends React.Component{
state=({
	checked:false
});





	render(){

		    const { navigation } = this.props;
		    const mealName = navigation.getParam('mealName', 'NO-ID');
		    const mealDescription = navigation.getParam('mealDescription', 'some default value');
		    const foodUrl = navigation.getParam('foodUrl','Home');
		return(
			<ScrollView>
			<ImageBackground source={foodUrl}  style={{width: '100%', height: 300}}>

			<View>
			<Text style={styles.foodName}>{mealName}</Text>
			<Text style={styles.foodDescription}>{mealDescription}</Text>
			</View>
			</ImageBackground>





				<CheckBox
					  center
					  title='Click Here'
					  checkedIcon='dot-circle-o'
					  uncheckedIcon='circle-o'
					  checked={this.state.checked}
				/>
					<CheckBox
					  center
					  title='Click Here'
					  checkedIcon='dot-circle-o'
					  uncheckedIcon='circle-o'
					  checked={this.state.checked}
					  onPress={()=>{this.setState({checked:true})}}
				/>
					<CheckBox
					  center
					  title='Click Here'
					  checkedIcon='dot-circle-o'
					  uncheckedIcon='circle-o'
					  checked={true}
					  onPress={()=>{if(this.state.checked===true){this.setState({checked:false})} else{
					  	this.setState({checked:true})
					  }
					  }
					}

				/>

			<View style={styles.buttonStyle}>
			<Button title="-" color="black" onPress={()=>{Alert.alert("Ezrin")}}/>
			<Button title="+" color="black" onPress={()=>{Alert.alert("Nyasha")}}/>
			</View>
			</ScrollView>

			);

	}
}

const styles =StyleSheet.create({
	buttonStyle: 
	{
			margin: 20,
		    flexDirection: 'row',
		    justifyContent: 'center',
		    borderColor:'black',
		    alignItems:'center'
	},
	foodName: {
		fontSize:30,
		alignItems:"flex-start",
		color:"#fff",
		},
	foodDescription:{
		fontSize:15 ,
		bottom:0,
		color:"#fff"
	}
})