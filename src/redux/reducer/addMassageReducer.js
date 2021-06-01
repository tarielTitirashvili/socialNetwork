const addNewMassageCaller = "addNewMassage"

const updateNewMassageTextCaller = "updateNewMassageText"

let initialState = {
  dialogFriends: [{
    id: 1,
    name: "kara",
    url: "https://upload.wikimedia.org/wikipedia/commons/8/8f/Tod_Machover_JI1.jpg",
  }, {
    id: 2,
    name: "dali",
    url: "https://i.pinimg.com/736x/75/40/64/7540648e327234b791e6bc13c499cb8c.jpg",
  }, {
    id: 3,
    name: "lased",
    url: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
  }],
  massages: [{
    id: 1,
    massage: "Lorem ipsum dolor sit, amer consecrator",
    me: true,
  }, {
    id: 2,
    massage: "Lorem ipsum dolor sit, amer consecrator bjn jh jnk amer consecrator nk",
    me: false,
  }, {
    id: 3,
    massage: "Lorem ipsum dolor sit, amer consecrator",
    me: true,
  }],
  newMassageText: "tardier"
}

const addMassageReducer = (state = initialState, action) => {
  switch (action.type) {
    case addNewMassageCaller:{
      let stateCopy = { ...state }
      stateCopy.massages = [ ...state.massages ]
      let newMassageContent = {
        id: 4,
        massage: action.massage,
        me: true
      }
      stateCopy.massages.push(newMassageContent)
      stateCopy.newMassageText = ""
      return stateCopy
    }
    case updateNewMassageTextCaller:{
      let stateCopy = { ...state }
      stateCopy.newMassageText = action.text
      return stateCopy
    }
    default: return state
  }

}

export const addNewMassageAction = (massage) => ({ type: addNewMassageCaller, massage })

export default addMassageReducer