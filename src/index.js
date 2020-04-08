import React from 'react'
import ReactDOM from 'react-dom'
import Primeiro from './components/PrimeiroComponente'
import {CompA,CompB} from './components/MultiComp'
import MultiElementos from './components/MultiElementos'

const elemento = document.getElementById('root')

ReactDOM.render(
    <div>
        <MultiElementos/>
        {/* <CompA valor="Olá A"/>
        <CompB valor="Olá B"/>
        <Primeiro valor="Propriedade texto" funcao={Math.pow(2,8)} var={0}/> */}
    </div>,elemento)