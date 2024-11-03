<h1 align="center" style="font-weight: bold;">Sistema Lista de Tarefas 💻</h1>

<p align="center">
 <a href="#tech">Tecnologias</a> • 
 <a href="#started">Primeiros passos</a> • 
  <a href="#routes">API Endpoints</a> 
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
PORT=
DATABASE_URL= postgresql://janedoe:mypassword@localhost:5432/mydb
```

<h3>Para iniciar o projeto</h3>

```bash
cd nome-do-projeto
npm install
npx prisma migrate dev
npm run dev
```

<h2 id="routes">📍 API Endpoints</h2>

​
| Rotas | Descrição  
|----------------------|-----------------------------------------------------
| <kbd>GET /task</kbd> | Lista todas as tarefas [Detalhes da requisição](#get-task-detail)
| <kbd>POST /task</kbd> | Cria uma nova tarefa [Detalhes da requisição](#post-task-detail)
| <kbd>DELETE /task?id=</kbd> | Deleta uma tarefa [Detalhes da requisição](#delete-task-detail)
| <kbd>PATCH /task</kbd> | Edita uma tarefa [Detalhes da requisição](#patch-task-detail)

<h3 id="get-task-detail">GET /task</h3>

**RESPONSE**

```json
[
  {
    "id": "4ea6fb9e-ac06-4a1b-9a53-7d3afa0a6403",
    "name": "Estudar JavaScript",
    "limitDate": "2024-10-16",
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
  "limitDate": "2024-11-01T00:00:00.000Z",
  "cost": 25
}
```

**RESPONSE**

```json
{
  "id": "4ea6fb9e-ac06-4a1b-9a53-7d3afa0a6403",
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
  "name": "Estudar JavaScript",
  "limitDate": "2024-06-19T00:00:00.000Z",
  "cost": 25,
  "sortOrder": 1
}
```

<h3 id="patch-task-detail">PATCH /task</h3>

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
  "name": "Estudar React",
  "limitDate": "2024-06-19T00:00:00.000Z",
  "cost": 25,
  "sortOrder": 1
}
```
