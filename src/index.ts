import app from "./app";
import { connectDatabase } from "./config/database";

const port = process.env.APP_PORT || 3000;

app.listen(port, async () => {
  await connectDatabase();
  console.log(`Server is running at http://localhost:${port}`);
});