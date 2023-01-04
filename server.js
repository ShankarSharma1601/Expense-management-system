const express = require("express");
const app = express();
const cors = require("cors");
const morgan = require("morgan");
const dotenv = require("dotenv");
const connectDb = require("./config/connectDb");

//config dotenv file
dotenv.config();

// connect database
connectDb();

//middlewares
app.use(morgan("dev"));
app.use(express.json());
app.use(cors());

//routes
app.use("/api/v1/users", require("./routes/userRoute"));
// app.get("/", (req, res) => {
//   res.send(`Hello from server`);
// });

//PORT
const PORT = process.env.PORT || 8080;

//listen
app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
});
