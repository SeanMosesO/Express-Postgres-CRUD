const {Client}=require('pg')
const express=require('express')

const app=express()
app.use(express.json()) // Middleware to parse JSON requests
const con=new Client({
    host:'localhost',
    user:'postgres',
    port:5432,
    password:'1234567890',
    database:"demopostgres"
})


con.connect().then(()=>{
    console.log("Connected to the database successfully");
}).catch((err)=>{
    console.error("Error connecting to the database", err);
}).finally(()=>{
    con.end();
}) // Close the connection after use
// Note: In a real application, you would typically keep the connection open and reuse it for
app.post('/postData'),(req,res)=>{
    const {name, email, age}=req.body;
    const query='INSERT INTO users(name, email, age) VALUES($1, $2, $3) RETURNING *';
    con.query(query,[name, email, age])
    .then(result=>{
        res.status(201).json({message:"Data inserted successfully", data:result.rows[0]});
    })
    .catch(err=>{
        console.error("Error inserting data", err);
        res.status(500).json({error:"Internal Server Error"});
    });
}