const express = require('express');
const app = express();
const path = require('path');

//Middlewares


//settings
app.set('port',4000);
app.set('view engine','ejs');
app.engine('html',require('ejs').renderFile);
app.set('views',path.join(__dirname,'views'));
//Routes
app.use(require('./routes/index'));
//Static files 
app.use(express.static(path.join(__dirname,'public')));
//Listening the server
app.listen(app.get('port'), () => {
    console.log('Server on port',app.get('port'))
});