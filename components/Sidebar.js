import Image from 'next/image'
import React from 'react'

import logo from '../images/logo.png'
import SidebarMenuItem from './SidebarMenuItem'
import { HomeIcon, HashtagIcon, BellIcon, InboxIcon, BookmarkIcon, ClipboardIcon, UserIcon, EllipsisHorizontalCircleIcon, EllipsisHorizontalIcon } from '@heroicons/react/24/solid'


const Sidebar = () => {
  return (
    <div className='hidden sm:flex flex-col p-2 xl:items-start fixed h-full'>
    {/* logo */}

    <div className=' hover-effect p-0 hover:bg-blue-100 xl:p-1'>
        <Image src={logo} width={64} height={64}/>

    </div>


    {/* menu */}
    <div className=' mt-4 mb-2 xl:items-start'>

        <SidebarMenuItem text="Home" Icon={HomeIcon} active/>
        <SidebarMenuItem text="Explore" Icon={HashtagIcon}/>
        <SidebarMenuItem text="Notifications" Icon={BellIcon}/>
        <SidebarMenuItem text="Messages" Icon={InboxIcon}/>
        <SidebarMenuItem text="Bookmarks" Icon={BookmarkIcon}/>
        <SidebarMenuItem text="Lists" Icon={ClipboardIcon}/>
        <SidebarMenuItem text="Profile" Icon={UserIcon}/>
        <SidebarMenuItem text="More" Icon={EllipsisHorizontalCircleIcon}/>

    </div>

    {/* Button */}

    <button className=' bg-blue-400 text-white rounded-full w-56 h-12 text-lg font-bold shadow-md brightness-95 hidden xl:inline'>Tweet</button>

    {/* Mini-profile */}
    <div className="hover-effect flex items-center justify-center text-gray-700 mt-auto xl:justify-start">

        <img src="https://avatars.githubusercontent.com/u/8349095?v=4" alt="user-img" className="rounded-full h-12 w-auto"/>
        
        <div className=" leading-5 hidden xl:inline">
            <h4 className='font-bold'>Sanjeewa Narayana</h4>
            <p className=' text-gray-500'>@cryptoFXHodler</p>
        </div>
            <EllipsisHorizontalIcon className=' h-5 xl:ml-8 hidden xl:inline'/>
    </div>


    
    </div>
  )
}

export default Sidebar