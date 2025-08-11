/**
 * Your task is to calculate the total budget required to buy electronics:
    laptop = 35000 tk
    tablet = 15000 tk
    mobile = 20000 tk
 */

    function calculateBudget(laptopQty, tabletQty, mobileQty) {
    const laptopPrice = 35000;
    const tabletPrice = 15000;
    const mobilePrice = 20000;

    const total = (laptopQty * laptopPrice) + (tabletQty * tabletPrice) + (mobileQty * mobilePrice);
    return total;
}


console.log("Total Budget:", calculateBudget(2, 1, 3), "tk");

/**
 * Output :
 * 1. Total Budget: 145000 tk
 */