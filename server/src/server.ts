import express from 'express';

const app = express();

app.get('/users', () => {
    console.log('Hello world :)');
})

app.listen(3333);