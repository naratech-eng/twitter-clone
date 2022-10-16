import React from 'react'

const SidebarMenuItem = ({text,Icon, active}) => {
  return (
    <div className='hover-effect flex items-center text-gray-700 justify-center xl:justify-start
     text-lg space-x-3' >
    
    
    <Icon className="h-7" text={text}/>
    <span className={`${active && " font-bold"} hidden xl:inline`}>{text}</span>
    </div>
  )
}

export default SidebarMenuItem