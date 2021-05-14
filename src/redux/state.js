import addMassageReducer from "./reducer/addMassageReducer"
import addPostsReducer from "./reducer/addPostsReducer"

let store = {
  _state: {
    dialogsPage: {
      dialogFriends: [{
        id: 1,
        name: "kaxa",
        url: "https://upload.wikimedia.org/wikipedia/commons/8/8f/Tod_Machover_JI1.jpg",
      }, {
        id: 2,
        name: "dali",
        url: "https://i.pinimg.com/736x/75/40/64/7540648e327234b791e6bc13c499cb8c.jpg",
      }, {
        id: 3,
        name: "lasja",
        url: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
      }],
      massages: [{
        id: 1,
        massage: "Lorem ipsum dolor sit, amet consectetur",
        me: true,
      }, {
        id: 2,
        massage: "Lorem ipsum dolor sit, amet consectetur bjn jh jnk jask bjas nk",
        me: false,
      }, {
        id: 3,
        massage: "Lorem ipsum dolor sit, amet consectetur",
        me: true,
      }],
      newMassageText: "tariel"
    },
    profilePage: {
      postContent: [{
        id: 1,
        text: "hi i am tariel titirashvili",
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
      newPostText: "tarielc ascfasfdasdf"
    }
  },
  getState() {
    return this._state
  },
  subscribe(observer) {
    store.rerender = observer
  },
  rerender() {
  },
  dispatch(action) {
    addPostsReducer(this._state.profilePage, action)
    addMassageReducer(this._state.dialogsPage, action)

    this.rerender(this._state)
  }
}
export default store