import React from 'react'
import css from './Profile.module.css'
import Profile from './Profile'
import { connect } from 'react-redux'
import { Redirect, withRouter } from 'react-router'
import { setProfiles, getStatus, updateStatus } from '../../redux/reducer/profileReducer'
import { LoginRedirect } from '../Hoc/LoginRedirect'
import { compose } from 'redux'

class ProfileContainer extends React.Component {
  componentDidMount(){
    let userId = this.props.match.params.userId
   if(!userId){
    userId = this.props.myId
   }
    this.props.setProfiles(userId)  
    this.props.getStatus(userId)
  }
  render(){
    if(this.props.isAuthorized===false)return <Redirect to='/login' />
    LoginRedirect(ProfileContainer)
    return (
      <div className={ css.content }>
        <Profile 
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
    setProfiles: (userId) => {dispatch(setProfiles(userId))},
    getStatus: (userId) => {dispatch(getStatus(userId))},
    updateStatus: (status) => {dispatch(updateStatus(status))},
  }
}
let mapStateToProps = (state) =>({
    profile: state.profilePage.profile,
    isAuthorized: state.login.isAuthorized,
    status: state.profilePage.status,
    myId: state.login.id
})

export default compose (
  connect (mapStateToProps,mapDispatchToProps),
  withRouter
) (ProfileContainer)