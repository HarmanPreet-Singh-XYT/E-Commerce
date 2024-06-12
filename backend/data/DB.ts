import { Client } from 'pg';
import 'dotenv/config';

type DetailsType = {
  user: string;
  password: string;
  host: string;
  port: number;
  database: string;
};

const details: DetailsType = {
  user: process.env.DB_USER || '',
  password: process.env.DB_PASS || '',
  host: process.env.DB_HOST || '',
  port: parseInt(process.env.DB_PORT || '5432', 10),
  database: process.env.DB_NAME || '',
};

const client = new Client({
  user: details.user,
  password: details.password,
  host: details.host,
  port: details.port,
  database: details.database,
});

const connectDB = async () => {
  try {
    await client.connect();
    console.log('Connected to the database');
  } catch (err:any) {
    console.error('Connection error', err.stack);
    process.exit(1); // Exit the process with a failure code
  }
};

export { client, connectDB };
