import axios from 'axios'
import { SIGN_IN_WITH_GOOGLE, SIGN_OUT_WITH_GOOGLE, FETCH_CURRENT_USER } from "./types.js";


export const fetchCurrentUser = ()=> async dispatch => {
  let currentUser = await axios.get('/api/current_user')
  if(!currentUser.data){
    return console.log("Please Log in first.......");
  }  
  const payload = {
    isAuthenticated: true,
    userId: currentUser.data._id,
    avatar: currentUser.data.avatar,
    username: currentUser.data.username
  }
  dispatch({
    type: FETCH_CURRENT_USER,
    payload: payload,
  })
}

export const logout = ()=>async dispatch=>{
  try{
    console.log("res1");
    const res = await axios.get('/api/logout')
    console.log(res);
    console.log("res2");

  } catch(ex){
    console.log(ex);
    console.log("res3");
  }
  
  // const payload = {
  //   isAuthenticated: false,
  //   userId: undefined,
  //   avatar: undefined,
  //   username: undefined
  // }
  // dispatch({
  //   type: SIGN_OUT_WITH_GOOGLE,
  //   payload: payload
  // })
} 

export const signInGoogle = ()=> async dispatch =>{
  const response = await axios.get('/auth/google')
  console.log(response);
  dispatch({
    type: SIGN_IN_WITH_GOOGLE,
    payload: ""
  })
}
