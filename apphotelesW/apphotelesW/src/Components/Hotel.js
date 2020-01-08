import React, { Component } from 'react'
import PropTypes from 'prop-types'

import { Link } from 'react-router-dom'

export class Hotel extends Component {

    static propTypes = {
        _id: PropTypes.string,
        nombre: PropTypes.string,
        direccion: PropTypes.string,
        telefono: PropTypes.string,
        estrellas : PropTypes.string,
        precio: PropTypes.string,
        imagenes : PropTypes.string
    }

    render(){
        const {_id, nombre, direccion,telefono, estrellas, precio,imagenes } = this.props
        return (
            <Link to={`/detallehotel/${ _id }`} className="card">
                <div className="card-image">
                <figure className="image">
                    <img 
                        src={imagenes} 
                        alt={nombre} 
                        style ={{width: 500, height:500}}
                    />
                </figure>
                </div>
                <div className="card-content">
                <div className="media">
                    <div className="media-left">                 
                    </div>
                    <div className="media-content">
                    <p className="title is-4">{nombre}</p>
                    <p className="subtitle is-6">Tel: {telefono}</p>
                    </div>
                </div>
            
                <div className="content">
                    <div>{direccion}</div>
                    Estrellas: {estrellas}  Precio: {precio}                                               
                </div>
                </div>
                <footer className="card-footer">                                       
                </footer>
          </Link>
        )
        
    }
}
