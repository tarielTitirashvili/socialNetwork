import * as axios from 'axios'

let instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {"API-KEY": "7d0e57f8-2331-466d-af9d-7bc85aa435d6"}
})

export const sendLoginData = (email, password) =>{
    return instance.post(`/auth/login`,{email}, {password}, )
}

export const setProfileAPI = (userId) => {
    return instance.get(`profile/${userId}`,)    
}

export const getProfileStatus = (userId) => {
    return instance.get(`/profile/status/${userId}`,)   
}

export const updateStatusAPI = (status) => {
    return instance.put(`/profile/status`,{"status": status})   
}

export const savaProfileDataAPI = (profile) => {
    return instance.put(`/profile`, profile)   
}

export const getUsers = (currentPage = 1, pageSize = 10) => { 
    return instance.get(`users?page=${currentPage}&count=${pageSize}`, )
    .then( response => { return response.data })
}

export const followAPI = (id) => {
return instance.post(`follow/${id}`, {}, )
}

export const unfollowAPI = (id) => {
    return instance.delete(`follow/${id}`, {}, )
}

export const loginAPI = () =>{
    return instance.get(`auth/me`,)
}

export const loginAuthMeAPI = (email, password, rememberMe, captcha=null) =>{
    return instance.post(`auth/login`,{email, password, rememberMe, captcha })
}
export const logOutAPI = () =>{
    return instance.delete(`auth/login`,)
}
export const savePhotoApi = (file) => {
    var formData = new FormData()
    formData.append("image", file)
    return instance.put(`profile/photo`, formData, {
        headers: {
        'Content-Type': 'multipart/form-data'
        }
    })
}
export const securityAPI = () => {
    return instance.delete(`/security/get-captcha-url`, {}, )
}