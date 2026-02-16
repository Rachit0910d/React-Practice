
import LeftContent from './LeftContent'
import RightContent from './RightContent'

const Page1Content = (props) => {
  console.log(props)
  return (
    <div className="py-16 pt-6 flex items-center h-[90vh] px-18 gap-10">
        <LeftContent />
        <RightContent users={props.users}/>

    </div>
  )
}

export default Page1Content