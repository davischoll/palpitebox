import React from 'react'

const Footer = () => {
  return (
    <div className='bg-gray-700 p-4'>
      <div className='container mx-auto text-center text-gray-100'>
        Projeto desenvolvido por: {" "}
        <a className='hover:underline' href='https://www.instagram.com/davischoll'>@davischoll</a> | {" "}
        <a className='hover:underline' href='https://www.agenciavide.com.br'>Agência Vide</a> | {" "}
        <a className='hover:underline' href='https://www.linkedin.com/in/davi-scholl-463903196/'>Linkedin</a> | {" "}
        <a className='hover:underline' href='https://github.com/davischoll'>Github</a>
        <div className='mt-2'>
          <img className='inline p-4' width='180' height='180' src='/logo_semana_fsm.png' />
          <img className='inline p-4' width='180' height='180' src='/logo_devpleno.png' />
        </div>
      </div>
    </div>
  )
}

export default Footer