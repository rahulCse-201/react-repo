import React from 'react'
import { useParams } from 'react-router-dom'

// dynamic data params access like that 

function User() {
    const {id} = useParams()
  return (
    <div className='bg-red-400 text-black text-bold'>
      User: {id}
    </div>
  )
}

export default User
