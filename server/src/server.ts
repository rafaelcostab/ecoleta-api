import express from 'express';

const app = express();

app.get('/users', (resquest, response) => {
    console.log('Listagem de usuários)');

    response.send([
        "Rafael",
        "David",
        "Jean",
        "Silvan"
    ]);
})

app.listen(3333);