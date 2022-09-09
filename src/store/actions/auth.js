import axios from "axios"
import * as actionType from "./actionTypes"

export const authStart = () => {
    return {
        type:actionType.AUTH_START
    }
}
export const authSuccess = (token, userId) => {
    return {
        type:actionType.AUTH_SUCCESS,
        token:token,
        userId:userId
    }
}
export const authFail = (error) => {
    return {
        type:actionType.AUTH_FAIL,
        error:error
    }
}
export const authLogout = ()=>{
    localStorage.removeItem("token")
    localStorage.removeItem("expiresIn")
    localStorage.removeItem("localId")
    return {
        type:actionType.AUTH_LOGOUT
    }
}
export const checkAuthTimeout = (expiresIn)=>{
    return dispatch => {
        setTimeout(()=>{
            dispatch(authLogout())
        }, parseInt(expiresIn) * 1000)
    }
}

export const authenticate = (email, password, isSignup) => {
    return dispatch =>{
        const authData = {
            email:email,
            password:password,
            returnSecureToken:true
        }
        let url = "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyA7JsIYRdsTqDPiP4GorEUuKW9z7pg7v9M"
        if(!isSignup){
            url ="https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyA7JsIYRdsTqDPiP4GorEUuKW9z7pg7v9M"
        }
        dispatch(authStart())
        axios.post(url, authData)
        .then(response => {

            localStorage.setItem("token",response.data.idToken )
            localStorage.setItem("expiresIn",new Date(new Date().getTime() + response.data.expiresIn * 1000))
            localStorage.setItem("localId",response.data.localId)

            dispatch(authSuccess(response.data.idToken,response.data.localId))
            dispatch(checkAuthTimeout(response.data.expiresIn))
        }).catch(error =>{
            dispatch(authFail(error.response.data.error.message))
        })
    }
}

export const orderPurchase = ()=>{
    return {
        type:actionType.ORDER_TO_PURCHASE
    }
}
export const authCheckState = () =>{
    return dispatch => {
        const token = localStorage.getItem("token")
            if(!token){
                dispatch(authLogout())
            } else{
            

                const expiresIn = localStorage.getItem("expiresIn")
                if(new Date(expiresIn) > new Date()){
                    
                    const localId = localStorage.getItem("localId")
                    dispatch(authSuccess(token, localId))
                    dispatch(checkAuthTimeout(((new Date(expiresIn).getTime() - new Date().getTime())/ 1000)))
                } else {
                    dispatch(authLogout())
                }
            }
    }
}