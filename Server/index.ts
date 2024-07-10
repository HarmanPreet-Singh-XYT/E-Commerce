import express, { Express, Request, Response } from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import routes from './routes';
import 'dotenv/config';
import helmet from 'helmet';
import { connectDB } from './data/DB'; // Import the connectDB function
import rateLimiterMiddleware from './middleware/rateLimit';
import authenticateToken from './middleware/header_auth';
const app: Express = express();
app.set('trust proxy', true);
const port = process.env.PORT || 3500;


app.use(rateLimiterMiddleware);
app.use(bodyParser.json({limit:'100kb'}));
app.use(helmet());
const origin_url:string = process.env.FRONTEND_SERVER_ORIGIN as string;
const corsOptions = {
  origin: origin_url,
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true, // Enable cookies and authentication headers (if needed)
};
app.use(express.urlencoded({ extended: false }));
app.use(cors(corsOptions));
app.use(authenticateToken);
app.get('/', (req: Request, res: Response) => {
  res.status(200).json({ message: 'Success' });
});
app.use('/api', routes);
// Function to start the server
const startServer = async () => {// Ensure the database connection is established
  app.listen(port, () => {
    console.log(`[server]: Server is running at Port ${port}`);
  });
  await connectDB();
};

startServer();
