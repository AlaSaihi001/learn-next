import React from 'react'
interface Props{
    params: Promise<{
        slug: string[];
    }>
    searchParams: Promise<{
      [key: string]: string | string[];
    }>
}




const slugPage = async({params, searchParams}: Props) => {
const slug = (await params).slug
const queries = (await searchParams)
console.log(queries)

  return (
    <div>
      slug:
      {slug}

      <ul>
        {Object.entries(queries).map(([key, value]) => (
          <li key={key}>{key}: {value}</li>
        ))}
      </ul>
    </div>
  )
}

export default slugPage



// const obj = {
//   name: 'ala',
//   age: 21,
// }

// [
//   ['name', 'ala'],
//   ['age', 21]
// ]