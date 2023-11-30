const express = require(`express`)
const router = express.Router();

router.get(`/activites`,(req,res)=> {
    res.render(`activites`)
});

module.exports = router;