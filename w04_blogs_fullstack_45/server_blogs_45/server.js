import express from 'express';

const app = express();

import db from './utils/database.js';

app.use('/api/blog_45', async (req, res, next) => {
    const results = await db.query(`select * from blog_45`);
console.log('results', JSON.stringify(results.rows));
res.json(results.rows);
})

app.use('/', (req, res, next) => {
        res.send('周淵凱,213410045');
});

const port = process.env.PORT || 5001;
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
