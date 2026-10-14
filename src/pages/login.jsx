import { useState } from "react"
import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom"
function Login(props) {
    const navigate = useNavigate()
    const [eusername, seteusername] = useState()
    const [epassword, setepassword] = useState()
    const [ruser, setruser] = useState(true)

    const user = props.user
    function Handleuinput(evt) {
        seteusername(evt.target.value)
    }
    function Handlepinput(evt) {
        setepassword(evt.target.value)
    }

    function Checkuser() {
        var userfound = false

        user.forEach(function (item) {
            if (item.username === eusername && item.password === epassword) {
                console.log("login successful")
                userfound = true
                navigate("/landing", {
                    state: { user: eusername }
                })
            }
        })
        if (userfound === false) {
            console.log("Login Failed")
            setruser(false)
        }
    }

    return (
        <div className="bg-black p-10">
            <div className="bg-white p-10 border rounded-md">
                <h1 className="text-2xl font-medium">Hey Hi</h1>
                {ruser ? <p>I help you manage your activity after you Login :-)</p> : <p className="text-red-800">Please sign up before you login</p>}

                <div className="flex flex-col gap-2 my-2">
                    <input onChange={Handleuinput} placeholder="User Name" type="text" className="w-52 border-black p-1 bg-transparent border rounded" />
                    <input onChange={Handlepinput} placeholder="Password" type="text" className="w-52 border-black p-1 bg-transparent border rounded" />

                    <button className="w-24 bg-orange-400 p-1 rounded " onClick={Checkuser}>Login</button>

                    <p>Don't have an account? <Link to="/Signup" className="underline">Sign Up</Link></p>

                </div>
            </div>
        </div>
    )
}

export default Login