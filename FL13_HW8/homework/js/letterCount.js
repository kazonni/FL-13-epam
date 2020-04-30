let letterCount = (string, letter) => (letter === '') ? 0 : string.toLowerCase().split(letter).length - 1;

letterCount('Maggy', 'g');