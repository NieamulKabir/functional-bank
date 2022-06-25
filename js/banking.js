
function getInputvalue(inputId) {
    const inputField = document.getElementById(inputId);
    const inputAmountText = inputField.value;
    const inputAmount = parseFloat(inputAmountText);
    inputField.value = '';
    return inputAmount;
}

function updateTotalField(totalFieldId, amount) {
    const totalElement = document.getElementById(totalFieldId);
    const totalText = totalElement.innerText;
    const totalAmount = parseFloat(totalText);
    totalElement.innerText = totalAmount + amount;
}
function getCurentBalance() {
    const balance = document.getElementById('blance-total');
    const balanceText = balance.innerText;
    const balanceTotal = parseFloat(balanceText);
    return balanceTotal;
}
function blanceUpdate(amount, isAdd) {
    const balance = document.getElementById('blance-total');
    const balanceTotal = getCurentBalance();
    if (isAdd == true) {
        balance.innerText = balanceTotal + amount;
    }
    else {
        balance.innerText = balanceTotal - amount;
    }
}
document.getElementById('deposite-button').addEventListener('click', function () {
    const amount = getInputvalue('deposite-input');
    if (amount > 0) {
        updateTotalField('deposit-total', amount);
        blanceUpdate(amount, true);
    }
})

//withdraw
document.getElementById('withdraw-button').addEventListener('click', function () {
    const amount = getInputvalue('withdraw-input');
    const currentBalance = getCurentBalance();
    if (amount > 0 && amount < currentBalance) {
        updateTotalField('withdraw-total', amount)
        blanceUpdate(amount, false);
    }

})