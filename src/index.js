import React from 'react'
import ReactDOM from 'react-dom'
// import Primeiro from './components/PrimeiroComponente'
// import A,{CompB as B} from './components/MultiComp'
// import MultiElementos from './components/MultiElementos'
// import FamiliaBernardo from './components/FamiliaBernardo'
// import Familia from './components/Familia'
// import Membro from './components/Membro'
// import ComponenteComFuncao from './components/ComponenteComFuncao'
// import Pai from './components/Pai'
// import ComponenteClasse from './components/ComponenteClasse'
import Contador from './components/Contador'

const elemento = document.getElementById('root')

ReactDOM.render(
    <div>
        <Contador/>
        {/* <ComponenteClasse valor="Componente de classe"/> */}
        {/* <Pai/> */}
        {/* <ComponenteComFuncao/> */}
        {/* <Familia sobrenome="Bernardo">
            <Membro nome="Kaique" />
            <Membro nome="Charlotte" />
        </Familia> */}
        {/* <FamiliaBernardo/> */}
        {/* <MultiElementos/>
        <A valor="Olá A"/>
        <B valor="Olá B"/>
        <Primeiro valor="Propriedade texto" funcao={Math.pow(2,8)} var={0}/> */}
    </div>,elemento)