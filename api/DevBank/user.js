const express  = require("express");
const morgan =  require("morgan")

const user =  require("./routes/user")

let app = express();

app.use(morgan("dev"));


app.use("/", user)

app.listen(3000, () => {
    console.log('Server running on 3000');
})