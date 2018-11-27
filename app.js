require('dotenv').config({ path: 'variables.env' });
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const traceCtrl = require('./controllers/traceCtrl');
const uniqMdleWare = require('./middlewares/uniq');
const app = express();

// enable cors
app.use(cors());

//Takes the raw requests and turns them into usable properties on req.body
app.use(bodyParser.json({limit: '50mb', extended: true}))
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));


// router 
app.post('/traceRedirects/',
    uniqMdleWare.uniq,
    traceCtrl.traceRedirect);


const server = app.listen(process.env.PORT || 8080, () => {
    const port = server.address().port;
    console.log(`App listening on port ${port}`);
});