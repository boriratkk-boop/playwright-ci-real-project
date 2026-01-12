import express from 'express';
import cors from 'cors';

const app = express();
app.use(cors());
app.use(express.json());

app.get('/health', (_req, res) => {
  res.json({ status: 'ok' });
});

app.post('/login', (req, res) => {
  const { username, password } = req.body;

  if (username === 'admin' && password === '1234') {
    return res.json({ success: true });
  }

  res.status(401).json({ success: false });
});

app.listen(3001, () => {
  console.log('Backend running on port 3001');
});