import React from 'react'

export default props=>{
    const [contador,setContador]=useState(100)
    const [status,setParouImpar]=useState('Par')
}

useEffect(()=>{
contador%2===0?setParouImpar('Par'):setParouImpar('Impar')
})
return(
    <div>
        <h1>{contador}</h1>
        <h3>{status}</h3>
        <button onClick={()=>setContador(contador+1)}>+</button>
        <button onClick={()=>setContador(contador-1)}>-</button>
    </div>
)