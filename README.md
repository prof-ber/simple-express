# Simple Express API

Este é um projeto de servidor API simples usando Express. O projeto inclui um endpoint GET e um endpoint POST.

## Estrutura do Projeto

```
simple-express-api
├── src
│   ├── index.js
│   ├── routes
│   │   └── api.js
├── package.json
└── README.md
```

## Como Executar o Servidor

1. Clone o repositório ou faça o download do projeto.
2. Navegue até o diretório do projeto.
3. Execute `npm install` para instalar as dependências.
4. Execute `node src/index.js` para iniciar o servidor.

## Endpoints Disponíveis

### GET /api

Retorna uma mensagem "Hello World".

### POST /api

Registra o conteúdo enviado no log. O corpo da requisição deve ser um JSON.