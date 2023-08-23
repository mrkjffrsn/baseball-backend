const express = require('express')
const app = express()
const port = process.env.PORT || 3000;

app.get('/predict', (req, res) => {

    const batID = req.query.batID
    const pitcherID = req.query.pitcherID
    const batAvg = parseFloat(req.query.batAvg)
    const pitchAvg = parseFloat(req.query.pitchAvg)

    res.json( { predictionPercent: (batAvg + pitchAvg) } )
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})