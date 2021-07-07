# Web_Services

## Sobre o projeto

Este protejo tem o server e o cliente, o server é uma API feita em Node.js e o cliente feito em ReactJS.
Tem como objteivo criar uma API que realize os seguintes requisitos:

- Serviço que localiza/retorna funcionários por Nome;
- Serviço que localiza/retorna funcionários por CPF;
- Serviço que localiza/retorna funcionários por Cargo;
- Serviço que localiza/retorna funcionários por Data de Cadastros;
- Serviço que retorna funcionários agrupados por UF de Nascimento, de forma quantitativa;
- Serviço que localiza/retorna funcionários por faixa salarial;
- Serviço que localiza/retorna funcionários por status;
- Serviço para incluir um novo funcionário (caso o funcionário já exista, apenas atualizar);
- Serviço para excluir um funcionário pelo número do CPF;

## Assim como criar um frontend que consuma os serviços criados

## Sobre o server

## Usa MongoDB

MongoDB é um software de banco de dados de código aberto e multiplataforma e classificado NoSQL.

- [Wikipedia](https://pt.wikipedia.org/wiki/MongoDB)
- [MongoDB](https://www.mongodb.com/)
- [MongoDB Atlas](https://mongodb.com/atlas)
- [MongoDB Documentation](https://docs.mongodb.com/)

## Configurações

### Configuração MongoDB database

Configure MongoDB localmente usando os dados do [MongoDB Atlas for free](https://mongodb.com/atlas).

### Configuração de variáveis de ambiente

Copie as variáveis do arquivo`env.example` para o`.env`:

```bash
 .env.example
```

Set each variable on `.env`:

- `MONGODB_URL` - Nessa variável você deve por a string de conexão MongoDB do [MongoDB Atlas](https://mongodb.com/atlas) você pode encontrá-la clicando em "Connect" no seu cluster.
- `PORT` - Nessa variável você deve por a porta que será usada para levantar o sistema.

### Iniciando o projeto

```bash
npm install
npm start
```

#### Scripts

Nesse projeto foi instalado o nodemon, para iniciar o servidor com ele use o comando:

```bash
npm run debug
```

Para popular o banco use o comando

```bash
npm run populate
```

### Documentação

A documentação da API foi feita com swagger-ui você pode acessá-la na rota /api-docs

---

## Sobre o cliente

## Usa Create React App

O [Create React App](https://create-react-app.dev/) é uma aplicação com configurações pré-configuradas para o uso mais simplificado na criação de interfaces e que tem como base o [ReactJS](https://reactjs.org/)

## Este projeto usa SASS 4.14.1

Para que não ocorra nenhum problema observe se a versão do node que você está usando suporta o [Sass](https://sass-lang.com/).

### Iniciando o projeto

```bash
npm install
npm start
```

## Páginas Implementadas

Essa aplicação consome apenas as rotas que usa o verbo GET. O objetivo deveria ser cosumir todas as rotas criadas no serve.
