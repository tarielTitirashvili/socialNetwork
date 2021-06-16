import React from 'react'
import FB from '../../../../images/fb.png'
import GITHUB from '../../../../images/github.png'
import INSTAGRAM from '../../../../images/instagram.png'
import TWITTER from '../../../../images/twitter.png'
import VK from '../../../../images/vk.jpg'
import YOUTUBE from '../../../../images/youtube.png'

import css from './Contacts.module.css'

const Contacts = (props) => {

    return(
      <div>
        <div className = {css.Contacts_title}>
            Contacts:
        </div>
        <div className = {css.wrapper}>
            <div>
                { props.contacts.facebook ? <a href = {props.contacts.facebook} target = 'blank' rel="noopener noreferrer" > <img className = {css.contact_icons} src ={FB} alt = 'facebook' /></a> : '' }
            </div>
            <div>
                { props.contacts.github ? <a href = {props.contacts.github} target = 'blank' rel="noopener noreferrer" > <img className = {css.contact_icons} src ={GITHUB} alt = 'github' /></a> : '' }
            </div>
            <div>
                { props.contacts.instagram ? <a href = {props.contacts.instagram} target = 'blank' rel="noopener noreferrer" > <img className = {css.contact_icons} src ={INSTAGRAM} alt = 'instagram' /></a> : '' }
            </div>
            <div>
                { props.contacts.twitter ? <a href = {props.contacts.twitter} target = 'blank' rel="noopener noreferrer" > <img className = {css.contact_icons} src ={TWITTER} alt = 'twitter' /></a> : '' }
            </div>
            <div>
                { props.contacts.vk ? <a href = {props.contacts.vk} target = 'blank' rel="noopener noreferrer" > <img className = {css.contact_icons} src ={VK} alt = 'vk' /></a> : '' }
            </div>
            <div>
                { props.contacts.youtube ? <a href = {props.contacts.youtube} target = '_blank' rel="noopener noreferrer"> <img className = {css.contact_icons} src ={YOUTUBE} alt = 'vk' /></a> : '' }
            </div>
        </div>
        <div>
            { props.contacts.website ? <div> website: <a target = 'blank' rel="noopener noreferrer" href = {props.contacts.website}>{props.contacts.website}</a></div> : '' }
        </div>
        <div>
            { props.contacts.mainLink ? <div> mainLink: <a target = 'blank' rel="noopener noreferrer" href = {props.contacts.mainLink}>{props.contacts.mainLink}</a></div> : '' }
        </div>
        {props.isOwner?
          <button className = 'btn btn-success' onClick = {props.onAddInfo} >
            Add info
          </button>: ''
        }
      </div>
    )
}

  export default Contacts