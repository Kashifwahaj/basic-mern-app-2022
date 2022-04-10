import { useEffect, useState } from "react"
import { FaUser } from "react-icons/fa"
import { useNavigate } from "react-router"
import {useDispatch,useSelector} from "react-redux"
import { toast } from "react-toastify"
import { register, reset } from "../features/auth/authSlice"
import Spinner from "../components/Spinner"

function Register() {

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        password2: ""
    })

    const { name, email, password, password2 } = formData

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

        if(password !== password2){
            toast.error("Passwords Not match")
        } else{
            const userData = {
                name,
                email,
                password
            }

            dispatch(register(userData))
        }
    }

    if(isLoading){
        return <Spinner/>
    }

    return (
        <>
            <section className="heading">
                <h1>
                    <FaUser /> Register
            </h1>
                <p>Please create am account</p>
            </section>
            <section>
                <form onSubmit={onSubmit}>
                    <div className="form-group">
                        <input type="text" name="name" id="name" placeholder="Enter Name" value={name} onChange={onChange} />
                    </div>
                    <div className="form-group">
                        <input type="email" name="email" id="email" placeholder="Enter Email" value={email} onChange={onChange} />
                    </div>
                    <div className="form-group">
                        <input type="password" name="password" id="password" placeholder="Enter Password" value={password} onChange={onChange} />
                    </div>
                    <div className="form-group">
                        <input type="password" name="password2" id="password2" placeholder="Confirm Password" value={password2} onChange={onChange} />
                    </div>
                    <div className="form-group">
                        <button type="submit" className="btn btn-block">Submit</button>
                    </div>
                </form>
            </section>
        </>
    )
}

export default Register
