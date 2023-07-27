const squareInput = document.querySelector('#square__input');
const squareRange = document.querySelector('#square__range');
const totalPrice = document.querySelector('#total-price');
const inputs = document.querySelectorAll('input');

const inputType = document.querySelectorAll('input[name="type"]');
const inputHouse = document.querySelectorAll('input[name="house"]');
const inputRooms = document.querySelectorAll('input[name="rooms"]');

const ceiling = document.querySelector('input[name="ceiling"]');
const walls = document.querySelector('input[name="walls"]');
const floor = document.querySelector('input[name="floor"]');

let basePrice = 7000;

squareInput.addEventListener('input', getCountOfInput);
squareRange.addEventListener('input', getCountOfRange);

function getCountOfInput(e) {
    const value = e.target.value;
    squareRange.value = value;

    calculate()
}

function getCountOfRange(e) {
    const value = e.target.value;
    squareInput.value = value;

    calculate()
}

function calculate() {
    let totalCount = basePrice * squareRange.value;

    for(const input of inputType) {
        if(input.checked) {
            totalCount *= parseFloat(input.value);
        }
    }
    
    for(const input of inputHouse) {
        if(input.checked) {
            totalCount *= parseFloat(input.value);
        }
    }

    for(const input of inputRooms) {
        if(input.checked) {
            totalCount *= parseFloat(input.value);
        }
    }

    if(ceiling.checked) {
        totalCount = totalCount + parseFloat(ceiling.value) * squareInput.value
    }

    if(walls.checked) {
        totalCount = totalCount * parseFloat(walls.value)
    }

    if(floor.checked) {
        totalCount = totalCount * parseFloat(floor.value)
    }
    

    const formatter = new Intl.NumberFormat('ru');
    totalPrice.innerHTML = formatter.format(totalCount);
}
calculate()

for (const input of inputs) {
    input.addEventListener('input', (e) => {
        calculate()
    });
}



