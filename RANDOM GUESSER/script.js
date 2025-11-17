function Guess() {
    let input = document.querySelector(".input");
    let output = document.querySelector(".output");
    let levels = document.getElementById("levels");

    if (input.value.trim() === "" || isNaN(input.value)) {
        return output.innerHTML = `<h4 class="bg-danger text-white p-1 mt-3">This field is necessary or enter a valid number</h4>`;
    }
    
    let ranNum;
    let message;
    switch(levels.value) {
        case "level1":
            ranNum = 10;
            message = `You guessed the number`;
            break;
        case "level2":
            ranNum = 20;
            message = `Amazing! You are one of the 5% who guessed the number`;
            break;
        case "level3":
            ranNum = 30;
            message = `Wow! You are one of the 3.3% who guessed the number`;
            break;
        case "level4":
            ranNum = 40;
            message = `Are you a magician? You are one of the 2.5% who guessed the number`;
            break;
        case "level5":
            ranNum = 50;
            message = `God mode! You are one of the 2% who guessed the number`;
            break;
        default:
            ranNum = 10;
            message = `You guessed the number`;
    }

    let randomNum = Math.floor(Math.random() * ranNum) + 1;
    if (parseInt(input.value) === randomNum) {
        output.innerHTML = `<h4 class="text-white p-1 mt-3 bg-success">${message} ${randomNum} right!</h4>`;
    } else {
        output.innerHTML = `<h4 class="text-white p-1 mt-3 bg-danger">Wrong guess, Try again... The number was ${randomNum}</h4>`;
    }
}
