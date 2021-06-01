import React from 'react'
import { Fragment } from 'react'
import { Redirect } from 'react-router'

export const LoginRedirect = (Component)=>{

    const RedirectComponent = (props) =>{
        if(this.props.isAuthorized===false)return <Redirect to='/login'/>
        return(
            <Fragment>
                <Component {...props}/>
            </Fragment>
        )
    }
    return <RedirectComponent/>
}

