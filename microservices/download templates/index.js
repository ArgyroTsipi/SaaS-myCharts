const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 4002;
const templatesRouter = require('./src/router/download.js');


app.options('*', cors())
app.use(cors());

app.use(bodyParser.json());

app.use('/download-templates', templatesRouter);

app.listen(4002, () => {
    console.log(`> Download Templates Server started on port ${port}`);
});