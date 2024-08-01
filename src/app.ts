import express from "express";
import bodyParser from "body-parser";
import userRoutes from "./user/routes/user.route";
import bookRoutes from "./book/routes/book.route";
import borrowRoutes from "./borrow/routes/borrow.route";

const app = express();

app.use(bodyParser.json());
app.use("/users", userRoutes);
app.use("/books", bookRoutes);
app.use("/", borrowRoutes);

export default app;
