import { connect } from 'react-redux'
import { addNewPostAction, updateNewPostTextAction } from '../../../redux/reducer/profileReducer'
import MyPosts from './MyPosts'

const mapStateToProps = (state) => {
  return {
    postContent: state.profilePage.postContent,
    newPostText: state.profilePage.newPostText
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    addNewPostAction() {
      dispatch(addNewPostAction())
    },
    updateNewPostTextAction(text) {
      let newText = updateNewPostTextAction(text)
      dispatch(newText)
    }
  }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)

export default MyPostsContainer
