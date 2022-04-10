import { FaSignInAlt, FaUser } from "react-icons/fa"
import { useDispatch, useSelector } from "react-redux"
import { Link, useNavigate } from "react-router-dom"
import { logout, reset } from "../features/auth/authSlice"

function Header() {
    const {user} = useSelector(state => state.auth)
    const dispatch = useDispatch()
    
    const navigate = useNavigate();


    const onLogout = () => {
        dispatch(logout())
        dispatch(reset())
        navigate('/')
    }

    return (
        <header className="header">
            <div className="logo">
                <Link to="/" >Goal Setter</Link>
            </div>
            <ul>
                {user ? (
                     <li>
                     <button className="btn" onClick={onLogout}>
                         <FaSignInAlt/> Logout
                     </button>
                 </li>
                ) : (
                    <>
                <li>
                    <Link to="/login">
                        <FaSignInAlt/> Login
                    </Link>
                </li>
                <li>
                    <Link to="/register">
                        <FaUser/> Register
                    </Link>
                </li>
                </>
                )}
            </ul>
        </header>
    )
}

export default Header
