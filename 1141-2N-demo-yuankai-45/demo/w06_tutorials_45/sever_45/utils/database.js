import pg from 'pg';
const { Pool } = pg;
let pool;

if (process.env.DATABASE === 'LOCAL') {
  pool = new Pool({
    host: 'localhost',
    port: '5432',
    user: 'postgres',
    password: '0000',
    database: 'wp1_demo_45'
  });
  console.log('Connecting to local database', process.env.DATABASE);
} else if (process.env.DATABASE === 'SUPABASE') {
  pool = new Pool({
    host: process.env.SUPABASE_HOST,
    port: process.env.SUPABASE_PORT,
    user: process.env.SUPABASE_USER,
    password: process.env.SUPABASE_PASSWORD,
    database: process.env.SUPABASE_DATABASE
  });
  console.log('Connecting Supabase', process.env.SUPABASE_DATABASE);
}

export default pool;