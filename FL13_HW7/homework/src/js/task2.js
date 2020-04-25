let mainQuestion = confirm('Do you want to play a game?');
let zero = 0;
let two = 2;
let three = 3;
let five = 5;
let hundred = 100;
let min = 0;
let max = 5;
let rand;
let guess;
let attempts = 3;
let totalPrize = 0;
let maxWin = 100;
let possiblePrize = 100;

if(!mainQuestion){
    alert('You did not become a billionaire, but can.');
} else{
    while(mainQuestion){
        rand = Math.floor(min + Math.random() * (max + 1 - min));
        while(attempts !== zero){
            guess = prompt('Choose a roulette pocket number from '+min+' to '+max+
                            '\nAttempts left: '+attempts+
                            '\nTotal prize: '+totalPrize+'$\n'+
                            'Possible prize on current attempt: '+possiblePrize+'$');
            attempts--;
            if(guess === String(rand)){
                totalPrize += possiblePrize;
                mainQuestion = confirm('Congratulation, you won! Your prize is: '+possiblePrize+
                                        '$. Do you want to continue?');
                if(mainQuestion){
                    attempts = three;
                    maxWin *= two;
                    possiblePrize = maxWin;
                    max += five;
                    rand = Math.floor(min + Math.random() * (max + 1 - min));
                    continue;
                } else{
                    alert(`Thank you for your participation. Your prize is: ${totalPrize}$`);
                    mainQuestion = confirm('Do you want to play again?');
                    if(mainQuestion){
                        attempts = three;
                        possiblePrize = hundred;
                        totalPrize = zero;
                        max = five;
                        continue;
                    } else{
                        break;
                    }
                }
            } else if(attempts === zero){
                alert(`Thank you for your participation. Your prize is: ${totalPrize}$`);
                mainQuestion = confirm('Do you want to play again?');
                if(mainQuestion){
                    attempts = three;
                    possiblePrize = hundred;
                    totalPrize = zero;
                    max = five;
                    rand = Math.floor(min + Math.random() * (max + 1 - min));
                    continue;
                } else{
                    break;
                }
            }
            possiblePrize /= two;
        } 
    }
 }