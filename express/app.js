import express from 'express';
const app = express();

app.get('/qwerty/:id', (req, res, next) => {
  //   console.log(req.path);
  //   console.log(req.headers);
  console.log(req.params);
  console.log(req.query);

  //   res.send('hello!');
  //   res.json({ name: 'soap' });
  //   res.sendStatus(404);
  res.setHeader('key', 'value');
  res.status(201).send('message from server');
});

app.listen(8080);
