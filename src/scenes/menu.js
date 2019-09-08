import {AppRegistry, StyleSheet, Text, View, VrButton} from "react-360"
import React from 'react';

export default class Menu extends React.Component {
    render () {
        return (
            <View>
                <View style={styles.top}>
                    <Text style={styles.title}>
                        Learn:
                    </Text>
                </View>
                <View style={styles.cell1}>
                    <VrButton onClick={this.props.toggleMenu}>
                        <Text style={styles.text}>Networking</Text>
                    </VrButton>
                    </View>
                <View style={styles.cell2}>
                    <VrButton onClick={this.props.toggleMenu}>
                        <Text style={styles.text}>Operation System</Text>
                    </VrButton>
                    </View>
                <View style={styles.cell3}>
                    <VrButton onClick={this.props.toggleMenu}>
                        <Text style={styles.text}>Hacking</Text>
                    </VrButton>
                </View>
            </View>
        )
    }
};

const styles = StyleSheet.create({
    top: {
        width: 290,
        height: 150,
        backgroundColor: '#000000',
        justifyContent: 'center',
        alignItems: 'center',
        transform: [
            { translateX: 95 },
            { translateY: -40 }
        ],
    },
    title: {
        fontSize: 70,
    },
    cell1:{
        width:345,
        backgroundColor:'black',
        padding:7,
        transform:[
            { translateY: -90 }
        ],
    },
    cell2:{
        backgroundColor:'black',
        padding: 7,
        transform:[
            { translateX: 205 },
            { translateY: -110 }
        ],
    },
    cell3:{
        width:250,
        backgroundColor:'black',
        padding: 7,
        transform:[
            { translateX: 600 },
            { translateY: -125 },
        ],
    },
    text: {
        fontSize: 70,
    }
})

AppRegistry.registerComponent('Menu', () => Menu);
