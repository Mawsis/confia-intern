import React from 'react'
import {User,BookOpenText,UtensilsCrossed,Bath,Settings} from 'lucide-react'

export default function Dashboard() {
  return (
    <div className="grid grid-cols-6 gap-4 h-screen w-screen p-5">
        <div className="col-span-1 row-span-1 h-full w-full bg-[#FFF2DF] rounded-xl flex items-center justify-center">
            <img  src="./src/assets/Group.svg" alt=""/>
        </div>

        <div className="col-span-5 row-span-1 h-full w-full flex bg-[#FFF2DF] rounded-xl px-10 justify-between">
            <div className='flex items-center space-x-7 font-bold'>
                <button className='border border-[#F29E58] w-40 py-3 rounded-lg text-[#F29E58]'>
                    Add new
                </button>
                <button className='border border-[#F29E58] bg-[#F29E58] text-[#FFF2DF] py-3 px-6 rounded-lg' >
                    Send Request
                </button>
            </div>
            <div className='flex justify-center items-center'>
                <div className='flex space-x-6 justify-center items-center'>
                    <div className=' font-semibold'>
                        User Account
                    </div>
                    <div className='rounded-xl bg-[#F29E58] p-2'>
                        <User />
                    </div>
                </div>
            </div>
        </div>

        <div className="col-span-1 row-[span_7_/_span_7] h-full w-full bg-[#FFF2DF] rounded-xl flex flex-col justify-between">
            <div className=' flex flex-col space-y-6 justify-start pt-7'>
                <div className='flex pl-11 items-center space-x-5 text-[#F29E58] font-bold text-xl'>
                    <div>
                        <BookOpenText />
                    </div>
                    <div>
                        Booking
                    </div>
                </div>
                <div className='flex pl-11 items-center space-x-5 text-[#939393] font-bold text-xl'>
                    <div>
                        <UtensilsCrossed />
                    </div>
                    <div>
                        Restaurant
                    </div>
                </div>
                <div className='flex pl-11 items-center space-x-5 text-[#939393] font-bold text-xl'>
                    <div>
                        <Bath />
                    </div>
                    <div>
                        SPA
                    </div>
                </div>
            </div>
            <div>
                <div className='flex pl-11 items-center space-x-5 text-[#939393] font-bold text-xl pb-7'>
                    <div>
                        <Settings />
                    </div>
                    <div>
                        Settings
                    </div>
                </div>
            </div>
        </div>

        <div className="col-span-5 row-[span_7_/_span_7] h-full w-full bg-[#F7F7F7] rounded-2xl">4</div>
    </div>
  )
}
