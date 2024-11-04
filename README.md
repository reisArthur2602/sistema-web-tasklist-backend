<h1 align="center" style="font-weight: bold;">Sistema Lista de Tarefas 💻</h1>

<p align="center">
 <a href="#tech">Tecnologias</a> • 
 <a href="#started">Primeiros passos</a> • 
  <a href="#user-routes">User Endpoints</a> • 
  <a href="#task-routes">Task Endpoints</a> 
</p>

<p align="center">
    <b>Desenvolvimento de um sistema web para cadastro de Tarefas </b>
</p>

<h2 id="technologies">💻 Tecnologias</h2>

- Node.js (Express)
- TypeScript
- PostgreSQL
- Prisma ORM

<h2 id="started">🚀 Primeiros Passos</h2>

<h3>Pré Requisitos</h3>

- [Node.js](https://nodejs.org/pt)
- [Git](https://git-scm.com/)

<h3>Clone o Projeto</h3>

```bash
git clone https://github.com/reisArthur2602/sistema-web-tasklist-backend
```

<h3>Configure as váriaveis .env </h2>

Use o`.env.example` como referência para criar seu arquivo de configuração `.env` com suas credenciais

```yaml
PORT={PORT}
JWT_SECRET={SECRET_KEY}
DATABASE_URL="postgresql://janedoe:mypassword@localhost:5432/mydb"
```

<h3>Para iniciar o projeto</h3>

```bash
cd nome-do-projeto
npm install
npx prisma migrate dev
npm run dev
```

<h2 id="user-routes">📍 User Endpoints</h2>

| Rotas                         | Descrição                                                                     |
| ----------------------------- | ----------------------------------------------------------------------------- |
| <kbd>POST /user/session</kbd> | Fazer login do usuário [Detalhes da requisição](#post-session-user-detail)    |
| <kbd>POST /user</kbd>         | Cria novo usuário [Detalhes da requisição](#post-user-detail)                 |
| <kbd>GET /user</kbd>          | Buscar dados do usuário logado [Detalhes da requisição](#details-user-detail) |

<h3 id="post-session-user-detail">POST /user/session</h3>

**RESPONSE**

```json
{
  "email": "guest@guest.com",
  "password": "123566"
}
```

**REQUEST**

```json
{
  "id": "efc328dd-95ce-4b07-bad5-19941c954411",
  "email": "guest@guest.com",
  "password": "$2b$10$kmVmcUADEf.VHxvSxVq26.Udi5l6Kj2WVpFtexH4HaQqdllqXl9uC"
}
```

<h3 id="post-user-detail">POST /user</h3>

**REQUEST**

```json
{
  "email": "guest@guest.com",
  "password": "12356"
}
```

**RESPONSE**

```json
{
  "user": {
    "id": "efc328dd-95ce-4b07-bad5-19941c954411",
    "email": "guest@guest.com",
    "password": "$2b$10$kmVmcUADEf.VHxvSxVq26.Udi5l6Kj2WVpFtexH4HaQqdllqXl9uC"
  },
  "accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE3MzA2NjU5ODcsImV4cCI6MTczMzI1Nzk4Nywic3ViIjoiZWZjMzI4ZGQtOTVjZS00YjA3LWJhZDUtMTk5NDFjOTU0NDExIn0.iGJb3qQxRsrAgZh2HywVG8VSo_m4wA2BKLOVC4I38IQ"
}
```

<h3 id="details-user-detail">GET /user</h3>

**RESPONSE**

```json
{
  "id": "efc328dd-95ce-4b07-bad5-19941c954411",
  "email": "guest@guest.com",
  "password": "$2b$10$kmVmcUADEf.VHxvSxVq26.Udi5l6Kj2WVpFtexH4HaQqdllqXl9uC"
}
```

<h2 id="task-routes">📍 Task Endpoints</h2>

| Rotas                          | Descrição                                                                       |
| ------------------------------ | ------------------------------------------------------------------------------- |
| <kbd>GET /task</kbd>           | Lista todas as tarefas de um usuário [Detalhes da requisição](#get-task-detail) |
| <kbd>POST /task</kbd>          | Cria uma nova tarefa [Detalhes da requisição](#post-task-detail)                |
| <kbd>DELETE /task?id=</kbd>    | Deleta uma tarefa [Detalhes da requisição](#delete-task-detail)                 |
| <kbd>PUT /task</kbd>           | Edita uma tarefa [Detalhes da requisição](#put-task-detail)                     |
| <kbd>PATCH /task/reorder</kbd> | Troca duas tarefas de posição [Detalhes da requisição](#patch-task-detail)      |

<h3 id="get-task-detail">GET /task</h3>

**RESPONSE**

```json
[
  {
    "id": "4ea6fb9e-ac06-4a1b-9a53-7d3afa0a6403",
    "userId": "efc328dd-95ce-4b07-bad5-19941c954411",
    "name": "Estudar JavaScript",
    "limitDate": "2024-06-19T00:00:00.000Z",
    "cost": 25,
    "sortOrder": 1
  }
]
```

<h3 id="post-task-detail">POST /task</h3>

**REQUEST**

```json
{
  "name": "Estudar JavaScript",
  "limitDate": "2024-06-19T00:00:00.000Z",
  "cost": 25
}
```

**RESPONSE**

```json
{
  "id": "4ea6fb9e-ac06-4a1b-9a53-7d3afa0a6403",
  "userId": "efc328dd-95ce-4b07-bad5-19941c954411",
  "name": "Estudar JavaScript",
  "limitDate": "2024-06-19T00:00:00.000Z",
  "cost": 25,
  "sortOrder": 1
}
```

<h3 id="delete-task-detail">DELETE /task?id=</h3>

**REQUEST**

```json
{
  "id": "4ea6fb9e-ac06-4a1b-9a53-7d3afa0a6403"
}
```

**RESPONSE**

```json
{
  "id": "4ea6fb9e-ac06-4a1b-9a53-7d3afa0a6403",
  "userId": "efc328dd-95ce-4b07-bad5-19941c954411",
  "name": "Estudar JavaScript",
  "limitDate": "2024-06-19T00:00:00.000Z",
  "cost": 25,
  "sortOrder": 1
}
```

<h3 id="put-task-detail">PUT /task</h3>

**REQUEST**

```json
{
  "id": "4ea6fb9e-ac06-4a1b-9a53-7d3afa0a6403",
  "name": "Estudar React",
  "limitDate": "2024-06-19T00:00:00.000Z",
  "cost": 25,
  "sortOrder": 1
}
```

**RESPONSE**

```json
{
  "id": "4ea6fb9e-ac06-4a1b-9a53-7d3afa0a6403",
  "userId": "efc328dd-95ce-4b07-bad5-19941c954411",
  "name": "Estudar React",
  "limitDate": "2024-06-19T00:00:00.000Z",
  "cost": 25,
  "sortOrder": 1
}
```

<h3 id="patch-task-detail">PATCH /task/reorder</h3>

**REQUEST**

```json
[
  {
    "id": "deaa0e2b-b757-4914-b609-68be1c8c9359",
    "sortOrder": 18
  },
  {
    "id": "c16a586c-1f02-4cf6-9820-1ecf0f7e36a3",
    "sortOrder": 16
  }
]
```
