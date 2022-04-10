import { useEffect, useState } from "react"
import { FaSignInAlt } from "react-icons/fa"
import { useDispatch, useSelector } from "react-redux"
import Spinner from "../components/Spinner"
import { useNavigate } from "react-router"
import { login, reset } from "../features/auth/authSlice"
import { toast } from "react-toastify"

function Login() {

    const [formData, setFormData] = useState({
        email: "",
        password: "",
    })

    const {  email, password } = formData


    const navigate = useNavigate();
    const dispatch = useDispatch();

    const {user,isLoading,isSuccess,isError,message} = useSelector(state => state.auth)

    useEffect(() => {
        
        if(isError){
            toast.error(message)
        }
        
        if(isSuccess || user){
            navigate('/')
        }

        dispatch(reset())

    }, [user,isError,isSuccess,message,navigate,dispatch])




    const onChange = (e) => {
        setFormData((prevState) =>({
            ...prevState,
            [e.target.name]:e.target.value
        }))
    }

    

    const onSubmit = (e) => {
        e.preventDefault()

            const userData = {
                email,
                password
            }

            dispatch(login(userData))
        }


    if(isLoading){
        return <Spinner/>
    }

    return (
        <>
            <section className="heading">
                <h1>
                    <FaSignInAlt /> Login
            </h1>
                <p>Login</p>
            </section>
            <section>
                <form onSubmit={onSubmit}>
                    <div className="form-group">
                        <input type="email" name="email" id="email" placeholder="Enter Email" value={email} onChange={onChange} />
                    </div>
                    <div className="form-group">
                        <input type="password" name="password" id="password" placeholder="Enter Password" value={password} onChange={onChange} />
                    </div>
                    <div className="form-group">
                        <button type="submit" className="btn btn-block">Submit</button>
                    </div>
                </form>
            </section>
        </>
    )
}

export default Login
