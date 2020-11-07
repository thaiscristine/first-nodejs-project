import express from 'express';
// src/server.ts
import routes from './routes';

const app = express();

app.get('/', (request, response) =>
  response.json({ message: 'helaaa sfdfsdfsdflows' }),
);

app.listen(3333, () => {
  console.log('Mãe ta on 🤸🏽‍♀️ on port 3333!');
});
