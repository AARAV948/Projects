const express = require('express');

const app = express();
const port = 6000;

app.listen(port, ()=>{
    console.log(`server is running at port ${port}`);
});