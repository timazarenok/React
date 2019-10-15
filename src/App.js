import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.css'
import NavigationBar from "./components/navigationBar";


class App extends Component {

  render() {
    return (
        <div>
          <NavigationBar/>
        </div>
    );
  }
}

export default App;
