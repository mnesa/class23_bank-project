document.getElementById('deposit-button').addEventListener('click', function () {
  
  // get amount from input field
  const depositInput = document.getElementById('deposit-input');
  const newDepositText = depositInput.value;
  //console.log(newDepositText);
  const newDepositAmmount = parseFloat(newDepositText);

  //set in deposit box // display update deposit total
  const depositTotal = document.getElementById('deposit-total');
  const priviousDepsiteText = depositTotal.innerText;
  const priviousDepositAmount = parseFloat(priviousDepsiteText);
   
  const newDepositTotal = priviousDepositAmount + newDepositAmmount;
  depositTotal.innerText = newDepositTotal;
  
  //update new balance 
  const balanceTotal = document.getElementById('balance-total');
  const priviousBalanceTotal = balanceTotal.innerText;
  const priviousBalanceTotalAmmount = parseFloat(priviousBalanceTotal);

  const newBalanceTotal = priviousBalanceTotalAmmount + newDepositAmmount;
  balanceTotal.innerText = newBalanceTotal;

  //clear
  depositInput.value = '';
})


// Withdraw
document.getElementById('withdraw-button').addEventListener('click', function () {
  //get withdraw input
  const withdrawInput = document.getElementById('withdraw-input');
  const withdrawText = withdrawInput.value;
  const withdrawAmount = parseFloat(withdrawText);

  //withdraw update
  const withdrowTotal = document.getElementById('withdraw-total');
  const priviousWithdrawText = withdrowTotal.innerText;
  const priviousWithdrawAmmount = parseFloat(priviousWithdrawText);

  const newWithdrawTotal = priviousWithdrawAmmount + withdrawAmount;
  withdrowTotal.innerText = newWithdrawTotal;

  //update balance
  const balanceTotal = document.getElementById('balance-total');
  const priviousBalanceTotal = balanceTotal.innerText;
  const priviousBalanceTotalAmmount = parseFloat(priviousBalanceTotal);

  const newBalanceTotal = priviousBalanceTotalAmmount - withdrawAmount;
  balanceTotal.innerText = newBalanceTotal;

  //clear
 withdrawInput.value = '';

})


