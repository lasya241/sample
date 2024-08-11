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

// app.post('/insertE', async(req, res) => {
//         await db.collection("astteam").insertOne({Email:req.body.Email,Password:req.body.Password})
//          .then((result)=>{
//              res.json(result)
//      })
//          .catch((e)=>console.log(e))
//  })
//  app.post('/find', async(req, res) => {
//     await db.collection("astteam").findOne({Email:req.body.Email,Password:req.body.Password})
//      .then((result)=>{
//         if(result){
//          res.json("Login Successfull");
//         }else{
//             res.json("Login unsuccessfull");
//         }
//  })
//      .catch((e)=>console.log(e))
// })app.post('/insertE', async (req, res) => {
  
app.post('/insertE', async (req, res) => {
await db.collection("astteam").insertOne({
    Name: req.body.Name,
    Email: req.body.Email,
    Password: req.body.Password
  })
  .then((result) => {
    if (result) {
      res.json({ message: "Signp Successfull",value:result });
    } else {
      res.json({ message: "Signup unsuccessfull" });
    }
  })
  .catch((e) => console.log(e));
});

app.post('/SignIn', async (req, res) => {
    await db.collection("astteam").findOne({ Email: req.body.Email, Password: req.body.Password })
      .then((result) => {
        if (result) {
          res.json({ message: "Login Successfull",value:result });
        } else {
          res.json({ message: "Login unsuccessfull" });
        }
      })
      .catch((e) => console.log(e));
  });


  app.post("/forgotpassword", async (req, res) => {
    const { Name, newPassword } = req.body;
  
    if (!Name || !newPassword) {
      return res.status(400).json({ message: "Name and new password are required" });
    }
  
    try {
      const result = await db.collection("astteam").updateOne(
        { Name: Name }, 
        { $set: { Password: newPassword } } 
      );
  
      if (result.modifiedCount === 0) {
        return res.status(404).json({ message: "User not found" });
      }
      res.json({ message: "Password updated successfully" });
    } catch (e) {
      console.error("Error updating password:", e);
      res.status(500).json({ message: "An error occurred while updating the password" });
    }
  });
  
  app.post("/Signup", async (req, res) => {
    try {
        const {  Email, Password } = req.body;

        // Basic input validation
        if ( !Email || !Password) {
            return res.status(400).json({ error: "All fields are required" });
        }

        // Check if the email already exists
        const existingUser = await db.collection("ast").findOne({ Email });
        if (existingUser) {
            return res.status(400).json({ error: "Email already exists" });
        }

        // Insert new user data into the database
        const result = await db.collection("ast").insertOne({
            Email,
            Password
        });

        // Check if the insertion was successful
        if (result.acknowledged) {
            res.status(201).json({ message: "Sign up successful", data: result });
        } else {
            res.status(500).json({ error: "Sign up failed" });
        }
    } catch (e) {
        console.error("Signup Error: ", e);
        res.status(500).json({ error: "Internal server error" });
    }
});
app.post("/students",async(req,res)=>{
   await db.collection("astteam").find().toArray()
   .then((result)=>{
    res.send(result);
   })
   .catch((e) => {
    console.log(e);
    res.status(500).json({error:"Message not sent"});
   });
});

 connectToDB(() => {
    app.listen(9000, () => {
  console.log("server running at 9000");
  })
 })
