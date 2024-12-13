module.exports = async function (context) {
    const sales = Math.floor(Math.random() * 100) + 1;
    context.log(`You made ${sales} sales today.`);
};