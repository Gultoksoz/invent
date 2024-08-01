import app from "./app";
import { AppDataSource } from "./config/data-source";

const port = process.env.APP_PORT || 3000;



AppDataSource.initialize()
  .then(async () => {
    app.listen(port, () => {
      console.log("Server is running on http://localhost:" + port);
    });
    console.log("Data Source has been initialized!");
  })
  .catch((error) => console.log(error));