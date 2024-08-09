// import http from 'http'

// const port = 3000;

// const server = http.createServer((req, res) => {

//     if (req.url === '/myself') {
//         res.statusCode = 200
//         res.setHeader("Content-Type", "text/plain");
//         res.write("My team name is AST team\n")
//         res.write("what are you doing\n")
//         res.end()
//     }

//     else if (req.url === '/html') {
//         res.statusCode = 200
//         res.setHeader("Content-Type", "text/html");
//         res.write("my name is teja\n")
//         res.write("<h1>Hello darlings....</h1>")
//         res.end()
//     }

//     else if (req.method === 'POST' && req.url === '/recivedata') {
//         res.statusCode = 200
//         res.setHeader("Content-Type", "application/json");
//         let body = "";
//         req.on("data", (chunk) => {
//             body += chunk.toString();
//         });
//         console.log(body)
//         res.end()
//     }

//     else if (req.url === '/senddata') {
//         res.statusCode = 200
//         res.setHeader("Content-Type", "application/json");
//         const data = { Name: "Teja", Branch: "cse" }
//         res.end(JSON.stringify(data))
//     }

//     else {
//         res.statusCode = 400
//         res.end("Page Not Found\n")
//     }
// });

// server.listen(port, () => {
//     console.log(`Server running at ${port}`);
// });

// import cors from "cors";
// import express from "express";
// import { connectToDB, db } from "./db.js";

// const app = express();
// app.use(cors());
// app.use(express.json());

// app.get("/", (req, res) => {
//   res.json("server is running successfully!");
// });
// app.post("/insert", async (req, res) => {
//   await db
//     .collection("astteam")
//     .insertOne({ Name: req.body.Name, Team: req.body.Team })
//     .then((result) => {
//       res.json(result);
//     })
//     .catch((e) => console.log(e));
// });
// app.post("/insertM", async (req, res) => {
//   await db
//     .collection("astteam")
//     .insertMany(req.body)
//     .then((result) => {
//       res.json(result);
//     })
//     .catch((e) => console.log(e));
// });

// app.post("/update", async (req, res) => {
//   await db
//     .collection("astteam")
//     .updateOne({ Name: req.body.Name }, { $set: req.body })
//     .then((result) => {
//       res.json(result);
//     })
//     .catch((e) => console.log(e));
// });
// app.post("/updateM", async (req, res) => {
//   await db
//     .collection("astteam")
//     .updateMany({ Branch: req.body.Branch }, { $set: req.body })
//     .then((result) => {
//       res.json(result);
//     })
//     .catch((e) => console.log(e));
// });
// app.post("/delete", async (req, res) => {
//   await db
//     .collection("astteam")
//     .deleteOne({ Name: req.body.Name })
//     .then((result) => {
//       res.json(result);
//     })
//     .catch((e) => console.log(e));
// });
// app.post("/findO", async (req, res) => {
//   await db
//     .collection("astteam")
//     .findOne({ Name: req.body.Name })
//     .then((result) => {
//       res.json(result);
//     })
//     .catch((e) => console.log(e));
// });
// app.post("/lt", async (req, res) => {
//   await db
//     .collection("astteam")
//     .updateMany({ Age: { $lt: req.body.Age } },{ $set: req.body })
//     .then((result) => {
//       res.json(result);
//     })
//     .catch((e) => console.log(e));
// });
// app.post("/gt", async (req, res) => {
//   await db
//     .collection("astteam")
//     .updateMany({ Age: { $gt:14} }, { $set: req.body })
//     .then((result) => {
//       res.json(result);
//     })
//     .catch((e) => console.log(e));
// });
// app.post("/gte", async (req, res) => {
//   await db
//     .collection("astteam")
//     .updateMany({ Age: { $gte: 18 } }, { $set: req.body })
//     .then((result) => {
//       res.json(result);
//     })
//     .catch((e) => console.log(e));
// });
// app.post("/lte", async (req, res) => {
//   await db
//     .collection("astteam")
//     .updateMany({ Age: { $lte:20} }, { $set: req.body })
//     .then((result) => {
//       res.json(result);
//     })
//     .catch((e) => console.log(e));
// });
// app.post("/ne", async (req, res) => {
//     await db
//       .collection("astteam")
//       .updateMany({ Age: { $ne: 18 } }, { $set: req.body })
//       .then((result) => {
//         res.json(result);
//       })
//       .catch((e) => console.log(e));
//   });
  
//   app.post("/eq", async (req, res) => {
//     await db
//       .collection("astteam")
//       .updateMany({ Branch: { $eq: "CSBS" } }, { $set: req.body })
//       .then((result) => {
//         res.json(result);
//       })
//       .catch((e) => console.log(e));
//   });
  



// connectToDB(() => {
//   app.listen(9000, () => {
//     console.log("server running at 9000");
//   });
// });

import cors from 'cors';
import express from 'express';
import { connectToDB,db} from "./db.js";

const app = express()
app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
    res.json("server is running successfully!");
})

app.post('/insertE', async(req, res) => {
        await db.collection("astteam").insertOne({Email:req.body.Email,Password:req.body.Password})
         .then((result)=>{
             res.json(result)
     })
         .catch((e)=>console.log(e))
 })
 app.post('/find', async(req, res) => {
    await db.collection("astteam").findOne({Email:req.body.Email,Password:req.body.Password})
     .then((result)=>{
        if(result){
         res.json("Login Successfull");
        }else{
            res.json("Login unsuccessfull");
        }
 })
     .catch((e)=>console.log(e))
})

 connectToDB(() => {
    app.listen(9000, () => {
  console.log("server running at 9000");
  })
 })
