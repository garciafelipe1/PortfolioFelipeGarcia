import React from 'react'

const TitleHeader =({title}) => {
  return (
    <div className='flex flex-col items-left ml-60 '>
        <div className="font-semibold md:text-4xl text-3xl text-left">
            {title}
        </div>
    </div>
    
  )
}

export default TitleHeader