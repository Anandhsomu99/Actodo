function Todoitem(props) {
    const setactivityarr = props.setactivityarr
    const activityarr = props.activityarr

    function Handledelete(deleteid) {

        var temarr = activityarr.filter(function (item) {
            if (item.id === deleteid) {
                return false
            } else {
                return true
            }
        })
        setactivityarr(temarr)
    }

    return (
        <div className="flex justify-between">
            <p>{props.index + 1}.{props.item.activity}</p>
            <button className="text-red-700" onClick={() => Handledelete(props.id)} >Delete</button>
        </div>
    )
}
export default Todoitem