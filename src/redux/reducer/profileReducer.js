import { setProfileAPI, getProfileStatus, updateStatusAPI,savePhotoApi, savaProfileDataAPI } from '../../Api/Api'
import {stopSubmit} from 'redux-form';

const addNewPostCaller = 'addNewPost'
const setProfile = 'setProfile'
const SET_STATUS = 'setStatus'
const onSavePhotoSuccess = 'onSavePhotoSuccess'
const CHANGE_EDIT_MODE_TRUE = 'CHANGE_EDIT_MODE_TRUE'

let initialState = {
  postContent: [{
    id: 1,
    text: "hi i am trail titirashvili",
    likes: "13"
  }, {
    id: 2,
    text: "i am god for this website",
    likes: "1232"
  }, {
    id: 3,
    text: "love me and fear meD",
    likes: "6819"
  }],
  newPostText: "marilee ascfasfdasdf",
  profile:null,
  status: null,
  editMode:false,
}

const profileReducer = (state = initialState, action) => {
  
  switch (action.type) {
    case addNewPostCaller: {
      let stateCopy = { ...state }
      stateCopy.postContent = [ ...state.postContent ]
      let newPost = {
        id: 4,
        text: action.postContent,
        likes: "12"
      }
      stateCopy.postContent.push(newPost)
      return stateCopy
    }
    case setProfile:{
      return {
        ...state,
        profile: action.profile,
      }
    }
    case SET_STATUS:{
      return{
        ...state,
        status: action.status,
      }
    }
    case onSavePhotoSuccess:{
      return{
        ...state,
        profile: {...state.profile, data: {...state.profile.data, photos: action.photos }}
      }
    }
    case CHANGE_EDIT_MODE_TRUE:{
      return{
      ...state,
      editMode: action.editStatus
      }
    }
    default: return state
  }
}
export const editModeTrueAC = (editStatus) => ({ type: CHANGE_EDIT_MODE_TRUE ,editStatus})

export const setProfileAC = (profile) => ({ type: setProfile, profile })
  
export const addNewPostAction = (postContent) => ({ type: addNewPostCaller, postContent })

export const updateStatusAC = (status) =>({ type:SET_STATUS, status })

const savePhotoSuccess = (photos) =>({ type: onSavePhotoSuccess ,photos })

export const setProfiles = (userId)=>{
  return async (dispatch)=>{
    let response = await setProfileAPI(userId)
      dispatch(setProfileAC(response)) 
  }
}
export const getStatus = (userId) =>{
  return async (dispatch)=>{
    let response = await getProfileStatus(userId)
      dispatch(updateStatusAC(response.data))
  }
} 
export const updateStatus = (status) =>{
  return async (dispatch)=>{
    let response = await updateStatusAPI(status) 
      if(response.data.resultCode === 0){
        dispatch(updateStatusAC(status))
      }
  }
} 
export const savePhoto = (file) =>{
  return async (dispatch) =>{
    let response = await savePhotoApi(file)
    if(response.data.resultCode === 0){
      dispatch(savePhotoSuccess(response.data.data.photos))
    }
  }
}

export const updateProfileData = (profile) =>async (dispatch) =>{
  let response = await  savaProfileDataAPI(profile)
  if(response.data.resultCode === 0){
    dispatch(editModeTrueAC(false))
    dispatch(setProfiles(profile.userId))
  }else{
    console.log(response.data)
    dispatch(stopSubmit('profile_data',{_error: response.data.messages[0]}))
  }
}

export default profileReducer