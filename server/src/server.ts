import express from 'express';

const app = express();

app.use(express.json());

// Rota: Endereco completo da requisição
// Recurso: Qual endidade estamos acessando do sistema

// GET: Busca uma ou mais informações do back-end
// POST: Criar uma nova informação no back-end
// PUT: Atualizar uma informação existente no back-end
// DELETE: Remover uma informacão do back-end

// POST http://localhost:3333/users = Criar um usuário
// GET http://localhost:3333/users = Listar usúarios
// GET http://localhost:3333/users/1 = Buscar dados do usuario id 1

// Request param: Parâmetros que vem na própria rota que identificam um recurso
// Query Param: Parâmetros que vem na própria rota que geralmente são opcionais para filtros e paginação
// Request body: Parâmetros para criação/atualização de informações

const users = [
    'Rafael',
    'David',
    'Jean',
    'Silvan'
]

app.get('/users', (request, response) => {
    const search = String(request.query.search)

    const filteredUsers = search ? users.filter(users => users.includes(search)) : users;

    return response.json(filteredUsers);
})

app.get('/users/:id', (request, response) => {
    const id = Number(request.params.id);
    
    const user = users[id];

    return response.json(user);
});

app.post('/users', (request, response) => {
    const data = request.body;

    console.log(data)
    
    const users = {
        name: data.name,
        email: data.email
    };

    return response.json(users);
});

app.listen(3333);