const express = require('express');
const { shopItems } from './data/shopData';

const app = express();



const port = process.env.PORT || 3000;

app.get('path', (req, res) => {
    return 	console.log(res.send(shopItems))
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`)
});