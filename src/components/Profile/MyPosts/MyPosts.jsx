import React from 'react'
import css from './myPosts.module.css'
import Post from './Post/Post'

const MyPosts = (props) => {

  let postContent = props.postContent

  let currentValue = React.createRef();

  let addText = () => {
    props.addNewPostAction()
  }

  let changedPostText = () =>{
    let text = currentValue.current.value
    props.updateNewPostTextAction(text)
  }
  let posting = postContent.map(d => <Post kay={ d.id } massage={ d.text } likeNum={ d.likes } />)
  return (
    <div className={ css.send }>
      <textarea
        value={ props.newPostText }
        onChange={ changedPostText }
        ref={ currentValue }
      ></textarea>
      <button onClick={ addText } >Add post</button>
      { posting }
    </div>
  )
}

export default MyPosts