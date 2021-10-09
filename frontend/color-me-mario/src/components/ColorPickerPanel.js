import React from 'react';
import ColorPicker from './ColorPicker';


const ColorPickerPanel = () => {
    return (
        <>
    <div className="row">
        <ColorPicker label="Skin" field="skin"/>
        <ColorPicker label="Mustache" field="mustache"/>
        <ColorPicker label="Hair" field="hair"/>
    </div>
    <div className="row">
    <ColorPicker label="Eyes" field="eyes"/>
    <ColorPicker label="Background" field="background"/>
    <ColorPicker label="Shirt" field="shirt"/>
    </div>
    <div className="row">
    <ColorPicker label="Pants" field="pants"/>
    <ColorPicker label="Cap" field="cap"/>
    <ColorPicker label="Boots" field="boots"/>
</div>
<div className="row">
    <ColorPicker label="Buttons" field="button"/>
</div>
</>
);
};

export default ColorPickerPanel;