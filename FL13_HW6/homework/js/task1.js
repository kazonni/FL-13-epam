let checkNum = parseFloat(prompt('Enter check number: '));
let tipPercent = parseFloat(prompt('Enter tip percent: '));
const hundredPercent = 100;
const fixedNumber = 2;
if (isNaN(checkNum) || isNaN(tipPercent) || checkNum === null || tipPercent === null){
    alert('Invalid input data');
} else{
    let tip = parseFloat(tipPercent * checkNum / hundredPercent);
    let totalSum = parseFloat(checkNum + tip);
    if (totalSum < 0 || tipPercent < 0 || tipPercent > hundredPercent){
        alert('Invalid input data');
    } else if(!Number.isInteger(checkNum) || !Number.isInteger(tipPercent)){
        checkNum = checkNum.toFixed(fixedNumber);
        tipPercent = tipPercent.toFixed(fixedNumber);
        tip = tip.toFixed(fixedNumber);
        totalSum = totalSum.toFixed(fixedNumber);
        alert('Check number: '+checkNum+'\nTip: '+tipPercent+'%'+'\nTip amount: '+tip+'\nTotal sum to pay: '+totalSum);
    } else{
        alert('Check number: '+checkNum+'\nTip: '+tipPercent+'%'+'\nTip amount: '+tip+'\nTotal sum to pay: '+totalSum);
    }
}