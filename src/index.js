import React from 'react'
import ReactDOM from 'react-dom'
import Primeiro from './components/PrimeiroComponente'

const elemento = document.getElementById('root')

ReactDOM.render(
    <div>
        <Primeiro valor="Propriedade texto" funcao={Math.pow(2,8)} var={0}/>
    </div>,elemento)