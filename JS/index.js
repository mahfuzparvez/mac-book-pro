/* memory section */
document.getElementById('8gb-memory-btn').addEventListener('click', function () {
    var memoryCost = document.getElementById('memory-cost');
    var memoryCostText = memoryCost.innerText;
    memoryCost.innerText = 0;
    calculation();
})
document.getElementById('16gb-memory-btn').addEventListener('click', function () {
    var memoryCost = document.getElementById('memory-cost');
    var memoryCostText = memoryCost.innerText;
    memoryCost.innerText = 180;
    calculation();
})
/* storage section */
document.getElementById('256gb-storage-btn').addEventListener('click', function () {
    var storageCost = document.getElementById('storage-cost');
    var storageCostText = storageCost.innerText;
    storageCost.innerText = 0;
    calculation();
})
document.getElementById('512gb-storage-btn').addEventListener('click', function () {
    var storageCost = document.getElementById('storage-cost');
    var storageCostText = storageCost.innerText;
    storageCost.innerText = 100;
    calculation();
})
document.getElementById('1tb-storage-btn').addEventListener('click', function () {
    var storageCost = document.getElementById('storage-cost');
    var storageCostText = storageCost.innerText;
    storageCost.innerText = 180;
    calculation();
})
/* Delivery section  */
document.getElementById('delivery-free-btn').addEventListener('click', function () {
    var deliveryCost = document.getElementById('delivery-charge');
    var deliveryCostText = deliveryCost.innerText;
    deliveryCost.innerText = 0;
    calculation();
})
document.getElementById('delivery-charge-btn').addEventListener('click', function () {
    var deliveryCost = document.getElementById('delivery-charge');
    var deliveryCostText = deliveryCost.innerText;
    deliveryCost.innerText = 20;
    calculation();
})
/* alcualation */
function calculation() {
    const bestPriceText = document.getElementById('bestPrice')
    const bestPrice = parseInt(bestPriceText.innerText);

    const memoryCostText = document.getElementById('memory-cost')
    const memoryCost = parseInt(memoryCostText.innerText);

    const storageCostText = document.getElementById('storage-cost')
    const storageCost = parseInt(storageCostText.innerText);

    const deliveryCostText = document.getElementById('delivery-charge')
    const deliveryCost = parseInt(deliveryCostText.innerText);

    const total = bestPrice + memoryCost + storageCost + deliveryCost;

    //    total set
    document.getElementById('total-cost').innerText = total;
    document.getElementById('footer-total').innerText = total;
}

