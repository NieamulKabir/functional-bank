function getInputvalue(inputId) {
    const inputField = document.getElementById(inputId);
    const inputAmountText = inputField.value;
    const inputAmount = parseFloat(inputAmountText);
    inputField.value = '';
   
    return inputAmount;
}

document.getElementById('deposite-button').addEventListener('click', function () {

    const depositeAmount = getInputvalue('deposite-input');



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
    // const withdrawInput = document.getElementById('withdraw-input');
    // const withdrawAmountText = withdrawInput.value;
    // const withdrawAmount = parseFloat(withdrawAmountText);
    const withdrawAmount = getInputvalue('withdraw-input');
    //get current withdraw
    const withdrawTotal = document.getElementById('withdraw-total');
    const withdrawTotalText = withdrawTotal.innerText;
    const withdrawTotalAmount = parseFloat(withdrawTotalText)

    const newTotalWithdraw = withdrawTotalAmount + withdrawAmount;
    withdrawTotal.innerText = newTotalWithdraw;

    //update blance 
    const balance = document.getElementById('blance-total');
    const balanceText = balance.innerText;
    const balanceTotal = parseFloat(balanceText)
    const newBalanceAmount = balanceTotal - withdrawAmount;
    balance.innerText = newBalanceAmount;

  
})