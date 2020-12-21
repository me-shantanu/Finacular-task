import React from 'react'
import './Widge.css';
import Widgecard from './widgecard/Widgecard'
function Widge() {
    return (
        <div className="widge">
           <div className="widge__header">
               <img src="./images/fls.png"/>
               <h5>Actions</h5>
           </div>
           <div className="widge__cards">
            <Widgecard image="./images/learn.png" quote="Understand the power of compounding!!" feture="Learn Now"/>
            <Widgecard image="./images/track.png" quote="Track all your expenses on a daily basis" feture="Track Now"/>
            </div>
        </div>
    )
}

export default Widge
