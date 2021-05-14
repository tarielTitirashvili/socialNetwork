import { connect } from 'react-redux'
import { addNewMassageAction, updateNewMassageTextAction } from '../../redux/reducer/addMassageReducer'
import Dialogs from './Dialogs'

const mapStateToProps = (state) => {
    return {
        newMassageText: state.dialogsPage.newMassageText,
        massages: state.dialogsPage.massages,
        dialogFriends: state.dialogsPage.dialogFriends
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        addNewMassageAction() {
            dispatch(addNewMassageAction())
        },
        updateNewMassageTextAction(text) {
            let action = updateNewMassageTextAction(text)
            dispatch(action)
        }
    }
}

const MapDialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)
export default MapDialogsContainer