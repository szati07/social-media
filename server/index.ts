import express from 'express';
const app = express();
const PORT = 3001;
app.get('/', (req,res) => res.send('Express + TypeScript Server is awesome'));
app.listen(PORT, () => {
  console.log(`⚡️[server]: Server is running at https://localhost:${PORT} !!`);
});