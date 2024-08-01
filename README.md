# Library Management System
This project is a library management system developed using Node.js with Express.js. The project follows the Command Pattern design and utilizes PostgreSQL as the database. TypeORM is used for database operations, and Postman is used for API testing.

## Features
- Book Management: Add, update, delete, and list books
- Member Management: Add, update, delete, and list members
- Borrowing Transactions: Borrow and return books

## Technologies
- Server: Node.js, Express.js
- Database: PostgreSQL
- ORM: TypeORM
- Testing: Postman

## Installation

### Start Database 
```bash
docker run --name postgres-db -e POSTGRES_PASSWORD=mysecretpassword -e POSTGRES_USER=myuser -e POSTGRES_DB=mydb -p 5432:5432 -d postgres
```

### Install packages
```bash
npm install
npm run build
```

### Run Migration
```bash
npx typeorm migration:run -d dist/config/data-source.js
```

### Start Project
```bash
npm start
```

## License

[MIT](https://choosealicense.com/licenses/mit/)