const express = require("express");

const App = express()
const port = process.env.PORT || 8000
App.listen(port, () => console.log(`Server Running on port: ${port}`))