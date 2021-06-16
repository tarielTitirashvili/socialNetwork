import React from 'react'
import { reduxForm } from 'redux-form'
import css from './myPosts.module.css'
import Post from './Post/Post'
import PostMassage from './Post/PostMassage'

const MyPosts = (props) => {

  let onSubmit = (e) => {
    props.addNewPostAction(e.newPost)
  }
  let postContent = props.postContent

  let posting = postContent.map((d) => <Post key={ d.id } massage={ d.text } likeNum={ d.likes } />)
  return (
    <div className={ css.send }>
      <NewPost onSubmit = {onSubmit} />
      { posting }
    </div>
  )
}

const NewPost = reduxForm({
  form: 'newPost'
})(PostMassage)

export default MyPosts