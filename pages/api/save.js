import { GoogleSpreadsheet } from 'google-spreadsheet'
import moment from 'moment'
import { fromBase64 } from '../../utils/base64'

const doc = new GoogleSpreadsheet(process.env.SHEET_DOC_ID)

const gerarCupom = () => {
  const code = parseInt(moment().format('YYMMDDHHmmssSSS')).toString(16).toUpperCase()
  return code.substr(0,4) + '-' + code.substr(4,4) + '-' + code.substr(8,4)
}

export default async (req, res) => {

  try {
    await doc.useServiceAccountAuth({
      client_email: process.env.SHEET_CLIENT_EMAIL,
      private_key: fromBase64(process.env.SHEET_PRIVATE_KEY)
    })
    await doc.loadInfo()
    const sheet = doc.sheetsByIndex[1]
    const data = JSON.parse(req.body)

    const sheetConfig = doc.sheetsByIndex[2]                 // Definir a maneira pela qual vou acessar a Planilha "Configurações" (pelo index -> 3ª planilha)
    await sheetConfig.loadCells('A4:B4')                     // Definir o range de células a serem carregadas
        
    const mostrarPromocaoCell = sheetConfig.getCell(3, 0)    // Pegar o valor da célula na planilha -> (Linha 3, Coluna 0)
    const textoCell = sheetConfig.getCell(3, 1)

    let Cupom = ''
    let Promo = ''

    if (mostrarPromocaoCell.value === 'VERDADEIRO'){      
      Cupom = gerarCupom()
      Promo = textoCell.value
    }

    await sheet.addRow({
      Nome: data.Nome,
      Email: data.Email,
      Fone: data.Fone,
      Nota: parseInt(data.Nota),
      'Data preenchimento': moment().format('DD/MM/YYYY HH:mm:ss'),      
      Cupom,
      Promo,
      Opiniao: data.Opiniao
    })
    res.end(JSON.stringify({
      mostrarCupom: Cupom !== '',
      Cupom,
      Promo
    }))
  } catch (err) {
    console.log(err)
    res.end('error')
  }
}