import React from 'react'
import Link from 'next/link'
import useSWR from 'swr'
import PageTitle from '../components/PageTitle'

const fetcher = (...args) => fetch(...args).then(res => res.json())

const Index = () => {
  const { data, error } = useSWR('/api/get-promo', fetcher)  
  return (
    <div>
      <PageTitle title='Bem-vindo' />
      <p className='mt-8 text-center'>
        Prezado(a) cliente, obrigado pela sua visita! Queremos sempre fazer o melhor por você. <br />
        Sua opinião é muito importante para nós!
      </p>
      <div className='text-center my-12'>
        <Link href='/pesquisa'>
          <a className='text-white bg-blue-500 hover:bg-blue-400 px-10 py-4 font-bold rounded-lg shadow-lg hover:shadow'>Responder pesquisa</a>
        </Link>
      </div>
      {!data && <p>Carregando...</p>}
      {!error && data && data.mostrarCupom &&
        <p className='my-12 text-center'>
          {data.mensagem}
        </p>
      }      
    </div>
  )
}

export default Index