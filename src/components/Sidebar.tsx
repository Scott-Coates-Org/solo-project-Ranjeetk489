
import { MdOutlineDashboardCustomize } from 'react-icons/md';
import { BsFillCalendar3WeekFill } from 'react-icons/bs';
import { FaPrescriptionBottleAlt, FaWalking, FaMapMarkerAlt } from "react-icons/fa";
import { MdMessage } from 'react-icons/md';
import { BiMessageDetail } from "react-icons/bi";
import { TbReport } from 'react-icons/tb';
import { IoIosCloudUpload } from 'react-icons/io'



import { NextPage } from 'next';



const Sidebar: NextPage = () => {

    return (
        <>
            <div className='flex flex-col gap-3 w-[6rem] overflow-hidden shadow-2xl p-6 dark:bg-black md:hover:w-1/4 lg:hover:w-[17rem] duration-500'>
                <SidebarItem MenuIcon={MdOutlineDashboardCustomize} menuName="Dashboard" />
                <SidebarItem MenuIcon={BsFillCalendar3WeekFill} menuName="Calendar" />
                <SidebarItem MenuIcon={IoIosCloudUpload} menuName="Upload Reports" />
                <SidebarItem MenuIcon={FaPrescriptionBottleAlt} menuName="Prescription Tracker" />
                <span className='mt-6 w-[3.5rem] text-sm text-center' >Reports</span>
                <SidebarItem MenuIcon={TbReport} menuName="Medical Reports" />
                <SidebarItem MenuIcon={FaWalking} menuName="Upcoming Visits" />
                <SidebarItem MenuIcon={FaMapMarkerAlt} menuName="Hospitals Near Me" />
                <span className='mt-6 w-[3.5rem] text-sm text-center' >Support</span>
                <SidebarItem MenuIcon={MdMessage} menuName="Submit Feedback" />

            </div>
        </>
    )
}

export default Sidebar


const SidebarItem = ({ MenuIcon, menuName }) => {
    return (

        <div className="flex items-center justify-start hover:text-violet-500">
            <div className="menu-icon overlay min-w-[3rem] min-h-[3rem] rounded-[2rem] hover:shadow-md relative mr-6 ">
                <MenuIcon size={18} className=" hover:text-violet-500 absolute z-10 left-[15px] top-[15px]" />
            </div>
            <div className=''>{menuName}</div>
        </div>
    )
}