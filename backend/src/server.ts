import 'dotenv/config';
import express from 'express';

const app = express();

app.use(express.json());

const port = process.env.PORT;
app.listen(port, () => {
  console.log(`Server listening on ${port}`);
});
