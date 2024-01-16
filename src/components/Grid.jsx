import React from 'react'

export default function Grid({icon , title , text , description , color}) {
  return (
    <div className='btn m-4 rounded-lg p-8' style={{ backgroundColor: color }}>
        <div className='flex items-center'>
            <img src={icon} className='w-[1.75rem] h-[1.75rem] rounded-full' />
            <div className='ml-6'>
            <h2 className='leading-[0.8125rem] text-[0.8125rem] font-medium'>{title}</h2>
            <h2 className='mt-1 leading-[0.6875rem] text-[0.6875rem] opacity-50 font-medium'>Verified Graduate</h2>
            </div>
        </div>
        <h1 className='mt-4 font-semibold text-xl tracking-wider'>{text}</h1>
        <p className='font-medium text-[0.8125rem] leading-[1.125rem] text-[#CFCFCF] mt-4'>{description}</p>
    </div>
  )
}
