import pg from 'pg';
const { Pool } = pg;
let pool;

if (process.env.DATABASE='LOCAL') {
    pool = new Pool({
        host: 'localhost',
        port:'5432',
        user: 'postgres',
        password: '0000',
        database: 'wp1_demo_45'
    });
    console.log('connecting to local database', pool.options.database)
} else if(process.env.DATABASE='SUPABASE') {
}   

export default pool;