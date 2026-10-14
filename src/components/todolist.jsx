import Todoitem from "./todoitem"

function Todolist(props) {
    const activityarr = props.activityarr
    const setactivityarr = props.setactivityarr
    return (
        <div className="bg-[#bdb4ea] p-2 flex-grow">
            <h1 className="text-2xl font-medium">Todays Activity</h1>
            {activityarr.length===0?<p>You Haven't Add Anything Yet</p>:""}
            {
                activityarr.map(function(item,index){
                    return(
                        <Todoitem id={item.id} item={item} index={index} setactivityarr={setactivityarr} activityarr={activityarr}></Todoitem>
                    )
                })
            }
        </div>
    )
}
export default Todolist