const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const app = express();

app.use(express.urlencoded({ extended: false }))
app.use(express.json())

const PORT = process.env.PORT || 3001
dotenv.config();

mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})

    .then(() => { console.log("connection good") })
    .catch((error) => { console.log(error) })

app.use('/api', require("./routes/routes"))

app.listen(PORT, () => { console.log(`Backend server now running on port http://localhost:${PORT}`) })