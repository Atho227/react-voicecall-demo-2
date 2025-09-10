import { useDispatch, useSelector } from "react-redux"
import { setLoginStatus } from "../redux/slices/authSlice"

export const useAuthRedux = () => {
    const auth = useSelector(state => state.auth)
    const dispatch = useDispatch()

    return {
        ...auth,
        setLoginStatus: (status) => dispatch(setLoginStatus(status)),
    }
}