const express = require('express');
const app = express();
const port = 3001;
const userRouters = require('./app/routes/user');
const itemRouters = require('./app/routes/item');
app.use(userRouters);
app.use(itemRouters);

app.listen(port,()=>{
    console.log('La aplicacion esta en linea');
});