
const {MongoClient} = require("mongodb");
const express = require("express");
const app = express();
//const host = "localhost";
require ("dotenv").config();
const PORT = process.env.PORT || 8000
const uri = "mongodb+srv://rodolfoantoniorq:i0qkRyn1VxCURhHE@cluster0.kblxklr.mongodb.net/?retryWrites=true&w=majority"
const client = new MongoClient(uri, {useNewUrlParser: true})


app.use(express.json);

app.get("/conect", (req, res) => {
    res.json({response: "succes"});
})

app.get("/conect/task", async (req, res)=> {
    
   try {
       await client.connect();
       const db = client.db("my-task-list");
       const collection = db.collection("task");
       const document = await collection.find({}).toArray();
       res.send(document);
   } catch (error) {
    console.log(error)
   }
})
/*
app.get("/conect/task-work", async (req, res)=> {
   try {
       await client.connect();
       const db = client.db("my-task-list");
       const collection = db.collection("task-work");
       const document = await collection.find({}).toArray();
       res.send(document);
   } catch (error) {
    console.log(error)
   }
})
app.get("/conect/task-month", async (req, res)=> {
   try {
       await client.connect();
       const db = client.db("my-task-list");
       const collection = db.collection("task-month");
       const document = await collection.find({}).toArray();
       res.send(document);
   } catch (error) {
    console.log(error)
   }
})

app.post("/conect/task", async(req, res)=> {
    const task = req.body;
    try {

        await client.connect();
        const db = client.db("my-task-list");
        const collection = db.collection("task");
        const newDocument = await collection.insertOne(task);
          if(newDocument){
            res.send(newDocument);
          }else {
        res.status(400).send("Algo salió mal")}
    }catch (error) {
     console.log(error);
    }

});
app.post("/conect/task-month", async(req, res)=> {
    const task = req.body;
    try {

        await client.connect();
        const db = client.db("my-task-list");
        const collection = db.collection("task-month");
        const newDocument = await collection.insertOne(task);
        if(newDocument)
        res.send(newDocument);
    } catch (error) {
     console.log(error);
    }
});
app.post("/conect/task-work", async(req, res)=> {
    const task = req.body;
    try {

        await client.connect();
        const db = client.db("my-task-list");
        const collection = db.collection("task-work");
        const newDocument = await collection.insertOne(task);
        if(newDocument)
        res.send(newDocument);
    } catch (error) {
     console.log(error);
    }
});

app.put('/actualizar/:id', async (req, res) => {

    try {

       await client.connect();
       const db = client.db("my-task-list");
       const collection = db.collection("task");
       const documento = await collection.updateOne();

    documento.nombre = req.body.task;
    await documento.save();
} catch (error) {
    console.log(error);
   }
  });
app.put('/actualizar/:id', async (req, res) => {
    try {
       await client.connect();
       const db = client.db("my-task-list");
       const collection = db.collection("task-work");
       const documento = await collection.updateOne();

    documento.nombre = req.body.task;
    await documento.save();
} catch (error) {
    console.log(error);
   }
  });
  app.put('/actualizar/:id', async (req, res) => {

    try{ 
  
         await client.connect();
         const db = client.db("my-task-list");
         const collection = db.collection("task-month");
         const documento = await collection.updateOne();
  
      documento.nombre = req.body.task;
      await documento.save();
    } catch (error) {
        console.log(error);
       }
    });

    app.delete('/borrar/:id', async (req, res) => {
      const id = req.params.id();

        try{

        await client.connect();
        const db = client.db("my-task-list");
        const collection = db.collection("task-month");
        const documento = await collection.deleteOne(id);
 
     documento.nombre = req.body.task;
    } catch (error) {
        console.log(error);
       }
     
   });
*/
app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
})