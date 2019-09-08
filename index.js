import React from 'react';
import {
  AppRegistry
} from "react-360"
import Home from "./src/scenes/home"
import Start from "./src/scenes/start"
import {changeBackground} from "./src/changeBackground"

export default class Hello360 extends React.Component {
  constructor(props){
    super(props)
    this.state={
      isStart: true
    }

    this.toggleStart = this.toggleStart.bind(this)
  }

  toggleStart(){
    console.log('here')
    this.setState(state => ({
      isStart: !state.isStart
    }))
    changeBackground(1);
  }

  render() {
    console.log(this.state.isStart)
    return (
        this.state.isStart===true ? <Start toggleStart={this.toggleStart}/>
        : <Home/>
  );
  }
};

AppRegistry.registerComponent('Hello360', () => Hello360);
