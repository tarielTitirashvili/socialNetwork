import React from 'react'
import s from './Profile.module.css'
import MyPostsContainer from './MyPosts/MyPostsContainer'

const ProfileInfo = (props) => {
  return (
    <div>
      <div className={s.avatarName}>
        <img className={s.image} src = {props.url} alt='two dogs' />
        <div>{props.avatarName}</div>
      </div>
    </div>
  )
}


const Profile = (props) => {
  return (
    <div className={s.content}>
      <div>
        <img className={s.imgMain} src='https://images.ctfassets.net/l3l0sjr15nav/79eVkJy3VSEo6WQYqqiiay/ac6ae26ff77746ca1b09f39fe53aab21/organize-large_2x.png' alt='a' />
      </div>
      <ProfileInfo avatarName = "atrial" url = 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/large-dogs-rees-labs-1586532550.jpg?crop=0.667xw:1.00xh;0.123xw,0&resize=640:*'/>
      <MyPostsContainer
      posts = { props.data }
      dispatch = { props.dispatch }
      />
    </div>
  )
}

export default Profile