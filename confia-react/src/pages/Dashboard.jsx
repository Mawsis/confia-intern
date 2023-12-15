import React from 'react'
import {User} from 'lucide-react'

export default function Dashboard() {
  return (
    <div className="grid grid-cols-7 grid-rows-9 gap-4 h-screen w-screen p-5">
        <div className="col-span-2 row-span-1 h-full w-full bg-[#FFF2DF] rounded-xl flex items-center">
            <img className='ml-16' src="./src/assets/Group.svg" alt=""/>
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

        <div className="col-span-2 row-span-6 h-full w-full bg-[#FFF2DF] rounded-xl">3</div>

        <div className="col-span-5 row-span-6 h-full w-full bg-[#FFF2DF] rounded-xl">4</div>
    </div>
  )
}
