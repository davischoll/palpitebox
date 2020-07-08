import React, { useState } from 'react'
import PageTitle from '../components/PageTitle'

const Pesquisa = () => {
  const [ form, setForm ] = useState({    
    Nome: '',
    Email: '',
    Fone: '',
    Nota: '',
    Opiniao: ''
  })

  const notas = [0, 1, 2, 3, 4, 5]
  const [ success, setSuccess ] = useState(false)
  const [ retorno, setRetorno ] = useState({})
  const save = async () => {    
    try{
      const response = await fetch('/api/save', {
        method: 'POST',
        body: JSON.stringify(form)
      })
      const data = await response.json()
      setSuccess(true)
      setRetorno(data)
    } catch (err) {
    }
  }
  const onChange = evt => {
    const valueNome = evt.target.value
    const key = evt.target.name
    setForm(old => ({
      ...old,
      [key]: valueNome
    }))
  }
  return (
    <div className='p-4'>
      <PageTitle title='Pesquisa' />
      <h1 className='text-center text-gray-800 font-bold my-4 text-2xl'>Pesquisa de satisfação</h1>
      <p className='text-center text-gray-900 font-bold mb-4'>
        Obrigado por nos ajudar a melhorar. <br />
        Sua opinião é muito importante para nós!
      </p>
      { !success &&
        <div className='w-1/5 mx-auto'>
          <label className='font-bold text-gray-800'>Seu nome:</label>
          <input type='text' className='p-4 block shadow-md bg-blue-100 mb-2 rounded' placeholder='Nome' onChange={onChange} name='Nome' value={form.Nome} />
          <label className='font-bold text-gray-800'>E-mail:</label>
          <input type='email' className='p-4 block shadow-md bg-blue-100 mb-2 rounded' placeholder='E-mail' onChange={onChange} name='Email' value={form.Email} />
          <label className='font-bold text-gray-800'>Telefone:</label>          
          <input type='tel' className='p-4 block shadow-md bg-blue-100 mb-2 rounded' placeholder='WhatsApp' onChange={onChange} name='Fone' value={form.Fone} />
          <label className='font-bold text-gray-800'>O que podemos fazer melhor?</label>
          <textarea type='text' className='p-4 block shadow-md bg-blue-100 mb-2 rounded' rows="3" cols="30" placeholder='Crítica ou sugestão' onChange={onChange} name='Opiniao' value={form.Opiniao} />
          <label className='font-bold text-gray-800'><p className='text-center mt-4'>Atribua uma nota para a sua experiência aqui hoje:</p></label>
          <div className='flex px-4 pt-2 pb-4'>
          { notas.map(nota => {
              return (<label className='block w-1/6 text-center'>
                        {nota} <br />
                        <input type='radio' name='Nota' value={nota} onChange={onChange} />
                      </label>)
            })
          }
          </div>
          <div className='text-center text-white'><button className='bg-blue-500 px-10 py-4 font-bold rounded-lg shadow-lg hover:bg-blue-400 hover:shadow' onClick={save}>ENVIAR</button></div>
        </div>
      }
      { success &&
        <div className='w-1/5 mx-auto'>
          <p className='text-center font-bold bg-blue-100 border-t border-b border-blue-500 text-blue-700 px-4 py-3 mb-4'>Pesquisa enviada. <br />Obrigado! : )</p>
          {
            retorno.mostrarCupom &&
            <div className='text-center text-gray-800 border p-4 mb-4'>
              Seu cupom: <br />
              <span className='font-bold text-gray-800 text-2xl'>{retorno.Cupom}</span>
            </div>
          }
          {
            retorno.mostrarCupom &&
            <div className='text-center text-gray-800 border p-4'>
              <p className='text-left text-sm'>Promoção ativa:</p> <span className='font-bold'>{retorno.Promo}</span>
              <br />
              <p className='text-left text-gray-800 text-xs italic mt-2'>Tire um print desta tela ou anote o código do
              cupom e apresente ao garçom na sua próxima visita, para garantir seu desconto.</p>
            </div>
          }
        </div>
      }
    </div>
  )
}

export default Pesquisa