import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

import RadioGroup from 'react-native-radio-buttons-group';

export default class RadioBoxOptions1 extends React.Component {
    state = {
        data: [
            {
                label: 'Chips',
                value: null
            },
            {
                label: 'Salad',
                value: 1,
                color: 'black'
            },
        ],
    };

    // update state
    onPress = data => this.setState({ data });

    render() {
        let selectedButton = this.state.data.find(e => e.selected == true);
        //SELECTEDBUTTON IS WHAT YOU PASS ON AS A PROP TO NEXT COMPONENT AS IT CONTATAINT THE VALUE OF THE SELECTED BUTTON
        selectedButton = selectedButton ? selectedButton.value : this.state.data[0].label;
        return (
            <View style={styles.container}>
                
                <RadioGroup radioButtons={this.state.data} onPress={this.onPress} />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
       // alignItems: 'center',
        alignItems: 'flex-start', 
        justifyContent: 'flex-start',


    }
});