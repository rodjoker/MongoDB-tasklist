import routes from "./routes";
//import routes from "../routes/routes";
const {MongoClient} = require("mongodb");
const express = require("express");
const app = express();
const host = "localhost";
require ("dotenv").config();
const PORT = process.env.PORT || 8000
const uri = "mongodb+srv://rodolfoantoniorq:i0qkRyn1VxCURhHE@cluster0.kblxklr.mongodb.net/?retryWrites=true&w=majority"
const client = new MongoClient(uri, {useNewUrlParser: true})


app.use(express.json);
// async function mongodbConnect() {
//     try {
//       // Connect the client to the server	(optional starting in v4.7)
//       await client.connect();
//       // Send a ping to confirm a successful connection
//       await client.db("admin").command({ ping: 1 });
//       console.log(
//         "base de datos conectada"
//       );
//     } finally {
//       // Ensures that the client will close when you finish/error
//       await client.close();
//     }
//   }

// mongodbConnect();

app.use(routes);

app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
})