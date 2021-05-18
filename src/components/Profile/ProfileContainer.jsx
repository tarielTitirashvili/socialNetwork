import React from 'react'
import css from './Profile.module.css'
import axios from 'axios'
import Profile from './Profile'
import { connect } from 'react-redux'
import { setProfileAC } from '../../redux/reducer/profileReducer'
import { withRouter } from 'react-router'

class ProfileContainer extends React.Component {
  componentDidMount(){
    let userId = this.props.match.params.userId
    if(!userId){
      userId = 2
    }
    axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
    .then((response) => {
      this.props.setUser(response) 
    })
  }
  render(){
    return (
      <div className={css.content}>
        <Profile profile = {this.props.profile} />
      </div>
    )
  }
}



let mapDispatchToProps = (dispatch) => {
  return {
    setUser:(profile) => {dispatch(setProfileAC(profile))}
  }
}


let mapStateToProps = (state) =>({
    profile: state.profilePage.profile
})

let WithUrlDataContainerComponent = withRouter (ProfileContainer)

export default connect (mapStateToProps,mapDispatchToProps) (WithUrlDataContainerComponent)