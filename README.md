# User Management API
A RESTful API for managing users, including registration, login, and profile management. Built with Node.js, Express, and PostgreSQL. This API provides endpoints to handle user operations and includes API documentation for ease of integration.

## Setting Up Ubuntu EC2 Instance
To set up this project on an Ubuntu EC2 instance, follow these steps:

1. **Launch an Ubuntu EC2 Instance**
   - Choose an appropriate instance type and launch it.
   - Ensure the instance has security group rules that allow inbound traffic on port 22 (SSH) and port 3000 (for the API).

2. **Connect to Your EC2 Instance**
   - Use SSH to connect to your instance:
    
3. **Update and Upgrade Packages**
   - Update the package list and upgrade installed packages:
     sudo apt update
     sudo apt upgrade -y

4. **Install Node.js and npm**
   - Install Node.js and npm 
     sudo apt install -y curl
     curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.3/install.sh | bash
     source ~/.bashrc
     nvm install node

5. **Install PostgreSQL**
   - Install PostgreSQL and create a database:
     sudo apt install -y postgresql postgresql-contrib
     sudo -i -u postgres
     createdb user_management_db
     exit

6. **Install Git**
   - Install Git:
     sudo apt install -y git

7. **Clone Your Repository**
   - Clone your repository to the EC2 instance
     git clone https://github.com/yourusername/user_managment_api.git
     cd user_managment_api
  
## Installation
1. **Set Up TypeScript Configuration**
   - Create a `tsconfig.json` file with the following content:
     ```json
     {
       "compilerOptions": {
         "target": "es6",
         "module": "commonjs",
         "outDir": "./dist",
         "rootDir": "./src",
         "strict": true,
         "esModuleInterop": true
       },
       "include": ["src/**/*"],
       "exclude": ["node_modules"]
     }

2. **Create Directory Structure**
   - Ensure the following directory structure:
<pre>
user-management-api/
├── dist/          
├── node_modules/    
├── src/          
│  ├── controllers/     
│  ├── middleware/     
│  ├── routes/       
│  ├── docs/        
│  └── index.ts       
├── .env           
├── package.json       
├── tsconfig.json      
└── README.md        
</pre>

3. **Install Dependencies**
   - Run the following command to install the necessary dependencies:
     npm install
     
4. **Set Up Environment Variables**
   - Create a `.env` file in the root directory with the following content:
     DATABASE_URL=postgres://username:password@localhost:5432/user_management_db
     JWT_SECRET=your_jwt_secret
     PORT=3000
   - Replace `username`, `password`, and `your_jwt_secret` with your actual values.

## Running the Application
1. **Start the Server**
   - Run the following command to start the server:
     npm start
   - The server will start on port 3000 by default. You can access the API at `http://localhost:3000`.

## API Documentation
The API documentation is available at `/api-docs`. You can view detailed API endpoints, request/response formats, and example usage.
- Access the documentation by navigating to `http://localhost:3000/api-docs` in your browser.

### Endpoints
- **POST /api/users/register**: Register a new user.
- **POST /api/users/login**: Login and receive a JWT token.
- **GET /api/users/profile**: Get the profile of the authenticated user.
- **PUT /api/users/profile**: Update the profile of the authenticated user.
- **DELETE /api/users/profile**: Delete the authenticated user's profile.
- 
## Testing
1. **Run Tests**
   - Execute the following command to run tests:
     npm test
   - Ensure that your environment variables are correctly set before running the tests.

## Contributing
1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Make your changes.
4. Commit your changes (`git commit -am 'Add new feature'`).
5. Push to the branch (`git push origin feature-branch`).
6. Open a pull request.

## License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
