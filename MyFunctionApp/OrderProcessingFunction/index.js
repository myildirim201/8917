module.exports = async function (context, req) {
    const { orderId, items } = req.body;

    items.forEach(item => {
        context.log(`${item.name} order processing started`);
    });

    context.res = { status: 200, body: "Order processing completed" };
};