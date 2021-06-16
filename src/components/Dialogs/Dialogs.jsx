import React from 'react'
import { Redirect } from 'react-router'
import { reduxForm } from 'redux-form'
import Dialog from './dialog/Dialog'
import css from './dialogs.module.css'
import DialogText from './DialogText/DialogText'
import MassageTextForm from './MassageTextForm/MassageTextForm'

const Dialogs = (props) => {
    let dialogItems = props.dialogFriends

    let massages = props.massages

    let renderMassages = massages.map((d) => <DialogText key={ d.id } id = {d.id} massage={ d.massage } me={ d.me } />)

    let dialogs = dialogItems.map((d)=> <Dialog key={ d.id } pictureUrl={ d.url } name={ d.name } 
         massage={ massages } />)

    let send = (c) => {
        props.addNewMassageAction(c.massage)
        console.log(c.massage)
    }


    if(props.isAuthorized===false)return <Redirect to='/login' />
    return (
        <div className={css.backGround}>
            <div className={css.dialogsWrapper} >
                <div className={css.friends}>
                    <div className={css.friendsTitle}>
                        DIALOGS
                    </div>
                    {dialogs}
                </div>
                <div className={css.DialogContainer}>
                    {renderMassages}
                    <div className = {css.send}>
                        <AddNewMassageForm onSubmit = {send} />
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Dialogs


const AddNewMassageForm = reduxForm({ form: 'addMassageText' })(MassageTextForm)
