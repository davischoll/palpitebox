import { GoogleSpreadsheet } from 'google-spreadsheet'

const doc = new GoogleSpreadsheet(process.env.SHEET_DOC_ID)

export default async (req, res) => {

  try {    
    await doc.useServiceAccountAuth({
      client_email: process.env.SHEET_CLIENT_EMAIL,
      private_key: process.env.SHEET_PRIVATE_KEY
    })
    await doc.loadInfo()
      
    const sheet = doc.sheetsByIndex[2]                 // Definir a maneira pela qual vou acessar a Planilha "Configurações" (pelo index -> 3ª planilha)
    await sheet.loadCells('A4:B4')                     // Definir o range de células a serem carregadas
        
    const mostrarPromocaoCell = sheet.getCell(3, 0)    // Pegar o valor da célula na planilha -> (Linha 3, Coluna 0)
    const textoCell = sheet.getCell(3, 1)
    
    res.end(JSON.stringify({
      mostrarCupom: mostrarPromocaoCell.value === 'VERDADEIRO',
      mensagem: textoCell.value
    }))

  } catch (err) {
    res.end(JSON.stringify({
      mostrarCupom: false,
      mensagem: ''
    }))    
  }

}