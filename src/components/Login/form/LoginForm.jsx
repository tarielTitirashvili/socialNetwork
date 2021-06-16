import React from 'react'
import{ Field } from 'redux-form'
import { maxLength, requiredField } from '../../../validate/validateForms'
import Input from '../../reduxFormFields/Input/Input'
import css from '../login.module.css'

let maxLength30 = maxLength(30)

const LoginForm = (props) =>{
    return(
        <div>
            <form onSubmit = { props.handleSubmit }>
                <div>
                    <Field component = {Input} validate = {[requiredField, maxLength30]} name = {'email'} placeholder = {'email'} type = {'email'} />
                </div>
                <div>
                    <Field component = {Input} validate = {[requiredField, maxLength30]} name = {'password'} placeholder = {'password'} type = {'password'}/>
                </div>
                <div>
                    <Field component = {Input} name = {'rememberMe'} type="checkbox" /> remember me
                </div>
                { props.captchaURL ? <img src = {props.captchaURL} alt = 'img'/>:'' }
                { props.captchaURL ? <Field component = {Input}  validate = {requiredField} name = {'captcha'} placeholder = {'captcha'} />:'' }
                <div className = {css.onError}>{props.error}</div>
                <div>
                    <button>Login</button>
                </div>
            </form>
        </div>
    )
}
export default LoginForm

