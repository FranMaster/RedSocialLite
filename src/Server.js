const express=require('express');
let app=express();

app.get('/',(req,res)=>{
    res.status(200).send('Running');
});


app.listen(3000,()=>{console.log('Server is Running.')})