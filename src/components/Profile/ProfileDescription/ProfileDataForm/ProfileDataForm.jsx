import React from 'react'
import { Field, reduxForm } from 'redux-form'
import Input from '../../../reduxFormFields/Input/Input'
import Textarea from '../../../reduxFormFields/Textarea/Textarea'
import css from '../ProfileDescription.module.css'

const ProfileDataForm = (props) => {
  
  return(
    <div>
      <form onSubmit = { props.handleSubmit }>
        <div>
        {props.error? <span className = {css.on_error}>{props.error}</span>:'' }
        </div>
        <div>
          <Field component = {Input} name = {'fullName'} placeholder = {'fullName'} /> 
        </div>
        <div>
          aboutMe: <Field component ={Input} name ={'aboutMe'} placeholder = {'aboutMe'} />
        </div>
        <div>
          lookingForAJob:<Field component = {Input} name = {'lookingForAJob'} type = {'checkbox'} />
        </div>
        <div>my skills:
          <Field component = {Textarea} name = {'lookingForAJobDescription'} placeholder = {' My Professional skills:'} />
        </div> 
        <div>facebook:
          <Field component = {Input} name = {'contacts.facebook'} placeholder = {' My facebook page:'} />
        </div> 
        <div>github:
          <Field component = {Input} name = {'contacts.github'} placeholder = {'github:'} />
        </div> 
        <div>instagram:
          <Field component = {Input} name = {'contacts.instagram'} placeholder = {' instagram:'} />
        </div> 
        <div>mainLink:
          <Field component = {Input} name = {'contacts.mainLink'} placeholder = {'mainLink'} />
        </div> 
        <div>twitter:
          <Field component = {Input} name = {'contacts.twitter'} placeholder = {'twitter'} />
        </div> 
        <div>vk:
          <Field component = {Input} name = {'contacts.vk'} placeholder = {'vk'} />
        </div> 
        <div>website:
          <Field component = {Input} name = {'contacts.website'} placeholder = {'website'} />
        </div> 
        <div>youtube:
          <Field component = {Input} name = {'contacts.youtube'} placeholder = {'youtube'} />
        </div> 
        <button className = 'btn btn-success' type = {'submit'}>
          submit
        </button>
      </form>
    </div>
  )
}

const ReduxForm = reduxForm({form:'profile_data'})(ProfileDataForm)

export default ReduxForm  