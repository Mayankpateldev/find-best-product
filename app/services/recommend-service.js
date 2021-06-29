
const jsonData = require('./threads')

function recommendBestProduct(inventAmount) {
    //filter Unwanted data based on it's type, price and userLikeCount
    const onlySale = jsonData.filter(function(o){
        return (o.priceInUsd > 0 && o.userLikeCount > 0 && 
               (o.type == 'sale ' || o.type === 'sale trade ') )
    })

    console.log("onlySale length ==>", onlySale.length)
    //Now Sort Data Based on userLikeCount
    const sortAr = sort_by_key(onlySale, "userLikeCount")

    var calculatePrice = 0
    var prepareFinalar = []
    //Now Prepare list bases on amount in hand 
    for (let index = 0; index < sortAr.length; index++) {
        const element = sortAr[index]
        // check total amount must be less then 50000
        // if priceInUsd + calculatePrice < 50000 then skip it
        if (calculatePrice + element.priceInUsd >= inventAmount) 
        {
            continue
        }
        else if (calculatePrice >= inventAmount) {
            console.log("break code... due to reach limit of amout")
            break
        }
        else if ((calculatePrice + element.priceInUsd) < inventAmount) {
            prepareFinalar.push(element)
            calculatePrice = calculatePrice + element.priceInUsd
        }        
    }
    console.log("calculatePrice -->" , calculatePrice)
    console.log("prepareFinalar -->" , prepareFinalar.length)
    
    return prepareFinalar
}

function sort_by_key(array, key) {
    return array.sort(function(a, b)
    {
        var x = a[key]
        var y = b[key]
        return ((x > y) ? -1 : ((x < y) ? 1 : 0))
    })
}

exports.recommend = async function (inventAmount) {
    return recommendBestProduct(inventAmount)
}