import { useState } from "react"
import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom"
function Signup(props) {
    const user = props.user
    const setuser = props.setuser

    const [eusername,seteusername] = useState()
    const [epassword,setepassword] = useState()

    const navigate = useNavigate()

    function Handleuinput(evt){
        seteusername(evt.target.value)
    }
    function Handlepinput(evt){
        setepassword(evt.target.value)
    }
    function Adduser(){
        setuser([...user,{username:eusername,password:epassword}])
        navigate("/")
    }
    return (
        <div className="bg-black p-10">
            <div className="bg-white p-10 border rounded-md">
                <h1 className="text-2xl font-medium">Hey Hi</h1>
                <p>Sign Up Here :-)</p>
            <div className="flex flex-col gap-2 my-2">
                <input onChange={Handleuinput} placeholder="User Name" type="text" className="w-52 border-black p-1 bg-transparent border rounded" />
                <input onChange={Handlepinput} placeholder="Password" type="text" className="w-52 border-black p-1 bg-transparent border rounded" />
                <input placeholder="Confirm Password" type="text" className="w-52 border-black p-1 bg-transparent border rounded" />
                <button onClick={Adduser} className="w-24 bg-purple-400 p-1 rounded ">Sign Up</button>
                <p>Already have an account? <Link to="/" className="underline">Login</Link></p>

            </div>
            </div>
        </div>
    )
}
export default Signup