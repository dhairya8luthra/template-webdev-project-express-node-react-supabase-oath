import express from 'express';
import pingRoute from './routes/ping.js';
const app = express();
import cors from 'cors';
import dotenv from 'dotenv';
dotenv.config();
const PORT = process.env.PORT || 3000;
const CORS_ORIGIN = process.env.CORS_ORIGIN || '*';
app.use(cors({ origin: CORS_ORIGIN }));
app.use(express.json()); // for JSON request bodies

app.use('/api', pingRoute);

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
