import { useDispatch, useSelector } from "react-redux"
import { SetLoginStatus } from "../redux/authSlice"

export const useAuthRedux = () => {
    const auth = useSelector(state => state.auth)
    const dispatch = useDispatch()

    return {
        ...auth,
        setLoginStatus: (status) => dispatch(SetLoginStatus(status)),
    }
}