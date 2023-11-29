const express = require(`express`);
const router = express.Router();
const bcrypt = require(`bcrypt`)
const Customer = require(`../models/customer`);

router.get(`/signup`, (req,res) => {
    res.render(`signup`)
})

router.post(`/signup`, async (req, res) => {
    try {
        const { name, email, password } = req.body;
        const checkExistingCustomer = await Customer.findOne({ name, email });

        if (checkExistingCustomer) {
            return res.end(`sorry a user with the same email or name exists`)
        }
        
        const hashedPassword = await bcrypt.hash(password, 10);
        const newCustomer = new Customer({ name, email, password: hashedPassword });

        const savedCustomer = await newCustomer.save();

        res.redirect(`/activities`);
    }
        
    catch (error) {
        console.error('Error saving Customer:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

module.exports = router;
