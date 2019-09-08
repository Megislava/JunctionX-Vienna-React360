import {Environment, asset} from "react-360"
import scenes from "./scenes"
import React from 'react'

export const currentBackground = {num: 0}

export const changeBackground = (change) => {

    currentBackground.num += change

    console.log(currentBackground)

    if(currentBackground.num < 0) {
        currentBackground.num = scenes.length - 1;
    } else if(currentBackground.num >= scenes.length) {
        currentBackground.num = 0;
    }

    Environment.setBackgroundImage(
        asset(scenes[currentBackground.num].image),
    );
}
