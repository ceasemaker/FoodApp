import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Header } from 'react-native-elements';

export default class TopBar extends React.Component{
	render(){

		return(
				<Header
					rightComponent={{ icon: 'menu', color: 'black' }}
					centerComponent={{ text: 'Chikafu', style: { color: 'black' } }}
					leftComponent={{ icon: 'home', color: 'black' }}
					backgroundColor={"yellow"}
				/>

			);

	}
}