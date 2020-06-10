var express = require('express');
var router = express.Router();

const products = [
    {id: 3, name: 'baseball bat', price: 9.99},
    {id: 5, name: 'Cricket ball', price: 3.30},
    {id: 8, name: 'baseball helmet', price: 12.00},
    {id: 10, name: 'Jets Jersey', price: 10.29},
    {id: 2, name: 'Truckers Cap', price: 5.99}
];

/* GET users listing. */
router.get('/getAll', function(req, res, next) {
  res.send(products);
});

module.exports = router;
