import React, { Component } from 'react'

export class BuscadorHoteles extends Component {

    state = {
        inputHotelNombre : ''
    }

    _handleChange=(e)=>{
        this.setState({inputHotelNombre: e.target.value})
    }

    _handeSubmit=(e)=>{
        e.preventDefault()
        const {inputHotelNombre} = this.state        
        fetch(`https://apiresthospedaje.herokuapp.com/BuscarHotelNombre/${inputHotelNombre}`)
            .then(res => res.json())
            .then(results =>{
                const { hoteles = [] } = results
                console.log({hoteles})
                this.props.onResult(hoteles)
            })
    }

    render(){
        return(
            <div>
            <form onSubmit={this._handeSubmit}>
                <div className="field has-addons">
                    <div className="control">
                        <input 
                            onChange = {this._handleChange}
                            className="input" 
                            type="text" 
                            placeholder="Buscar Hotel" />
                    </div>
                    <div className="control">
                        <button className="button is-info">
                            Buscar
                        </button>
                    </div>
                </div>          
            </form>
            </div>
        )
    }
}