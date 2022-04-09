import { useState } from "react"
import { FaSignInAlt, FaUser } from "react-icons/fa"

function Login() {

    const [formData, setFormData] = useState({
        email: "",
        password: "",
    })

    const {  email, password } = formData

    const onChange = (e) => {
        setFormData((prevState) =>({
            ...prevState,
            [e.target.name]:e.target.value
        }))
    }

    const onSubmit = (e) => {
        e.preventDefault()
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
