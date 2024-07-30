import express from 'express';
import userRoutes from './routes/userRoutes';
import { Pool } from 'pg';
import dotenv from 'dotenv';
import swaggerUi from 'swagger-ui-express';
import { specs } from './docs/swaggerOptions';

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(express.json());

// Database connection
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

// User routes with database connection
app.use('/api/users', userRoutes(pool));

// Swagger UI
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));

// Start server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

