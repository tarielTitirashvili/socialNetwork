import React, { useEffect, useState } from 'react'
import css from '../Profile.module.css'

const StatusHook = (props) => {
    let [selected, setSelected] = useState(false)
    let [status, setStatus] = useState(props.status)

    useEffect( () =>{
        setStatus(props.status)
    },[props.status] )

    let onDoubleClick = () =>{
        setSelected(true)
    }
    let onBlur = () =>{
        setSelected(false)
       props.updateStatus(status)
       console.log(status)
       setStatus(props.status)
       console.log(status)

    }
    let onchange = (e) =>{
        setStatus(e.currentTarget.value) 
    }
        return (
            <>
                <div className = {css.status}>
                    <span onDoubleClick = {onDoubleClick}>status:</span>
                    { !selected?
                            <span onDoubleClick = {onDoubleClick} > {status} </span>
                        :
                        <div >
                            <input onChange = {onchange} onBlur = {onBlur} value = {status} />
                        </div>
                    }
                </div>
            </>
        )
}

export default StatusHook