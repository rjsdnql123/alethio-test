import {useSelector, useDispatch} from 'react-redux'
import { useCallback } from "react";
import {loginError,setToken,loginaction} from '../feature/loginForm/loginSlice'

function useUserHook() {
    const dispatch = useDispatch();
    const userProfile = useSelector((state) => state)
    const loginApi = useCallback((data) => dispatch(loginaction(data)),[dispatch])
    return {
        userProfile,
        loginApi
    }
}

export default useUserHook