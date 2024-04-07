import React from 'react'

const Meeting = ({params} : {params : {id: string}}) => {
  return (
    <>
    <div>Our room is created in: {params.id}</div>
    
    </>
  )
}

export default Meeting