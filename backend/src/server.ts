import express from 'express';
import cors from 'cors';
import quizRouter from './routes/quiz';

const app = express();
const PORT = 3001;

app.use(cors());
app.use('/api', quizRouter);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
