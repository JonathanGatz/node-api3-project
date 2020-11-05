// code away!
require("dotenv").config();
const server = require("./server")



const port = process.env.PORT || 5000;
server.listen(port, () => {
    console.log(`Server is running http://localhost:${port} please catch it`)
})