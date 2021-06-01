import React from 'react'
import { Field } from 'redux-form'
import { maxLength, requiredField } from '../../../../validate/validateForms'
import Textarea from '../../../reduxFormFields/Textarea/Textarea'

let maxLength20 = maxLength(20)

const PostMassage = (props) => {
  return (
    <form onSubmit = {props.handleSubmit}>
      <Field component = {Textarea} placeholder = {'write new post'} name = {'newPost'} validate = {[ requiredField, maxLength20 ]}/>
      <button>Add post</button>
    </form>
  )
}

export default PostMassage