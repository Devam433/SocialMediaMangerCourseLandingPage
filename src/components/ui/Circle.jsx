import React from 'react'

function Circle({className='',...props}) {
  return (
    <div className={`border  ${className}  bg-gradient-to-b from-pink-400 via-pink-600 to-blue-900 `} {...props} >
      {/* <img src="dotPattern.png" alt="" className=' object-cover  w-full h-[20%] md:h-[25%]'/> */}
    </div>
  )
}

export default Circle