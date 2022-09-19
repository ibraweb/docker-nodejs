const express = require('express');

const port = process.env.PORT;
const host = process.env.HOST;

const app = express();

app.get('/test', (req, res) => {
     res.send('Our api is working correctly');
});


app.listen(port, () => {
     console.log(`Started api servicve on port ${port}`);
     console.log(`Our host is ${host}`);
})