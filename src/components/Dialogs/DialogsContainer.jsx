import { connect } from 'react-redux'
import { compose } from 'redux'
import { addNewMassageAction } from '../../redux/reducer/addMassageReducer'
import { LoginRedirect } from '../Hoc/LoginRedirect'
import Dialogs from './Dialogs'

const mapStateToProps = (state) => {
    return {
        massages: state.dialogsPage.massages,
        dialogFriends: state.dialogsPage.dialogFriends,
        isAuthorized: state.login.isAuthorized,
    }
}
const mapDispatchToProps = (dispatch) => {
    LoginRedirect(mapDispatchToProps)
    return {
        addNewMassageAction(massage) {
            dispatch(addNewMassageAction(massage))
        },
    }
}
export default compose(
    connect(mapStateToProps, mapDispatchToProps)
)(Dialogs)