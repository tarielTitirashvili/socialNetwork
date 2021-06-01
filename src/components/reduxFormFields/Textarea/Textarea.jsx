import React from 'react'
import css from './Textarea.module.css'

const Textarea = ( {input, meta, ...props} ) => {
    let checkError = meta.touched && meta.error
  return (
    <div className = {css.formControl+' '+ (checkError ? css.error : '')}>
        <div>
            <textarea {...input} {...props} />
        </div> 
        { checkError && <span>{meta.error}</span>}
    </div>
  )
}

export default Textarea