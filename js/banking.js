function getInputvalue() {
    const depositeInput = document.getElementById('deposite-input');
    const depositeAmountText = depositeInput.value;
    const depositeAmount = parseFloat(depositeAmountText);
    depositeInput.value = '';
    return depositeAmount;
}

document.getElementById('deposite-button').addEventListener('click', function () {

    const depositeAmount = getInputvalue();



    //get current deposit
    const depositTotal = document.getElementById('deposit-total');
    const depositTotalText = depositTotal.innerText;
    const depositTotalAmount = parseFloat(depositTotalText);


    // depositTotal.innerText = depositeAmount;
    const newDepositTotal = depositTotalAmount + depositeAmount;
    depositTotal.innerText = newDepositTotal;

    //update balance 
    const balance = document.getElementById('blance-total');
    const balanceText = balance.innerText;
    const balanceTotal = parseFloat(balanceText)
    const newBalanceAmount = balanceTotal + depositeAmount;
    balance.innerText = newBalanceAmount;


})

//withdraw
document.getElementById('withdraw-button').addEventListener('click', function () {
    const withdrawInput = document.getElementById('withdraw-input');
    const withdrawAmount = withdrawInput.value;

    //get current withdraw
    const withdrawTotal = document.getElementById('withdraw-total');
    const withdrawTotalText = withdrawTotal.innerText;

    const newTotalWithdraw = parseFloat(withdrawTotalText) + parseFloat(withdrawAmount);
    withdrawTotal.innerText = newTotalWithdraw;

    //update blance 
    const balance = document.getElementById('blance-total');
    const balanceText = balance.innerText;
    const newBalanceAmount = parseFloat(balanceText) - parseFloat(withdrawAmount);
    balance.innerText = newBalanceAmount;

    withdrawInput.value = '';
})