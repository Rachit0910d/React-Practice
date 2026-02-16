import Rightcard from "./Rightcard"



const RightContent = (props) => {
  console.log(props)
  return (
    <div id="right-div" className=" overflow-x-auto w-2/3 h-full p-6 flex flex-nowrap gap-10">
        {props.users.map((elem) =>{
          return <Rightcard img={elem.img} tag={elem.tag}/>
        })}
        
    </div>
    
  )
}

export default RightContent