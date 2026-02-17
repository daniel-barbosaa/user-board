# UserBoard

![React](https://img.shields.io/badge/React-19-blue?logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?logo=typescript)
![Material UI](https://img.shields.io/badge/Material_UI-007FFF?logo=material-ui)
![Vite](https://img.shields.io/badge/Vite-646CFF?logo=vite&logoColor=white)
![ESLint](https://img.shields.io/badge/ESLint-4B32C3?logo=eslint&logoColor=white)
![Prettier](https://img.shields.io/badge/Prettier-F7B93E?logo=prettier&logoColor=white)
![Husky](https://img.shields.io/badge/Husky-0F4B6F?logo=husky&logoColor=white)

_Este projeto é um aplicativo de gerenciamento de usuários, desenvolvido como teste técnico._

## Sobre o projeto

O **UserBoard** é um aplicativo de gerenciamento de usuários.
A aplicação permite adicionar, editar, listar e filtrar usuários, com ordenação e pesquisa por nome e indicação de status ativo / inativo.

## Funcionalidades

- Cadastro e edição de usuários
- Listagem de usuário
- Ordenação e filtro por nome

## Como rodar o projeto

### Pré-requisitos

- Node.js 20+
- Yarn ou npm

### Passos

```bash
# Clone o repositório
git clone https://github.com/daniel-barbosaa/user-board.git

# Acesse a pasta
cd user-board
```

### Variáveis de ambiente

Este projeto consome uma API local simulada usando `JSON-SERVER`.

Renomeie o arquivo `.env.example` na raiz do projeto e coloque a seguinte variável:

```env
VITE_API_URL=http://localhost:3001
```

### Executando a aplicação

```bash
# Instale as dependências
yarn install

# Inicie a aplicação
yarn start:dev
```

## Testes

Executando os testes:

```bash
# Executar testes
yarn test
```

## Cobertura dos testes

### Modais (unitários)

#### ModalEditUser

- Verifica se o modal abre quando `isEditUserModalOpen` é `true`.
- Submissão do formulário ao clicar em "Salvar".

#### ModalNewUser

- Verifica se o modal abre com os campos de nome e email.
- Submissão do formulário ao clicar em "Criar".

### UsersTable

#### Unitário

- Renderiza corretamente o estado vazio quando não há usuários.

#### Integração

- Renderiza lista de usuários corretamente.
- Verifica se ao clicar em uma linha, `openEditUserModal` é chamado com o usuário correto.

## Estrutura de pastas

A estrutura do projeto foi pensada para separar claramente
a lógica de negócio da camada de apresentação, facilitando
a manutenção, escalabilidade e reutilização de código.

```txt
src/
├─ app/
│  ├─ constants/   # Constantes globais
│  ├─ contexts/    # Contextos
│  ├─ hooks/       # Hooks customizados
│  ├─ services/    # Integração com API
│  ├─ types/       # Tipagens globais
│  └─ utils/       # Utilitários reutilizáveis
│
├─ assets/         # Imagens, ícones e arquivos estáticos
└─ view/
   ├─ components/  # Componentes reutilizáveis da UI
   └─ pages/       # Páginas da aplicação

```
<img width="800" alt="deletar-usuario-darkmode" src="https://github.com/user-attachments/assets/3f1b1a96-8f3a-4ef4-b984-b4a2e22fe77d" />
<img width="800" alt="pesquisa" src="https://github.com/user-attachments/assets/a6991e2d-c039-4691-a489-53a0a29fe9d0" />
<img width="800" alt="mostra-toast" src="https://github.com/user-attachments/assets/7052cc31-e51f-4a48-b509-4903b834b0fa" />
<img width="800" alt="editar-usuario" src="https://github.com/user-attachments/assets/02cfdaf3-5d25-464d-8391-d70b1ba7957d" />
