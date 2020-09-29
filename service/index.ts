import express from 'express';
import cors from 'cors';
import bodyparser from 'body-parser';
import { postgraphile } from 'postgraphile';
const app = express();

const PORT = 3001;

app.use(cors())
app.use(bodyparser.json())
app.use(bodyparser.urlencoded({ extended: false }))
app.use(
  postgraphile(
    "postgres://admin:secret@localhost:5432/social_media",
    "public",
    {
      watchPg: true,
      graphiql: true,
      extendedErrors: ["errcode", "detail", "hint"],
      enhanceGraphiql: true,
    }
  )
)

app.listen(PORT, () => {
  console.log(`⚡️[server]: Server is running at https://localhost:${PORT} !!`);
});