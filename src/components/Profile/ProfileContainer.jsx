import React from 'react'
import css from './Profile.module.css'
import Profile from './Profile'
import { connect } from 'react-redux'
import { Redirect, withRouter } from 'react-router'
import { setProfiles, getStatus, updateStatus, savePhoto, updateProfileData, editModeTrueAC } from '../../redux/reducer/profileReducer'
import { LoginRedirect } from '../Hoc/LoginRedirect'
import { compose } from 'redux'

class ProfileContainer extends React.Component {
  refreshProfile(){
    let userId = this.props.match.params.userId
    if(!userId)userId = this.props.myId  
    this.props.setProfiles(userId)  
    this.props.getStatus(userId)
  }
  componentDidMount(){
    this.refreshProfile()
  }
  componentDidUpdate(prevProps){
    if(prevProps.match.params.userId !== this.props.match.params.userId){
      this.refreshProfile()
    }
  }
  render(){
    if(this.props.isAuthorized===false)return <Redirect to='/login' />
    LoginRedirect(ProfileContainer)
    return (
      <div className={ css.content }>
        <Profile 
          editModeTrue ={this.props.editModeTrueAC}
          editMode = {this.props.editMode}
          updateProfileData = {this.props.updateProfileData}
          savePhoto = { this.props.savePhoto }
          isOwner = { !this.props.match.params.userId }
          status = { this.props.status }
          profile = { this.props.profile }
          updateStatus = { this.props.updateStatus }
        />
      </div>
    )
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    editModeTrueAC: (editStatus) =>{dispatch(editModeTrueAC(editStatus))},
    updateProfileData:(profile) =>{dispatch(updateProfileData(profile))},
    setProfiles: (userId) => {dispatch(setProfiles(userId))},
    getStatus: (userId) => {dispatch(getStatus(userId))},
    updateStatus: (status) => {dispatch(updateStatus(status))},
    savePhoto: (file) => {dispatch(savePhoto(file))}
  }
}
let mapStateToProps = (state) =>({
    profile: state.profilePage.profile,
    isAuthorized: state.login.isAuthorized,
    status: state.profilePage.status,
    myId: state.login.id,
    editMode: state.profilePage.editMode
})

export default compose (
  connect (mapStateToProps,mapDispatchToProps),
  withRouter
) (ProfileContainer)