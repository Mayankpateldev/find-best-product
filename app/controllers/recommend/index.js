const { recommend } = require('../../services/recommend-service')

//Default Value if not pass
let inventAmount = 50000;

exports.recommend = async function (req, res) {

    if (req.headers.cash && Number.isInteger(req.headers.cash)) {
        inventAmount = req.headers.cash;
    }
    
    const result = await recommend(inventAmount)

    if (!result) {
        console.error(`No data found`)
        res.status(404).json(`No data found`)
    } else {
        res.status(200).json(result)
    }
}

