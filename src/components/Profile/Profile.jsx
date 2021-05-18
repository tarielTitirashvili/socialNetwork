import React from 'react'
import css from './Profile.module.css'
import MyPostsContainer from './MyPosts/MyPostsContainer'
import Loading from '../Loading/Loading'
import FB from '../../images/fbIcon.jpg'

const ProfileInfo = (props) => {
  if(!props.profile){
    return <Loading />
  }else{
    debugger
    return (
      <div className = {css.profile_container}>
        <div className={css.avatarName}>
          <img className={css.image} src = {props.profile.data.photos.large} alt='two dogs' />
          <div className = {css.user_name} >{props.profile.data.fullName}
          <div className = {css.contacts} >contacts
             { props.profile.data.contacts.facebook ? <a href = {props.profile.data.contacts.facebook} target = 'blank' > <img className = {css.icons} src ={FB} alt = 'facebook' /></a> : '' } </div>
          </div>
          <div> 
          { props.profile.data.lookingForAJob ? <div> I am looking for a job: </div> : '' }
            { props.profile.data.lookingForAJobDescription ? <div> { props.profile.data.lookingForAJobDescription } </div> : '' }
          </div>
        </div>
      </div>
    )
  }
}

const Profile = (props) => {
  return (
    <div className={css.content}>
      <div className = { css.wrapper }>
      <ProfileInfo profile = {props.profile} />
      <MyPostsContainer
      posts = { props.data }
      dispatch = { props.dispatch }
      />
      </div>
    </div>
  )
}

export default Profile