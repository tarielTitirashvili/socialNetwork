import { setProfileAPI, getProfileStatus, updateStatusAPI } from '../../Api/Api'

const addNewPostCaller = 'addNewPost'
const setProfile = 'setProfile'
const SET_STATUS = 'setStatus'

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
    default: return state
  }
}

export const setProfileAC = (profile) => ({ type: setProfile, profile })
  
export const addNewPostAction = (postContent) => ({ type: addNewPostCaller, postContent })

export const updateStatusAC = (status) =>({ type:SET_STATUS, status })

export const setProfiles = (userId)=>{
  return (dispatch)=>{
    setProfileAPI(userId)
    .then((response) => {
      dispatch(setProfileAC(response)) 
    })
  }
}
export const getStatus = (userId) =>{
  return(dispatch)=>{
    getProfileStatus(userId)
    .then(response =>{
      dispatch(updateStatusAC(response.data))
    })
  }
} 
export const updateStatus = (status) =>{
  return(dispatch)=>{
    updateStatusAPI(status)
    .then(response =>{
      if(response.data.resultCode === 0){
        dispatch(updateStatusAC(status))
      }
    })
  }
} 
export default profileReducer