import React from 'react'
import ProfileDataForm from './ProfileDataForm/ProfileDataForm'
import Contacts from './Contacts/Contacts'


const ProfileDescription = (props) => { 
  const onAddInfo = () =>{
    props.editModeTrue(true)
  }
  const onSubmit = (formData) => {
    props.updateProfileData(formData)
  }
  return(
    <div>
        { props.editMode? <ProfileDataForm profile = {props.profile} 
          onSubmit = {onSubmit}
          initialValues = {props.profile.data}
          /> : 
         <div>
           <ProfileData 
          profile = {props.profile} 
          isOwner = {props.isOwner}
          />
          <Contacts
           contacts = {props.profile.data.contacts} 
           isOwner = {props.isOwner}
           onAddInfo = {onAddInfo}
          />
          </div>
          }
    </div>
  )
}

const ProfileData = (props) => {

  return(
    <div>
      <div>
        <div>
          {props.profile.data.fullName? <div>FullName: {props.profile.data.fullName}</div> : ''}
        </div>
        <div>
          {props.profile.data.aboutMe? <span>about Me:{props.profile.data.aboutMe}</span> :''}
        </div>
        <div>
          { props.profile.data.lookingForAJob ? <div> I am looking for a job </div> : '' }
        </div>
        <div>
        { props.profile.data.lookingForAJobDescription ? <div> my skills: { props.profile.data.lookingForAJobDescription } </div> : '' }
        </div>
      </div>
    </div>
  )
}
export default ProfileDescription