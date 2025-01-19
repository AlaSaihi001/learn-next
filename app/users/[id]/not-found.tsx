import Link from 'next/link'
import React from 'react'

const userNotFound = () => {
  return (
    <div>
      User is not notFound <br />
      <Link href='/users'>return</Link>
    </div>
  )
}

export default userNotFound