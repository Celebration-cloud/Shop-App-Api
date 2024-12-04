const express = require('express');

const app = express();



const port = process.env.PORT || 3000;

app.get('path', (req, res) => {
    return 	console.log(res.send)
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`)
});