import React from 'react'
import css from '../Textarea/Textarea.module.css'

const Input = ( {input, meta, ...props} ) => {
    let checkError = meta.touched && meta.error
  return (
    <div className = {css.formControl+' '+ (checkError ? css.error : '')}>
        <div>
            <input {...input} {...props} />
        </div> 
        { checkError && <span>{meta.error}</span>}
    </div>
  )
}

export default Input