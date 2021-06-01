import React from 'react'
import css from './Profile.module.css'
import MyPostsContainer from './MyPosts/MyPostsContainer'
import Loading from '../Loading/Loading'
import FB from '../../images/fbIcon.jpg'
import defaultPhoto from '../../images/user-mock.png'
import StatusHook from './Status/StatusHook'

const ProfileInfo = (props) => {
  if(!props.profile){
    return <Loading />
  }else{
    let largePhoto = props.profile.data.photos.large
    return (
      <div className = {css.profile_container}>
        <div className={css.avatarName}>
          <img className={css.image} src = { largePhoto? largePhoto: defaultPhoto } alt='two dogs' />
          <div className = {css.user_name} >{props.profile.data.fullName}
          <div className = {css.contacts} >contacts
             { props.profile.data.contacts.facebook ? <a href = {props.profile.data.contacts.facebook} target = 'blank' > <img className = {css.icons} src ={FB} alt = 'facebook' /></a> : '' } </div>
          </div>
        </div>
          <div className = {css.container}> 
          { props.profile.data.lookingForAJob ? <div> I am looking for a job: </div> : '' }
            { props.profile.data.lookingForAJobDescription ? <div> { props.profile.data.lookingForAJobDescription } </div> : '' }
            <StatusHook
              updateStatus = { props.updateStatus }
              status = { props.status }
            />
          </div>
        
      </div>
    )
  }
}

const Profile = (props) => {
  return (
    <div className={css.content}>
      <div className = { css.wrapper }>
      <ProfileInfo
        profile = {props.profile} 
        status = {props.status}
        updateStatus = { props.updateStatus }
      />
      <MyPostsContainer
        posts = { props.data }
        dispatch = { props.dispatch }
      />
      </div>
    </div>
  )
}

export default Profile