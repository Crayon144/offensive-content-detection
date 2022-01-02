const express = require("express");
const cors = require("cors");
//const nsfwjs = require('nsfwjs');

const app = express();
const PORT = process.env.PORT || 8080;
app.use(cors());


app.get('/classifyImage', async (req , res) => {
    /*
    const model = await nsfwjs.load();
    const predictions = await model.classify(img)
    console.log('Predictions: ', predictions);
    */
    res.status(200).json({msg : "all good"});
})

app.listen(PORT, () => {console.log(`Server is running on ${PORT}`); });
