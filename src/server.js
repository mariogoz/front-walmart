const express = require('express');
const path = require('path');

const app = express();

app.use(express.static('./dist/front-walmart'));
app.get('/*',function(req,res){
    //res.sendFile(path.join(__dirname + '/index.html'));
    res.sendFile('index.html', {root: 'dist/front-walmart/'})
});

app.listen(process.env.PORT || 8080);