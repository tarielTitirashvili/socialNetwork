import React from 'react'
import { Field } from 'redux-form'
import { maxLength, requiredField } from '../../../validate/validateForms'
import Textarea from '../../reduxFormFields/Textarea/Textarea'

let maxlength50 = maxLength(50)

const MassageTextForm = (props) => {
    return (
        <form onSubmit = { props.handleSubmit }>
            <Field component = {Textarea} validate = {[requiredField, maxlength50]} placeholder = {'enter your massage'} name ={'massage'}/>
            <button className="btn btn-info">send</button>
        </form>
    )
}
export default MassageTextForm


