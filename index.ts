import express, { Request, Response, ErrorRequestHandler } from 'express';
const cheerio = require('cheerio');
const request = require('request');

const app = express();

// Handlebars
app.set('view engine', '.hbs');
app.use('/bulma', express.static(__dirname + '/node_modules/bulma/css/'));

app.get('/', (req: Request, res: Response) => {
  res.render('index');
});

app.listen(8000, () => console.log('Server up and running!!!'));

request(
  {
    method: 'GET',
    url: 'http://localhost:8000',
  },
  (err: ErrorRequestHandler, res: Response, body: any) => {
    if (err) return console.error(err);

    let $ = cheerio.load(body);

    const el = $('span[class="tagged"]').text();
    console.log(el);
    debugger;
    return el;
  }
);
