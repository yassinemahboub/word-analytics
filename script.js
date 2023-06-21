const textareaEl = document.querySelector('.textarea');
const charactersNumberEl = document.querySelector('.stat__number--characters');
const twitterNumberEl = document.querySelector('.stat__number--twitter');
const facebookNumberEl = document.querySelector('.stat__number--facebook');
const wordsNumberEl = document.querySelector('.stat__number--words');

textareaEl.addEventListener('input', function () {
    // example of input validation
    if (textareaEl.value.includes('<script>')) {
        alert('You can\'t use that');
        textareaEl.value = textareaEl.value.replace('<script>', '');
    }
    
    // determine new number 
    let numberOfWords =textareaEl.value.split(' ').length;
    if (textareaEl.value.length === 0) {
        numberOfWords = 0;
    }
    const numberOfCharacters = textareaEl.value.length;
    const twitterCharactersLeft = 280 - numberOfCharacters;
    const facebookCharactersLeft = 2200 - numberOfCharacters;
    //set new numbers
    charactersNumberEl.textContent = numberOfCharacters;
    twitterNumberEl.textContent = twitterCharactersLeft;
    facebookNumberEl.textContent = facebookCharactersLeft;
    wordsNumberEl.textContent = numberOfWords;
    // add visual indicator
    if (twitterCharactersLeft < 0) {
       twitterNumberEl.classList.add('stat__number--limit');
    } else {
        twitterNumberEl.classList.remove('stat__number--limit');
    }
    if (facebookCharactersLeft < 0) {
        facebookNumberEl.classList.add('stat__number--limit');
     } else {
        facebookNumberEl.classList.remove('stat__number--limit');
     }
})