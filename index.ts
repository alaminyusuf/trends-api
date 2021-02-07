import express, { Request, Response, ErrorRequestHandler } from 'express';
import overTime from './routes/overTime';

const app = express();

// Handlebars
app.set('view engine', '.hbs');
app.use('/bulma', express.static(__dirname + '/node_modules/bulma/css/'));

app.get('/', (req: Request, res: Response) => {
  const users = [
    { name: 'Adam', age: 21 },
    { name: 'John', age: 23 },
    { name: 'Sarah', age: 24 },
  ];
  res.render('index', {
    users,
  });
});

app.use('/overtime', overTime);

app.listen(8000, () => console.log('Server up and running!!!'));
