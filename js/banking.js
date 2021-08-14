
// Handle deposit button.

document.getElementById('deposit-btn').addEventListener('click', function () {
    // console.log('deposit');
    // get the amount deposited.
    const depositInput = document.getElementById('deposit');
    const depositAmount = depositInput.value;
    console.log(depositAmount);

    const depositTotal = document.getElementById('deposit-amount');
    // console.log(depositTotal.innerText);
    depositTotal.innerText = depositAmount;

    // clear the box after added.
    depositInput.value = '';
})