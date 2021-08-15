
// Handle deposit button.

document.getElementById('deposit-btn').addEventListener('click', function () {
    // console.log('deposit');

    // get the amount deposited.
    const depositInput = document.getElementById('deposit');
    const newDepositAmountText = depositInput.value;
    const newDepositAmount = parseFloat(newDepositAmountText);

    const depositTotal = document.getElementById('deposit-amount');
    const previousDepositText = depositTotal.innerText;

    const previousDepositAmount = parseFloat(previousDepositText);

    const newDepositTotal = previousDepositAmount + newDepositAmount;

    depositTotal.innerText = newDepositTotal;

    // update balance after deposit.
    const balanceTotal = document.getElementById('total-balance');
    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText);
    const newBalanceTotal = previousBalanceTotal + newDepositAmount;
    balanceTotal.innerText = newBalanceTotal;

    // clear the box after added.
    depositInput.value = '';
})


// handel Withdraw event handler.

document.getElementById('withdraw-btn').addEventListener('click', function () {
    // console.log('check');
    const withdrawInput = document.getElementById('withdraw');
    const withdrawAMountText = withdrawInput.value;
    const newWithdrawAmount = parseFloat(withdrawAMountText);
    // console.log(newWithdrawAmount);

    // set withdraw total.
    const withdrawTotal = document.getElementById('withdraw-amount');
    const previousWithdrawText = withdrawTotal.innerText;
    const previousWithdrawTotal = parseFloat(previousWithdrawText);
    const newWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;
    withdrawTotal.innerText = newWithdrawTotal;

    // clear withdraw input.
    withdrawInput.value = '';


    // update balance.
    const balanceTotal = document.getElementById('total-balance');
    const previousBalanceText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceText);
    const newBalanceTotal = previousBalanceTotal - newWithdrawAmount;

    balanceTotal.innerText = newBalanceTotal;


})



