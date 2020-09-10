const Mock = require('mockjs')

module.exports = Mock.mock({
    "list|10-20": [{
        "title": "@ctitle(6)",
        "id": "@id",
        "price|100-999": 1,
        "url": "@image(150x150,@color)",
        "checked": false
    }]
})