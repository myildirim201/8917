const jwt = require('jsonwebtoken');

module.exports = async function (context, req) {
    const { username, password } = req.body;

    if (!/^\S+@\S+\.\S+$/.test(username)) {
        context.res = { status: 400, body: "Invalid email format" };
        return;
    }

    const token = jwt.sign({ username }, "secretKey", { expiresIn: "1h" });
    context.res = { status: 200, body: { token } };
};