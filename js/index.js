let teslaX = {};
teslaX.make = 'Tesla';
teslaX.model = 'X';
teslaX.price = 90000;

console.log(teslaX.price);

teslaX.beep = function() {
    console.log('Tesla X beep-beep!');
}

teslaX.beep();

let volkswagenAtlas = {
    make: 'Volkswagen',
    model: 'Atlas',
    price: 35000,
    beep: function() {
        console.log('Volkswagen Atlas beep-beep!');
    }
};

volkswagenAtlas.beep();