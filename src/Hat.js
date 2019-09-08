import React from 'react';
import {asset, StyleSheet, View,} from "react-360"
import Entity from "react-360/Libraries/Mesh/Entity";

export default class Hat extends React.Component{
    render() {
        return (
            <Entity source={{
                    obj: asset('/scene.obj'),
                }}
                style={{
                    color:'black',
                    transform: [
                        { rotateX: 187 },
                        { rotateY: 198 },
                        { rotateZ: 170 },
                        { translateZ: -49 },
                    ]
                }}
                />
        );
    }
}
