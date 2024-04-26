const userRouter = require('./routes/user.routes')
const express = require('express');
const app = express();
const port = 3001;
const User = require("./models/User");
const mongoose = require('mongoose')

const cors = require("cors");
app.use(cors({}));

app.use("/api/user", userRouter);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const uri = "mongodb://127.0.0.1:27017/react-starter-test";
mongoose.connect(uri).then(
  () => {
  console.log("Connection is Successful");
  },
  (err) => {
  console.error("Connection to mongodb is error", err?.message);
  }
);

app.get('/', (req, res) => {
   res.send('วันศุกร์ได้ย๊างงง')
})

app.listen(port, () => {
   console.log(`Example app listening on port ${port}`);
})
