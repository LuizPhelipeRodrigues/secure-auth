# API de Gestão de Usuários e Autenticação

## Visão Geral

Este projeto é uma API backend construída com TypeScript que oferece funcionalidades de gestão de usuários e autenticação. A API permite que os usuários se registrem, façam login e gerenciem suas contas, garantindo acesso seguro a recursos protegidos por meio de Tokens JWT (JSON Web Tokens).

## Funcionalidades

- **Registro de Usuário:** Permite que os usuários se registrem fornecendo nome, email e senha.
- **Autenticação de Usuário:** Login seguro com autenticação baseada em JWT.
- **Gestão de Tokens:** Geração e gerenciamento de tokens de acesso e de atualização com tempos de expiração configuráveis.
- **Gestão de Perfil:** Usuários podem atualizar suas informações de perfil.
- **Gestão de Senha:** Usuários podem alterar suas senhas.
- **Autorização Baseada em Papéis:** Restringe o acesso a endpoints específicos com base nos papéis dos usuários.
- **Tratamento de Erros:** Tratamento abrangente de erros para diversos cenários.

## Tecnologias Utilizadas

- **Node.js**: Ambiente de execução JavaScript.
- **TypeScript**: Linguagem de tipagem estática construída sobre JavaScript.
- **Express.js**: Framework web para Node.js.
- **JWT (jsonwebtoken)**: Para segurança das rotas e gerenciamento de tokens de autenticação.
- **bcrypt**: Biblioteca para hashing de senhas.
- **dotenv**: Módulo para carregar variáveis de ambiente.
