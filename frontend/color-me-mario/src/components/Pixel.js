import React from 'react';

class Pixel extends React.Component {
    render() {
      console.log("THUMB:", this.props.isThumb);
      const classesToApply = "true" === this.props.isThumb ? "col-auto thumbnail" : "col-auto edit-screen";

      console.log("CLASSES?", classesToApply)

      return (
          <div className={classesToApply} style={{backgroundColor: this.props.pixelColor }}><p></p></div>
      )
	}
}

export default Pixel;
