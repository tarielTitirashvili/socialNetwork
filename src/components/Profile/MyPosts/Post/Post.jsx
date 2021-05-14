import React from 'react'
import s from './post.module.css'

const Post = (props) => {
  return (
    <div >
      <div className={s.post_container}>
        <img src="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=200" alt="avatar" />
        <div>
          {props.massage}
        </div>
      </div>
      <div>{props.likeNum}like</div>
    </div>
  )
}

export default Post