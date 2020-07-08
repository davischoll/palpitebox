import React from 'react'
import Link from 'next/link'
import PageTitle from '../components/PageTitle'

const Sobre = () => {
  return (
    <div className='py-4'>
      <PageTitle title='Sobre' />
      <h1 className='text-center text-gray-800 font-bold my-4 text-2xl'>Sobre</h1>
        <div className='lg:w-2/3 mx-auto leading-relaxed text-left text-gray-800 mb-4'>
          <p>O projeto <strong>Palpitebox</strong> foi construído durante a Semana Fullstack Master do DevPleno - Julho/2020.</p><br />
          <p>A funcionalidade desta aplicação é disponibilizar uma pesquisa de satisfação de clientes, por meio da qual o estabelecimento pode fidelizar clientes, oferecendo um cupom de desconto a quem responder a pesquisa.</p>
        </div> 
        <div className='lg:w-2/3 mx-auto text-gray-800 flex flex-col items-center mb-4'>
          <Link href='/'>
            <a className='flex'><img src='/arrow-left.svg' alt='Início'/>Início</a>
          </Link>
        </div>
    </div> 
  )
}

export default Sobre