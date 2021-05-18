import axios from "axios"
import React from "react"
import { Fragment } from "react"
import Header from './header'

class HeaderContainer extends React.Component {
    componentDidMount(){
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`,{withCredentials: true} )
      .then((response) => {
        console.log(response)
      })
    }
  render() {
    return (
        <Fragment>
            <Header
            {...this.props}
            />
        </Fragment>
    )
  }
}

export default HeaderContainer