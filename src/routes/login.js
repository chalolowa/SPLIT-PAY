const express = require(`express`);
const router = express.Router();

const Customer = require(`../models/customer`);

router.get(`/login`, (req, res) => {
    res.render(`login`)
});

router.post(`/login`, async (req, res) => {
    try {
        const { name, email, password } = req.body;

        const customer = await Customer.findOne({ name });

        if (!customer) {
            return res.end(`no such name exists`)
        }
        const customerEmail = await Customer.findOne({ email });
        if (!customerEmail) {
            return res.end(`no such email exist please try logging in again`)
        };
 
        const testingPasswordsMatch = await customer.comparePassword(password)
        
        if (testingPasswordsMatch) {
            res.redirect(`activites`)
        } else {
            res.send(`hey you either do not exist as a user or you have incorrect login credentials`).redirect(`/signup`);
            
        }
       
    } catch (error) {
        console.error(`Error during the proccess of logging in`, error.stack);
        res.end(`hey sorry we had a slight internal please come back in a few minutes or try 
            contacting administrators for support`)
    }
});

module.exports = router;