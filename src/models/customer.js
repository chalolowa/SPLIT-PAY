const mongoose = require(`mongoose`);
const bcrypt = require(`bcrypt`);

const customerSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    }
});

//hashing the  customer password
customerSchema.pre(`save`, async function (next) {
    try {
        const hashedPassword = await bcrypt.hash(this.password, 10);

        this.password = hashedPassword;
        next();
    } catch (error) {
        next(error);
    }
})

//comparison hashed and input password
customerSchema.methods.comparePassword = async function (passwordInput) {
    try {
        const passwordComparison = await bcrypt.compare(passwordInput, this.password);
        return passwordComparison;
    } catch (error) {
        return false;
    }
}



const Customer= mongoose.models.Customer || mongoose.model(`Customer`, customerSchema)

module.exports = Customer;






