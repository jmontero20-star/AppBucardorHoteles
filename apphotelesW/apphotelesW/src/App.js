import React, { Component } from 'react'
import './App.css'
import 'bulma/css/bulma.css'
import { Switch, Route} from 'react-router-dom'

import { DetalleHotel } from './Pages/DetalleHotel'
import { Home } from './Pages/Home'
import { Error } from './Pages/Error'

class  App extends Component{
 

  render(){
    return (
      <div className="App">
        <Switch>
          <Route exact path='/' component = { Home }/>
          <Route path='/detallehotel/:_id' component = { DetalleHotel} />
          <Route  component = { Error} />
        </Switch>
      </div>
    )
  }
  
}

export default App;
