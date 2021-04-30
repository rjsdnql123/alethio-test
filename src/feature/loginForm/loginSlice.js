import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    error: "",
    status: false,
         token: ''
  };

  const LoginReducer = createSlice({
       name: 'user',
       initialState: initialState,
         reducers: {
            setToken(state,action) {
                //로그인 회원가입 성공시 불러오기

            },
            loginError(state,action) {
                //회원가입 로그인 실패시
            },
            loginaction(state){
                //이 액션이 들어오면 리덕스 사가로 로그인에 post
            }
       }
  })

  export const {
      setToken,
      loginError,
      loginaction
  } = LoginReducer.actions

  export default LoginReducer.reducer