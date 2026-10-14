import { useState } from "react"

function Addtodoform(props) {
        const activityarr = props.activityarr
        const setactivityarr = props.setactivityarr

        const [newactivity,setnewactivity]= useState("")

        function Handlechange(evt){
                setnewactivity(evt.target.value)
        }

        function Addactivity(){
            setactivityarr([...activityarr,{id:activityarr.length+1,activity:newactivity}])
            setnewactivity("")
        }

    return (
        <div className="flex flex-col gap-3">
            <h1 className="text-2xl font-medium">Manage Activities</h1>
            <div>
                <input value={newactivity} onChange={Handlechange} type="text" className="border border-black bg-transparent p-1" placeholder="Next Activity?" />
                <button onClick={Addactivity} className="bg-black text-white p-1 border border-black">Add</button>
            </div>
        </div>
    )
}

export default Addtodoform 