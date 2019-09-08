import {
    AppRegistry,
    Text,
    View,
    StyleSheet
} from "react-360"
import React from 'react'


export default class Networking extends React.Component {
    render () {
        return (
            <View>
                <View style={styles.top1 }>
                    <Text style={styles.title}>
                        Resources
                    </Text>
                </View>
                <View style={styles.top2}>
                    <Text style={styles.title}>
                        Communities
                    </Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    top1: {
        backgroundColor:'black',
        width:420,
        height:140,
        transform:[
            { translateX: 150 },
            { translateY: -20 }
        ],
        justifyContent:'center',
        alignItems:'center'
    },
    top2: {
        backgroundColor:'black',
        width:420,
        height:150,
        transform:[
            { translateX: 150 },
            { translateY: -80 }
        ],
        justifyContent:'center',
        alignItems:'center'
    },
    title: {
        padding: 8,
        fontSize: 70
    }
})

AppRegistry.registerComponent('Networking', () => Networking);
