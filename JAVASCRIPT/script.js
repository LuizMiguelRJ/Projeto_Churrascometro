let inputAdults = document.getElementById('adult');
let inputChilds = document.getElementById('child');
let inputDuration = document.getElementById('duration');
let inputResult = document.getElementById('result');
let h1 = document.getElementById('h1');
let button = document.getElementById('button');

function calc() {

    let adults = inputAdults.value;
    let childs = inputChilds.value;
    let duration = inputDuration.value;

    let qntBeef =
        adults * beefPP(duration) +
        (beefPP(duration) / 2) * childs;
    let qntBeer = adults * beerPP(duration);
    let qntDrinks =
        adults * drinksPP(duration) +
        (drinksPP(duration) / 2) * childs;

    console.log(qntDrinks, qntBeef, qntBeer);


    h1.innerHTML = `<h1> <img style='width: 40px' src='./IMAGES/ICONS/beaf.png'> 
    ${qntBeef / 1000} Kg de carne</h1>`;
    h1.innerHTML += `<h1> <img style='width: 40px' src='./IMAGES/ICONS/beer.png'> 
    ${Math.ceil(qntBeer / 355)} lata(s) de cerveja</h1>`;
    h1.innerHTML += `<h1> <img style='width: 40px' src='./IMAGES/ICONS/soda.png'> 
    ${Math.ceil(qntDrinks / 2000)} garrafas de bebida(s)</h1>`;

    inputAdults.style.display = 'none';
    inputChilds.style.display = 'none';
    inputDuration.style.display = 'none';
    button.style.display = 'none';


}

function beefPP(duration) {
    if (duration >= 6) {
        return 650;
    } else {
        return 400;
    }
}

function beerPP(duration) {
    if (duration >= 6) {
        return 2000;
    } else {
        return 1200;
    }
}

function drinksPP(duration) {
    if (duration >= 6) {
        return 1500;
    } else {
        return 1000;
    }
}