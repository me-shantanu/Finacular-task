import React from 'react'
import './Singleitem.css'

function Singleitem({Icon,text,active}) {
    return (
        <div className={`singleitem ${ active && "singleitem__active"}`}>
            <Icon className="singleitem__icon"/>
            <h3>{text}</h3>
        </div>
    )
}

export default Singleitem
