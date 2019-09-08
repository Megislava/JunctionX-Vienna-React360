import {AppRegistry, StyleSheet, Text, View, VrButton} from "react-360"
import {changeBackground} from "../changeBackground"
import Hat from "../Hat"
import React from 'react'

export default class Start extends React.Component {
    render () {
        return (
            <View>
                <View style={styles.panel}>
                    <View style={styles.top}>
                        <Text style={styles.greeting}>
                            Wanna be a
                        </Text>
                        <View style={styles.smallBox}>
                            <Text style={styles.hatText}>
                                hat?
                            </Text>
                        </View>
                    </View>
                    <View style={styles.bottom}>
                        <VrButton
                            onClick={this.props.toggleStart}
                            style={styles.button}>
                            <Text style={styles.yes}>
                                Yes!
                            </Text>
                        </VrButton>
                    </View>
                </View>
            </View>
        )
    }
};

const styles = StyleSheet.create({
    panel: {
        width: 600,
        height: 600,
        justifyContent: 'center',
        alignItems: 'center',
    },
    top: {
        width: 600,
        height: 300,
        backgroundColor: '#000000',
        justifyContent: 'center',
        alignItems: 'center',
    },
    smallBox: {
        width: 300,
        height: 300,
        borderColor: 'black',
        borderWidth: 2,
        transform: [
            { translateX: 450 },
            { translateY: 49 }
        ],
        justifyContent: 'center',
        alignItems: 'center',
    },
    greeting: {
        fontSize: 80,
        zIndex: 2,
        top:150
    },
    hatText: {
        fontSize: 80,
        color: 'black',
        marginTop:130
    },
    bottom: {
        marginTop: 80,
        width: 200,
        height: 180,
        backgroundColor: '#000000',
        justifyContent: 'center',
        alignItems: 'center',
        transform: [
            { translateX: 200 },
        ]
    },
    yes: {
        color: 'white',
        fontSize: 80
    }
});

AppRegistry.registerComponent('Hat', () => Hat)
AppRegistry.registerComponent('Start', () => Start)

