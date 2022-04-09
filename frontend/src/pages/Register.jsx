import { useState } from "react"
import { FaUser } from "react-icons/fa"

function Register() {

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        password2: ""
    })

    const { name, email, password, password2 } = formData

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
