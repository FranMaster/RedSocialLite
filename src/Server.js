const express=require('express');
const config=require('./config/config');
let app=config(express());
app.listen(3000,()=>{
    console.log('Runnig');
});

