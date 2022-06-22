function oneThroughTwenty() {
    let meuRetorno = [];
    for (let counter = 1; counter <= 20; counter++) {
        meuRetorno.push(counter)
    }
    return meuRetorno;
}
console.log(oneThroughTwenty());

function evensToTwenty() {
    let meuRetorno = [];
    for (let counter = 2; counter <= 20; counter +=2) {
        meuRetorno.push(counter)
    }
    return meuRetorno;
}
console.log(evensToTwenty());

function oddsToTwenty() {
    let meuRetorno = [];
    for (let counter = 1; counter <= 20; counter +=2) {
        meuRetorno.push(counter)
    }
    return meuRetorno;
}
console.log(oddsToTwenty());

function multiplesOfFive () {
    let meuRetorno = [];
    for (let counter = 5; counter <= 100; counter +=5) {
        meuRetorno.push(counter)
    }
    return meuRetorno;
}
console.log(multiplesOfFive ());

function countingBackwards  () {
    let meuRetorno = [];
    for (let counter = 20; counter >= 1; counter -=1) {
        meuRetorno.push(counter)
    }
    return meuRetorno;
}
console.log(countingBackwards  ());

function evenNumbersBackwards  () {
    let meuRetorno = [];
    for (let counter = 20; counter >= 1; counter -=2) {
        meuRetorno.push(counter)
    }
    return meuRetorno;
}
console.log(evenNumbersBackwards  ());

function oddNumbersBackwards () {
    let meuRetorno = []
    for (let counter = 19; counter >= 1; counter -=2) {
        meuRetorno.push(counter)
    }
    return meuRetorno;
}
console.log(oddNumbersBackwards ())

function multiplesOfFiveBackwards () {
    let meuRetorno = []
    for (let counter = 100; counter >= 1; counter -=5) {
        meuRetorno.push(counter)
    }
    return meuRetorno
}
console.log(multiplesOfFiveBackwards ())
