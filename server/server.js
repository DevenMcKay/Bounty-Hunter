const express = require("express")
const app = express()
const morgan = require("morgan")
const mongoose = require("mongoose")
require("dotenv").config()

app.use(express.json())
app.use(morgan('dev'))

app.use("/bounties", require("./routes/bountiesRouter"))

mongoose.connect("<MONGODB USER & PASSWORD HERE>mongodb.net/Bounty-Hunter", () => console.log("Mongoose Connected to DB"))

app.use((err, req, res, next) => {
  res.send(err.message)
})

app.listen(process.env.PORT || 3080, () => console.log("Port 3080 Connected"))
