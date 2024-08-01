import app from "./app";
import { AppDataSource } from "./config/data-source";
// import { connectDatabase } from "./config/database";

const port = process.env.APP_PORT || 3000;

// app.listen(port, async () => {
//   await connectDatabase();
//   console.log(`Server is running at http://localhost:${port}`);
// });

AppDataSource.initialize()
  .then(async () => {
    app.listen(port, () => {
      console.log("Server is running on http://localhost:" + port);
    });
    console.log("Data Source has been initialized!");
  })
  .catch((error) => console.log(error));