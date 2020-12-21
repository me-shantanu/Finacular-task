import React from 'react'
import './Widgecard.css'

function Widgecard({image,quote,feture}) {
    return (
        <div className="widgecard">
            <img src={image} alt={feture}/>
            <p>{quote}</p>
            <h4>{feture}</h4>
            
        </div>
    )
}

export default Widgecard
