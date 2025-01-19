import { notFound } from 'next/navigation'
import React from 'react'
interface Props{
  params: Promise <{
    id: string
  }>
}

const ShowUserPage = async({params}: Props) => {
  const id = +(await params).id
  if (id>5){
    notFound()
  }

  return (
    <div>
      <p>User Number: {id}</p>
    </div>
  )
}

export default ShowUserPage
