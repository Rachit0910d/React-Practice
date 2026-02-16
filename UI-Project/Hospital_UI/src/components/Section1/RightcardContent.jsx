import React from 'react'

const RightcardContent = (props) => {
  return (
    <div className="absolute top-0 left-0 h-full w-full p-8 flex flex-col justify-between">
        <h2 className="bg-white rounded-full h-14 w-14 flex justify-center items-center text-2xl font-semibold">
         {1}
        </h2>
        <div>
          <p className="text-xl leading-relaxed text-white mb-10">
            Lorem ipsum dolor sit amet. Lorem ipsum dolor, sit amet consectetur
            adipisicing elit. Sit, sapiente!
          </p>

          <div className="flex justify-between">
            <button className="bg-blue-600 text-white font-medium py-2 px-8 rounded-full">{props.tag}</button>
            <button className="bg-blue-600 text-white font-medium py-2 px-3 rounded-full">
              <i className="ri-arrow-right-line"></i>
            </button>
          </div>
        </div>
      </div>
  )
}

export default RightcardContent