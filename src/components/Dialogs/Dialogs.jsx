import React from 'react'
import Dialog from './dialog/Dialog'
import css from './dialogs.module.css'
import DialogText from './DialogText/DialogText'


const Dialogs = (props) => {
    let dialogItems = props.dialogFriends

    let massages = props.massages

    let renderMassages = massages.map(d => <DialogText kay={ d.id } massage={ d.massage } me={ d.me } />)

    let dialogs = dialogItems.map(d => <Dialog pictureUrl={ d.url } name={ d.name } kay={ d.id }
         massage={ massages } />)

    let textareaValue = React.createRef()

    let send = () => {
        props.addNewMassageAction()
    }

    let newMassage = ()=>{
        let currentText = textareaValue.current.value
        props.updateNewMassageTextAction(currentText)
    }

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
                        <textarea value = {props.newMassageText} onChange = {newMassage} ref={textareaValue}></textarea>
                        <button onClick={send} > send </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Dialogs