const express  = require("express");
const morgan =  require("morgan")
const transacciones = require("./routes/transacciones")
let app = express();

app.use(morgan("dev"));

app.use("/", transacciones)

app.listen(4000, () => {
    console.log('Server running on 4000');
})
