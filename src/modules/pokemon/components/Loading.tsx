import React from 'react'

export default function Loading() {
  return (
    <div className='d-flex w-100 h-100 flex-center '>
      <img className='w-350px' src={require('../assets/loading.gif')} ></img>
    </div>
  )
}
