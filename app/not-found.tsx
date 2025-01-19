import Link from 'next/link'
import React from 'react'

const notFoundPage = () => {
  return (
    <div>
      <h1 className="text-2xl">This page is not found</h1>
      <Link href="/">Return to home page</Link>
    </div>
  )
}

export default notFoundPage
