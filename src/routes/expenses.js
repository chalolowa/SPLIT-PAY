const express = require(`express`);
const express = express.Router();

router.get(`/expenses`, (req, res) => {
    res.render(`expenses`)
});

router.post(`/expenses`, (req, res) => {
    res.render(`expenses`)
});