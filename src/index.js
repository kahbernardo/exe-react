import React from 'react'
import ReactDOM from 'react-dom'
import Primeiro from './components/PrimeiroComponente'
import A,{CompB as B} from './components/MultiComp'
import MultiElementos from './components/MultiElementos'
import Familia from './components/FamiliaBernardo'

const elemento = document.getElementById('root')

ReactDOM.render(
    <div>
        <Familia/>
        {/* <MultiElementos/>
        <A valor="Olá A"/>
        <B valor="Olá B"/>
        <Primeiro valor="Propriedade texto" funcao={Math.pow(2,8)} var={0}/> */}
    </div>,elemento)