import React from 'react';
import {
    StyleSheet,
    AppRegistry,
} from "react-360"
import Menu from "./menu"
import {changeBackground} from "../changeBackground"
import Networking from "./network"

export default class Home extends React.Component {
    constructor(props){
        super(props)
        this.state={
            isHome: true
        }

        this.toggleMenu = this.toggleMenu.bind(this)
    }

    toggleMenu(){
        console.log('here')
        this.setState(state => ({
            isHome: !state.isHome
        }))
        changeBackground(1);
    }


    render () {
        return (
            this.state.isHome===true ? <Menu toggleMenu={this.toggleMenu}/>
            : <Networking />
        );
    }
};

const styles = StyleSheet.create({

})

AppRegistry.registerComponent('Home', () => Home);
