import React from 'react'
import LeftContent from './LeftContent'
import RightContent from './RightContent'

const Page1Content = (props) => {
  return (
    <div className='px-18 pb-16 pt-6 h-[90vh] flex items-center gap-10'>
        <LeftContent/>
        <RightContent user={props.user}/>
    </div>
  )
}

export default Page1Content