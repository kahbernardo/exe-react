import React from 'react'

export function childrenProps(props){
    return React.Children.map(props.children,filho=>{
        return React.cloneElement(filho,{...props})
    })
}