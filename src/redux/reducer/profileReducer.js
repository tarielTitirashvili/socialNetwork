const addNewPostCaller = "addNewPost"

const updateNewPostTextCaller = "updateNewPostText"

const setProfile = 'setProfile'

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
  profile:null
}

const profileReducer = (state = initialState, action) => {
  
  switch (action.type) {
    case updateNewPostTextCaller: {
      let stateCopy = { ...state }
      stateCopy.newPostText = action.newText
      return stateCopy
    }
    case addNewPostCaller: {
      let stateCopy = { ...state }
      stateCopy.postContent = [ ...state.postContent ]
      let newPost = {
        id: 4,
        text: stateCopy.newPostText,
        likes: "12"
      }
      stateCopy.postContent.push(newPost)
      stateCopy.newPostText = ''
      return stateCopy
    }
    case setProfile:{
      return {
        ...state,
        profile: action.profile,
      }
    }
    default: return state
  }
}

export const setProfileAC = (profile) => ({ type: setProfile, profile })
  
export const addNewPostAction = () => ({ type: addNewPostCaller })

export const updateNewPostTextAction = (text) => ({ type: updateNewPostTextCaller, newText: text })

export default profileReducer