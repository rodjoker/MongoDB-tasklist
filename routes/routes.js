import { Router } from "express";


const router = Router();

router.get("/conect", async (req, res)=> {
    //acceder a la base de datos
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
router.get("/conect/task-work", async (req, res)=> {
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
router.get("/conect/task-month", async (req, res)=> {
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

router.post("/conect", async(req, res)=> {
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
router.post("/conect", async(req, res)=> {
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
router.post("/conect", async(req, res)=> {
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

router.put('/actualizar/:id', async (req, res) => {

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
router.put('/actualizar/:id', async (req, res) => {
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
  router.put('/actualizar/:id', async (req, res) => {

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

    router.delete('/borrar/:id', async (req, res) => {

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
  
  export default router;
