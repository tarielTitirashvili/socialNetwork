import React from 'react'
import css from './Profile.module.css'
import MyPostsContainer from './MyPosts/MyPostsContainer'
import Loading from '../Loading/Loading'
import defaultPhoto from '../../images/user-mock.png'
import StatusHook from './Status/StatusHook'
import ProfileDescription from './ProfileDescription/ProfileDescription'

const ProfileInfo = (props) => {

  const onAddPhoto = (e) =>{
    if(e.target.files.length){
      props.savePhoto(e.target.files[0])
    }
  }
  if(!props.profile){
    return <Loading />
  }else{
    let largePhoto = props.profile.data.photos.large
    return (
      <div className = {css.profile_container}>
        <div className={css.avatarName}>
          <img className={css.image} src = { props.profile.data.photos.large? largePhoto: defaultPhoto } alt='two dogs' />
          <div className = {css.user_name} >{props.profile.data.fullName}
          </div>
        </div>
          <div className = {css.container}> 

            {props.isOwner?<input type = {'file'} onChange = {onAddPhoto} className="form-label" />: ''}
            <StatusHook
              updateStatus = { props.updateStatus }
              status = { props.status }
            />
            <ProfileDescription
              editModeTrue = {props.editModeTrue}
              editMode = {props.editMode}
              profile = {props.profile}
              isOwner = {props.isOwner}
              updateProfileData = {props.updateProfileData}
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
        editModeTrue = {props.editModeTrue}
        editMode = {props.editMode}
        updateProfileData = {props.updateProfileData}
        savePhoto = {props.savePhoto}
        isOwner = {props.isOwner}
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