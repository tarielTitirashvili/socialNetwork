import React from 'react'
import css from './dialogText.module.css'

const DialogText = (props) => {
    let sender = props.me
    return (
        <div className = {css.dialogText}>
            <div  className= { sender? css.dialogConteiner :css.other }>
                <div className = {css.backColor}>{props.massage}</div>
            </div>            
       </div>
    )
}

export default DialogText