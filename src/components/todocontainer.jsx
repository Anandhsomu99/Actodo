import Addtodoform from "./addtodoform"
import Todolist from "./todolist"
import { useState } from "react"
function Todocontainer() {
    const [activityarr, setactivityarr] = useState([
        {
            id: 1,
            activity: "Go for a walk"
        },
        {
            id: 2,
            activity: "Have a breakfast"
        },
        {
            id: 3,
            activity: "Take a shower"
        }
    ])
    return (
        <div>
            <div className="flex gap-3 flex-wrap">
                <Addtodoform activityarr={activityarr} setactivityarr={setactivityarr}></Addtodoform>
                <Todolist activityarr={activityarr} setactivityarr={setactivityarr}></Todolist>
            </div>
        </div>
    )
}

export default Todocontainer