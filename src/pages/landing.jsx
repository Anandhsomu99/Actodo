import { useLocation } from "react-router-dom"
import Header from "../components/header";
import Card from "../components/card";
import Todocontainer from "../components/todocontainer";
function Landing (){
    const data = useLocation()
    console.log()

    return(<div className="bg-black p-16">
    <div className="bg-[#EFEFEF] p-10 border rounded-md">
      {/* Header */}
      <Header name={data.state.user}></Header>
      {/* Card */}
      <div className="flex justify-between gap-7 my-5 flex-wrap">
        <Card bgcolor={"#8272DA"} title={"23"} subtitle={"Chennai"}></Card>
        <Card bgcolor={"#fd6663"} title={"12 October"} subtitle={"7.35 am"}></Card>
        <Card bgcolor={"#fca201"} title={"Built Using"} subtitle={"React"}></Card>
      </div>
      <Todocontainer></Todocontainer>
    </div>
  </div>)
}

export default Landing