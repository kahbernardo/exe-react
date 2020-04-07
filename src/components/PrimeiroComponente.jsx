import React from 'react'

function primeiro (props){
    return( <>
    <h1>{props.valor}</h1>
    <h2>{props.funcao}</h2>
    <p>{props.var?"Sim":"Não"}</p>
    </>
    )
}


// function primeiro (){
//     return <h1>Componente!</h1>
// }

// export default ()=>
//      <h1>Componente arrow!!</h1>


// export default function(){
//     return <h1>Componente!!</h1>
// }

export default primeiro