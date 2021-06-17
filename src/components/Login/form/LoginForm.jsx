import React from 'react'
import{ Field } from 'redux-form'
import { maxLength, requiredField } from '../../../validate/validateForms'
import Input from '../../reduxFormFields/Input/Input'

let maxLength30 = maxLength(30)

const LoginForm = (props) =>{
    return(
        <div className = 'd-flex flex-column justify-content-center'>
            <form onSubmit = { props.handleSubmit }>
                <div className = "d-flex justify-content-center p-2">
                    <h1 className = "h2">login</h1>
                </div>
                <div className="col-md-6 offset-md-3 form-outline mb-4">
                    <Field id="form1Example1" class="form-control" component = {Input} validate = {[requiredField, maxLength30]} name = {'email'} placeholder = {'Email address'} type = {'email'} />
                </div>
                <div className = "col-md-6 offset-md-3">
                    <Field className = "form-control" component = {Input} validate = {[requiredField, maxLength30]} name = {'password'} placeholder = {'Password'} type = {'password'}/>
                </div>
                <div className = "d-flex justify-content-center p-2">
                    <Field className = "form-check-input " id="flexCheckDefault" component = {Input} name = {'rememberMe'} type="checkbox" /> 
                    <label className = "form-check-label" for="flexCheckDefault"> remember me </label>
                </div>
                { props.captchaURL ? <img className = "col-md-4 offset-md-4 form-outline" src = {props.captchaURL} alt = 'img'/>:'' }
                { props.captchaURL ? <div className = "col-md-4 offset-md-4"> <Field className = "form-control" component = {Input}  validate = {requiredField} name = {'captcha'} placeholder = {'captcha'} /> </div>:'' }
                <div className = "font-weight-bolder text-danger col-md-6 offset-md-3 p-2 h4">{props.error}</div>
                <div className = "d-flex justify-content-center">
                    <button className = "btn btn-primary btn-block w-50">Login</button>
                </div>
            </form>
        </div>
    )
}
export default LoginForm

