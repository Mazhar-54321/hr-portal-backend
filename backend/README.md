# HR Portal Backend

## Setup

- Clone the repo  
```bash
git clone https://github.com/Mazhar-54321/hr-portal-backend.git
cd backend
npm install
npm run dev 
```

### Environmental variables
- APP_HOST 
- APP_PORT 
- API_VERSION 
- DATABASE = mongodb+srv://test:test@demo.aoloa.mongodb.net/express?retryWrites=true&w=majority
- DATABASE_TEST 
- JWT_ACCESS_SECRET
- JWT_REFRESH_SECRET
- FRONTEND_URL

### APi End points

- POST /api/users/register - Public

- POST /api/users/login - Public

- POST /api/users/logout - Public



### Employees
- GET /api/employees - Protected

- POST /api/employees - Admin/Editor

- GET /api/employees/:id - Protected

- PUT /api/employees/:id - Admin/Editor

- DELETE /api/employees/:id - Admin only

### Sample Users
- admin@example.com / Admin@123
- editor@example.com / Editor@123
- viewer@example.com / Viewer@123
