const express = require("express");
const connectToDb = require("./dbconnect");
const topicrouter = require('../backend/routes/topic')
const path = require('path')
var cors = require("cors");

const PORT = process.env.PORT || 5000;
const app = express();
connectToDb();


app.use(express.json({ limit: "50mb" }));
app.use(
  express.urlencoded({ limit: "50mb", extended: true, parameterLimit: 50000 })
);
app.use(cors())

app.use("/api", require("../backend/routes/user"));
app.use('/api/topic/' , topicrouter)

app.use(express.static(path.join(__dirname, '../client/build')))

app.get('*',function (req, res){
  res.sendFile(path.join(__dirname, '../client/build/index.html'))
})

app.get("/", (req, res) => {
  res.send("API Running");
});

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));