import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Hotel } from './Hotel'


export class ListaHoteles extends Component {

    static propTypes = {
        hoteles : PropTypes.array
    }

    render(){
        const { hoteles } = this.props

        return (
            <div className="ListaHoteles">
                {
                    hoteles.map(hotel => {
                        return (
                            <div key = {hotel._id} className="ListaHoteles-item">
                                <Hotel      
                                  _id = {hotel._id}                                 
                                  nombre = {hotel.nombre}
                                  direccion = {hotel.direccion}
                                  telefono = {hotel.telefono}
                                  estrellas = {hotel.estrellas}
                                  precio = {hotel.precio}
                                  imagenes = {hotel.imagenes}
                              />
                            </div>    
                        )
                      })
                }                
            </div>
        )

      
    }

}