import React, { Component } from 'react'
import {Title} from '../Components/Title'
import { BuscadorHoteles } from '../Components/BuscadorHoteles'
import { ListaHoteles } from '../Components/ListaHoteles'

export class Home extends Component {

    state = {
        iniBusqueda:false,
        resulBusqueda : []
      }
    
      handleResults = (resulBusqueda) => {
        this.setState({resulBusqueda, iniBusqueda:true})
      }
    
      _renderResults(){
        return this.state.resulBusqueda.length === 0
          ? <p>Sin Resultados</p>
          : <ListaHoteles hoteles = {this.state.resulBusqueda}/>
        
      }

    render(){
        return (
            <div>
                <Title>Hoteles</Title>
                <div className="BuscarHotel">
                <BuscadorHoteles onResult={this.handleResults}/>
                </div>    
                <div>
                {
                    this.state.iniBusqueda
                    ? this._renderResults()
                    :<small>Ingrese el nombre del Hotel</small>
                }         
                </div>
            </div>
            
        )
    }
}