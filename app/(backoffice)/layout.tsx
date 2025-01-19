import React, { ReactNode } from 'react'
interface Props{
    children: ReactNode
}


const adminLayout = ({children}: Props) => {
  return (
    <div className='flex gap-5'>
      <aside><h1 className='text-3xl'>Dashboard</h1></aside>
      <div>
        {children}
      </div>
    </div>
  )
}

export default adminLayout
