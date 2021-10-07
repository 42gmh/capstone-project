import React from 'react';
import Pixel from './Pixel';

class PixelRow extends React.Component {
    render() {

      return (
        <div className="row justify-content-center">
        {
          this.props.rowPixels.map((aPixelColor, idx) => <Pixel key={this.props.id + "-" + idx} pixelColor={aPixelColor} isThumb={this.props.isThumb}/>)
        }
        </div>
      )
  	}
}

export default PixelRow;
