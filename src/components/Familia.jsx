import React from 'react'
import {childrenProps} from '../utils/componentsUtils'

export default props =>
    <div>
        <h1>Família {props.sobrenome}</h1>
        {childrenProps(props)}
        {/* {React.Children.map(props.children,filho=>{
            return React.cloneElement(filho,{...props})})} */}
        {/* {React.cloneElement(props.children,
            {...props})} */}
        {/* {React.cloneElement(props.children,
            props)} */}
        {/* {React.cloneElement(props.children,
            {sobrenome:props.sobrenome})} */}
        {/* {props.children} */}
    </div>