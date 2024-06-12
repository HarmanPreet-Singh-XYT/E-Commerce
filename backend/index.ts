import express, { Express, Request, Response } from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import 'dotenv/config';
import { connectDB } from './data/DB'; // Import the connectDB function

const app: Express = express();
const port = process.env.PORT || 3500;

app.use(bodyParser.json());

const origin_url = process.env.FRONTEND_SERVER_ORIGIN;
const corsOptions = {
  origin: origin_url,
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true, // Enable cookies and authentication headers (if needed)
};

app.use(express.urlencoded({ extended: false }));
app.use(cors(corsOptions));

app.get('/', (req: Request, res: Response) => {
  console.log('success');
  res.status(200).json({ message: 'Success' });
});

// Function to start the server
const startServer = async () => {// Ensure the database connection is established
  app.listen(port, () => {
    console.log(`[server]: Server is running at Port ${port}`);
  });
  await connectDB();
};

startServer();
