import React from 'react'
import { validarEmail } from './validarEmail'

const ValidacaoForm = (data) => {
    
  const retorno = {
      status: true,
      message: []
  }

  if (!data.Nome)
  {
    retorno.status = false
    retorno.message[0] = 'Por favor, informe o seu nome'
  }
  
  if (!data.Email)
  { 
    retorno.status = false
    retorno.message[1] = 'Preencha o campo E-mail' 
  } else if (!validarEmail(data.Email))
    {
      retorno.status = false
      retorno.message[1] = 'E-mail inválido!'
    }

  if (!data.Fone)
  { 
    retorno.status = false
    retorno.message[2] = 'Favor informar o telefone'
  } else if (isNaN(`${data.Fone}`))
  {
    retorno.status = false
    retorno.message[2] = 'Número de telefone inválido!'
  }
    
  if (data.Nota == '')
  { 
    retorno.status = false
    retorno.message[3] = 'Qual é a sua nota?' 
  }

  return retorno
}

export default ValidacaoForm