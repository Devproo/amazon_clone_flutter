console.log("Hello, World");
const express = require("express");
const mongoose = require("mongoose");
const authRouter = require("./routes/auth");
const adminRouter = require("./routes/admin");
const productRouter = require("./routes/product");
const PORT = 3000;
const app = express();
const DB =
  "mongodb+srv://user1234:password1234@cluster0.9iaembi.mongodb.net/?retryWrites=true&w=majority";
app.use(express.json());
app.use(authRouter);
app.use(adminRouter);
app.use(productRouter);

mongoose
  .connect(DB)
  .then(() => {
    console.log("Connection is successfull");
  })
  .catch((e) => {
    console.log(e);
  });

app.listen(PORT, "0.0.0.0", () => {
  console.log(`connected at port  ${PORT}`);
});
