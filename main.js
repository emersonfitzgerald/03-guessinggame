//document.getElementById('company').innerHTML = "Joe's Bed and Breakfast";

// document.querySelector('#game').innerText = "Guessing Game";

// document.querySelector('header > h2').innerText = "Loops";

//pick a random number between 0 and 16

let correctNumber = Math.floor(Math.random() * 15 + 1)

console.log(`The correctNumber is ${correctNumber}`)

let guessed = false

let totalGuesses = 0

let gamerGuess = 0

// correctNumber +=

function evalGuess() {
    totalGuesses += 1 // totalGuesses = totalGuesses + 1
    gamerGuess = document.querySelector('#guess').value

    console.log(totalGuesses, gamerGuess)

    const feedback = document.querySelector('#feedback')

    if (gamerGuess == correctNumber) {
        console.log(`gamerGuess is equal to correctNumber`)
        feedback.innerText = 'You win!'
        giveAward()
    } else if (gamerGuess > correctNumber && gamerGuess < 16) {
        feedback.innerText = 'too high, please try again'
    } else if (gamerGuess < correctNumber && gamerGuess > 0) {
        feedback.innerText = 'too low, please try again'
    } else {
        feedback.innerText = 'Please choose a number between 1 and 15 and try again'
        totalGuesses -= 1
    }
        document.querySelector('#attempts').innerText = totalGuesses

       
}

function giveAward() {
    console.log('Congratulations!')
    let imagePath = '#'
    switch(totalGuesses) {
        case 1:
        case 2:
        case 3: 
            imagePath = 'images/blue.png'
            break;
        case 4: 
        case 5:
        case 6: 
            imagePath = 'images/red.png'
        break;
        default: 
            imagePath = 'images/yellow.jpeg'
    }

    const awardImage = document.createElement('img') //Creates an 'img'
    awardImage.setAttribute('src', imagePath)


    const ribbon = document.querySelector('#ribbon')

    ribbon.appendChild(awardImage)

    document.getElementById('buttonId').setAttribute("disabled", "disabled");

    // only append child if the ribbon element does not have any child nodes yet 
}


// function disableIt() {
//     if (giveAward() == true)
//       document.getElementById('guess').disabled = true;
//       variable button = document.createElement("div")
//       document.button.appendChild(div);
// }


// document.getElementById("evalGuess").disabled = true;