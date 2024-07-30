"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const userRoutes_1 = __importDefault(require("./routes/userRoutes"));
const pg_1 = require("pg");
const dotenv_1 = __importDefault(require("dotenv"));
const swagger_ui_express_1 = __importDefault(require("swagger-ui-express"));
const swaggerOptions_1 = require("./docs/swaggerOptions");
dotenv_1.default.config();
const app = (0, express_1.default)();
const port = process.env.PORT || 3000;
// Middleware
app.use(express_1.default.json());
// Database connection
const pool = new pg_1.Pool({
    connectionString: process.env.DATABASE_URL,
});
// User routes with database connection
app.use('/api/users', (0, userRoutes_1.default)(pool));
// Swagger UI
app.use('/api-docs', swagger_ui_express_1.default.serve, swagger_ui_express_1.default.setup(swaggerOptions_1.specs));
// Start server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
