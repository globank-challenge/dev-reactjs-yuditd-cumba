import React from 'react'

export default function NoFound({term} : { term: string }) {
  return (
    <div className='d-flex flex-column w-100 h-100 flex-center '>
      <img className='w-10px ' src={require('../assets/noFound.png')} ></img>
      <h1> Lo sentimos, no encontramos el pokemon '{term}'</h1>
    </div>
  )
}
