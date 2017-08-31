import React from 'react';

const Hog = (props) => {

  const url = 'hog-imgs/' + props.name.replace(/ /g,"_").toLowerCase() + '.jpg';

  if (props.showDescription === true) {
    return (<div className="pigTile" onClick={props.clickFunction} ><h3>{props.name}</h3><p>{props.specialty}</p><p>{props.weight}</p><p>{props.greased}</p><p>{props.medal}</p></div>)
  } else {
    return (<div className="pigTile" ><h3>{props.name}</h3><img src={url} name={props.name} alt="" onClick={props.clickFunction}/></div>)
  }
}

export default Hog;
