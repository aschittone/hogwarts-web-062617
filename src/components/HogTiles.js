import React from 'react';
import Hog from './Hog.js';


class HogTiles extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  render() {

    const hogs = this.props.hogs.map((hog, index) => <Hog name={hog.name} specialty={hog.specialty} greased={hog.greased} weight={hog["weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water"]} medal={hog['highest medal achieved']} showDescription={hog.showDescription} key={index} clickFunction={this.handleClick}/>);
    
    return <div> {hogs} </div>
  }

  handleClick = (event) => {
    this.props.hogs.map((hog) => {
      if (hog.name === event.target.name && hog.showDescription === false) {
        return hog.showDescription = true
      } else if (hog.name === event.target.innerHTML && hog.showDescription === true){
        return hog.showDescription = false
      }
    })
    this.setState({
      hogs: this.props.hogs
    })
  }


}



export default HogTiles;
