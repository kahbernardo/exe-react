import React, { Component } from 'react'


export default class Contador extends Component {
    state = {
        numero: this.props.numeroInicial||0
    }

    maisUm = () => {
        this.setState({ numero: this.state.numero +1})
        // this.state.numero=this.state.numero +1
        // console.log(this)
    }
    menosUm = () => {
        this.setState({ numero: this.state.numero -1})   
    }
    alterarNumero=(diferenca)=>{
        this.setState({
            numero:this.state.numero+diferenca
        })
    }
    render() {
        return (
            <div>
                <div>Número: {this.state.numero}</div>
                <button onClick={this.maisUm}>+</button>
                <button onClick={this.menosUm}>-</button>
                <button onClick={this.alterarNumero(10)}>+10</button>
                <button onClick={this.alterarNumero(-10)}>-10</button>
            </div>
        )
    }
}

// Solucao 1
// constructor(props){
//     super(props)
//     this.maisUm=this.maisUm.bind(this)
// }

// Solucao 2-Arrow onCLick
// <button onClick={()=>this.maisUm()}>+</button>
// Solucao3 - Arrow Function
// maisUm=()=>{
//     console.log(this)
// }