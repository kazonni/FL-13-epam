let word = prompt('Enter your word: ');
let even = 2;
let middle;
if(word === null || word.trim() === ''){
    alert('Invalid value');
} else{
    middle = Math.floor(word.length / even);
    if(word.length % even === 0){
        alert(word.slice(middle - 1, middle + 1));
    } else{
        alert(word[middle]);
    }
}

