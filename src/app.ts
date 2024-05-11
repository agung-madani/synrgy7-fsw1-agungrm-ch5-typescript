import express from 'express';
import indexRouter from './routes/index';

const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/', indexRouter);

app.listen(PORT, () => {
  console.log(`Express is running on http://localhost:${PORT}`);
});
