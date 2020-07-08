import React from 'react'
import Link from 'next/link'
import PageTitle from '../components/PageTitle'

const Contato = () => {
  return (
    <div className='py-4'>
      <PageTitle title='Contato' />
      <h1 className='text-center text-gray-800 font-bold my-4 text-2xl'>Informações de Contato</h1>
        <div className='lg:w-2/3 mx-auto leading-relaxed text-left text-gray-800 mb-4'>
          <p className='mx-48'>.</p>
          <p className='mx-48'>.</p>
          <p className='mx-48'>.</p>
          <p className='mx-48'>.</p>
        </div> 
        <div className='lg:w-2/3 mx-auto text-gray-800 flex flex-col items-center mb-4'>
          <Link href='/'>
            <a className='flex'><img src='/arrow-left.svg' alt='Início'/>Início</a>
          </Link>
        </div>
    </div> 
  )
}

export default Contato