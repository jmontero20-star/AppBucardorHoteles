import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { BotonHome } from '../Components/BotonHome'


export class DetalleHotel extends Component {

    static propTypes = {
        match: PropTypes.shape({
            params:PropTypes.object,
            isExact:PropTypes.bool,
            path:PropTypes.string,
            url:PropTypes.string
        })
    }

    state = { hoteles : {} }

    _VerHotel({_id}){
        fetch(`https://apiresthospedaje.herokuapp.com/BuscarHotel/${_id}`)
        .then(res => res.json())
        .then(results =>{      
            const { hoteles = { } } = results                
            console.log({ hoteles })  
            this.setState({hoteles})
        })
    }


    componentDidMount(){
        console.log(this.props)
        const { _id } = this.props.match.params
        this._VerHotel({_id})
    }

    render(){
        const {_id, nombre, direccion,telefono, estrellas, precio,imagenes } = this.state.hoteles
        return (
            <div>
                <h2>{nombre}</h2>
                <div>{direccion}</div>
                <img src={imagenes} alt= {_id}/>
                <h5>Teléfono: { telefono }</h5>
                <span>Estrellas { estrellas }</span>
                <div><small>Valor Noche: ${ precio }</small></div>
                <BotonHome />
                
            </div>
        )
    }
}


