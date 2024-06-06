document.getElementById('orderButton').addEventListener('click', async () => {
    const order = prompt("Enter your order (burger, ayam goreng, pizza):").toLowerCase();
    try {
        const result = await placeOrder(order);
        document.getElementById('orderStatus').innerText = result;
    } catch (error) {
        document.getElementById('orderStatus').innerText = error;
    }
});

async function placeOrder(order) {
    try {
        const result = await processOrder(order);
        return result;
    } catch (error) {
        throw error;
    }
}

function processOrder(order) {
    return new Promise((resolve, reject) => {
        let waitTime;

        switch (order) {
            case 'burger':
                waitTime = 3000; // 3 seconds
                console.log("burger sedang diproses, tunggu 3 detik");
                break;
            case 'ayam goreng':
                waitTime = 5000; // 5 seconds
                console.log("ayam goreng sedang diproses, tunggu 10 detik");
                break;
            case 'pizza':
                waitTime = 15000; // 15 seconds
                console.log("ayam goreng sedang diproses, tunggu 15 detik");
                break;
            default:
                reject('Invalid order. Please order burger, ayam goreng, atau pizza.');
                return;
        }

        setTimeout(() => {
            resolve(`Your ${order} is ready!`);
            console.log(`${order} selesai, silahkan ambil pesanan anda!!`);
        }, waitTime);
    });
}