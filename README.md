# PalpiteBox - Semana Fullstack Master

Projeto construído durante a Semana Fullstack Master do [DevPleno](https://devpleno.com), em julho/2020. Uma versão online pode ser conferida aqui: https://palpitebox.davischoll.vercel.app/

![Preview](https://github.com/davischoll/sfsm-devpleno-palpitebox/blob/master/public/palpitebox_home.png?raw=true)

## O Projeto:
A funcionalidade da aplicação é disponibilizar uma pesquisa de satisfação de consumidores, por meio da qual o estabelecimento pode fidelizar clientes, oferecendo um cupom de desconto a quem responder a pesquisa pelo form. O controle dos cadastros realizados, com os dados dos usuários e cupons emitidos é feito pelo app Planilhas do Google, por onde também o proprietário pode ativar ou desativar promoções, bem como alterá-las conforme desejar.

## Layout:

Layout criado utilizando o Figma. O arquivo pode ser encontrado [aqui](https://www.figma.com/file/HxvAYhS6l7UDI49u8uLdaC/palpite-box?node-id=0%3A1).

## Pré-requisitos:

Para rodar a aplicação na máquina com um servidor local, é necessário o NodeJS e NPM.

```
npm install
npm run dev
```

## Colocando em produção:

Este projeto pode ser colocado em produção utilizando o [Vercel](http://vercel.com/). É necessário criar as variáveis de ambiente para configurar o acesso às planilhas do Google:

```
SHEET_CLIENT_EMAIL = client email do service credential
SHEET_PRIVATE_KEY = private key do service credential - (As quebras de linha com "\n" contidas nesta chave devem ser removidas e a chave deve ser codificar em base 64)
SHEET_DOC_ID = id da planilha
```

## Construído com:

* [NextJS](https://nextjs.org/) - The React Framework.
* [TailwindCSS](https://tailwindcss.com/) - A utility-first CSS framework for
rapidly building custom designs.
* [Figma](https://figma.com/) - Online prototyping tool.
* [Google Sheets](https://drive.google.com) - Planilhas online do Google

## Autor:

* **Davi Scholl** - [LinkedIn](https://www.linkedin.com/in/davi-scholl-463903196/)


## Licença

Licenciado sob a licença MIT - veja [LICENSE.md](LICENSE.md) para mais informações.

## Acknowledgments

* A Semana Fullstack Master é iniciativa do [DevPleno](https://devpleno.com). Agradecimento ao [@tuliofaria](https://github.com/tuliofaria/) por compartilhar conteúdo relevante e com qualidade de ensino.
