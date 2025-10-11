import express from 'express';
import cors from 'cors';

const app = express();

app.use(cors());

app.use('/', (req, res, next) => {
    res.send('周淵凱,213410045');
});

const port = process.env.PORT || 5001;

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
