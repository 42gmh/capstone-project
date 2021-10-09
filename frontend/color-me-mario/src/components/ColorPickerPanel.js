import React from 'react';
import ColorPicker from './ColorPicker';


const ColorPickerPanel = () => {
    return (
    <div className="row row-cols-xs-2 row-cols-sm-3 row-cols-md-5">
        <ColorPicker label="Skin" field="skin"/>
        <ColorPicker label="Mustache" field="mustache"/>
        <ColorPicker label="Hair" field="hair"/>
        <ColorPicker label="Eyes" field="eyes"/>
        <ColorPicker label="Background" field="background"/>
        <ColorPicker label="Shirt" field="shirt"/>
        <ColorPicker label="Pants" field="pants"/>
        <ColorPicker label="Cap" field="cap"/>
        <ColorPicker label="Boots" field="boots"/>
        <ColorPicker label="Buttons" field="button"/>
    </div>
);
};

export default ColorPickerPanel;