const rowElement = document.querySelector('.row')

for (let i = 1; i <= 100; i++){
    let colItem;

    if (i % 3 == 0 && i % 5 == 0){
        console.log('FizzBuzz');
        colItem = `<div class="col bg_red">FizzBuzz</div>`
    } else if (i % 3 == 0){
        console.log('Fizz');
        colItem = `<div class="col bg_green">Fizz</div>`
    } else if (i % 5 == 0){
        console.log('Buzz');
        colItem = `<div class="col bg_yellow">Buzz</div>`
    } else {
        console.log(i);
        colItem = `<div class="col">${i}</div>`
    }
    
    rowElement.insertAdjacentHTML('beforeend',colItem)
}