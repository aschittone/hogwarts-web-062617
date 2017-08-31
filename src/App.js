import React, { Component } from 'react';
import './App.css';
import Nav from './components/Nav'
import Hogs from './porkers_data.js'
import HogTiles from './components/HogTiles.js'
import FilterHogs from './components/FilterHogs.js'

class App extends Component {

    constructor(props) {
      super(props);

      this.state = {
        hogs: undefined
      }
    }

componentWillMount = () => {
  this.fetchHogs()
}


  fetchHogs = () => {
    Hogs.map((hog) => {
      return hog.showDescription = false
    })

  this.setState({
    hogs: Hogs
    });
  }

//   componentWillReceiveProps(nextProps){
//   this.setState({
//     tweets:
//       [...nextProps.newTweets,
//       ...this.state.tweets,]
//   });
// }



  render() {
    return (
      <div className="App">
          < Nav />
          < FilterHogs />
          < HogTiles hogs={this.state.hogs} />
      </div>
    )
  }
}

export default App;
