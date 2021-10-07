import React, { Component } from 'react';
import PixelRow from './PixelRow';

const black     = "#000000"; 
const blue      = "#0000ff"; 
const brown     = "#964B00";
const red       = "#ff0000"; 
const white     = "#ffffff"; 
const yellow    = "#ffff00";
const flesh     = "#ffe9d1";

let defaultMarioPalette = {
    boots       : brown,
    button      : yellow,
    cap         : red,
    pants       : blue,
    shirt       : red,
    background  : white,
    eyes        : black,
    hair        : brown,
    skin        : flesh,
    mustache    : black
}

function getMarioMapForPalette(palette)
{
    const space_ = palette.background;
    const shirt_ = palette.shirt;
    const pants_ = palette.pants;
    const cap___ = palette.cap;    
    const button = palette.button;    
    const boots_ = palette.boots;        
    const eye___ = palette.eyes;
    const hair__ = palette.hair;
    const skin__ = palette.skin;
    const stache = palette.mustache;

    return [
        [space_, space_, space_, cap___, cap___, cap___, cap___, cap___, cap___, space_, space_, space_], // 1
        [space_, space_, cap___, cap___, cap___, cap___, cap___, cap___, cap___, cap___, cap___, space_], // 2
        [space_, space_, hair__, hair__, hair__, skin__, skin__, eye___, skin__, space_, space_, space_], // 3
        [space_, hair__, skin__, hair__, skin__, skin__, skin__, eye___, skin__, skin__, skin__, space_], // 4 
        [space_, hair__, skin__, hair__, hair__, skin__, skin__, skin__, stache, skin__, skin__, skin__], // 5
        [space_, hair__, hair__, skin__, skin__, skin__, skin__, stache, stache, stache, stache, space_], // 6
        [space_, space_, skin__, skin__, skin__, skin__, skin__, skin__, skin__, skin__, space_, space_], // 7
        [space_, space_, shirt_, shirt_, pants_, shirt_, shirt_, shirt_, space_, space_, space_, space_], // 8
        [space_, shirt_, shirt_, shirt_, pants_, shirt_, shirt_, pants_, shirt_, shirt_, shirt_, space_], // 9
        [shirt_, shirt_, shirt_, shirt_, pants_, pants_, pants_, pants_, shirt_, shirt_, shirt_, shirt_], // 10
        [skin__, skin__, shirt_, pants_, button, pants_, pants_, button, pants_, shirt_, skin__, skin__], // 11
        [skin__, skin__, skin__, pants_, pants_, pants_, pants_, pants_, pants_, skin__, skin__, skin__], // 12
        [skin__, skin__, pants_, pants_, pants_, pants_, pants_, pants_, pants_, pants_, skin__, skin__], // 13
        [space_, space_, pants_, pants_, pants_, space_, space_, pants_, pants_, pants_, space_, space_], // 14
        [space_, boots_, boots_, boots_, space_, space_, space_, space_, boots_, boots_, boots_, space_], // 15
        [boots_, boots_, boots_, boots_, space_, space_, space_, space_, boots_, boots_, boots_, boots_]  // 16
    ];
}

class Mario extends Component {
    render() {
        const marioMap = getMarioMapForPalette(this.props.palette);
        return (
            <>
                {marioMap.map((aPixelRow, idx) => <PixelRow key = {idx} rowPixels={aPixelRow} isThumb={this.props.isThumb}/> )}
            </>
        )
    }
}

export {Mario, defaultMarioPalette};