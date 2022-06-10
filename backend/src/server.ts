import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import { router } from './routes/index';

const app = express();

app.use(express.json());
app.use(cors());

app.use(router);

const port = process.env.PORT;
app.listen(port, () => {
  console.log(`Server listening on ${port}`);
});
