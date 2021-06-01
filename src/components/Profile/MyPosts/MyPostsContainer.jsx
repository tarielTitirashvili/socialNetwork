import { connect } from 'react-redux'
import { addNewPostAction } from '../../../redux/reducer/profileReducer'
import MyPosts from './MyPosts'

const mapStateToProps = (state) => {
  return {
    postContent: state.profilePage.postContent,
    newPostText: state.profilePage.newPostText
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    addNewPostAction(postContent) {
      dispatch(addNewPostAction(postContent))
    },
  }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)

export default MyPostsContainer
