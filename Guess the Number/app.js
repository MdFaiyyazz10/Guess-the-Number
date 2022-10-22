// 'use strict';

// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent = 'Correct Number ! 🥳🥳';

// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 10;

// document.querySelector('.guess').value = 23;


// console.log(document.querySelector('.guess').value);


// 'use strict';

// // let secretNumber = Math.trunc(Math.random() * 20) + 1;
// let secretNumber = Math.floor(Math.random() * 20) + 1;
// // document.querySelector('.number').textContent = secretNumber;
// // console.log(secretNumber);
// let score = 20;
// let highscore = 0;

// document.querySelector('.check').addEventListener('click', function() {
//     const guess = Number(document.querySelector('.guess').value);
//     console.log(guess, typeof guess);
    
//     // Guesss is empty
//     if(!guess){
//         document.querySelector('.message').textContent = '⛔⛔ No Number!';
//     }
//     // When player Win
//     else if (guess === secretNumber) {
//         document.querySelector('.message').textContent = 'Correct Number ! 🥳🥳';      
//         document.querySelector('body').style.backgroundColor = '#60b347';
//         document.querySelector('.number').style.width = '30rem';

//         document.querySelector('.number').textContent = secretNumber;
//         if(score > highscore) {
//             highscore = score;
//             document.querySelector('.highscore').textContent = highscore;
//         }

//     } else if(guess > secretNumber){
//         if(score > 1) {
//         document.querySelector('.message').textContent = '📈📈 Too High';
//         score--;
//         document.querySelector('.score').textContent = score;
//         } else {
//             document.querySelector('.message').textContent = 'You Lost the Game 💥💥';
//             score--;
//         document.querySelector('.score').textContent = 0;
//         }
//     } else if(guess < secretNumber){
//         if(score > 1) {
//             document.querySelector('.message').textContent = '📉📉 Too Low';
//             score--;
//             document.querySelector('.score').textContent = score;
//             } else {
//                 document.querySelector('.message').textContent = 'You Lost the Game 💥💥';
//                 score--;
//             document.querySelector('.score').textContent = 0;
//             }
            
//     }
// });

// document.querySelector('.again').addEventListener('click', function() {
//     score = 20;
//     secretNumber = Math.floor(Math.random() * 20) + 1;
//     document.querySelector('.message').textContent = 'Start guessing...';
//     document.querySelector('.score').textContent = score;
//     document.querySelector('.number').textContent = '?';
//     document.querySelector('.guess').value = '';

//     document.querySelector('body').style.backgroundColor = '#222';
//     document.querySelector('.number').style.width = '15rem';
// });



// refactoring the code or deleting the duplicate codes

'use strict';

let secretNumber = Math.floor(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

const displayMessage = function(message) {
    document.querySelector('.message').textContent = message;
}

document.querySelector('.check').addEventListener('click', function() {
    const guess = Number(document.querySelector('.guess').value);
    console.log(guess, typeof guess);

    if(!guess){
        displayMessage('⛔⛔ No Number!')
    }else if (guess === secretNumber) {
        displayMessage('Correct Number ! 🥳🥳');      
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rem';

        document.querySelector('.number').textContent = secretNumber;
        if(score > highscore) {
            highscore = score;
            document.querySelector('.highscore').textContent = highscore;
        }} else if(guess !== secretNumber){
        if(score > 1) {
            score--;
            displayMessage(guess > secretNumber ? '📈📈 Too High' : '📉📉 Too Low');
            document.querySelector('.score').textContent = score;
            } else {
                displayMessage('You Lost the Game 💥💥');
                score--;
            document.querySelector('.score').textContent = 0;
            }
    }
    
});

document.querySelector('.again').addEventListener('click', function() {
    score = 20;
    secretNumber = Math.floor(Math.random() * 20) + 1;
    displayMessage('Start guessing...');
    document.querySelector('.score').textContent = score;
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = '';

    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
});


// document.querySelector('.again').addEventListener('click', function() {
//     score = 20;
//     secretNumber = Math.floor(Math.random() * 20) + 1;
//     document.querySelector('.message').textContent = 'Start guessing...';
//     document.querySelector('.score').textContent = score;
//     document.querySelector('.number').textContent = '?';
//     document.querySelector('.guess').value = '';

//     document.querySelector('body').style.backgroundColor = '#222';
//     document.querySelector('.number').style.width = '15rem';
// });









// 'use strict';

// let secretNumber = Math.trunc(Math.random() * 20) + 1;

// document.querySelector('.check').addEventListener('click', function () {
//   const guess = Number(document.querySelector('.guess').value);
//   console.log(secretNumber, guess, typeof guess);

//   if (!guess) {
//     document.querySelector('.message').textContent = '⛔️ No number!';
//   } else if (guess === secretNumber) {
//     document.querySelector('.message').textContent = '🎉 Correct Number!';
//   } else if (guess > secretNumber) {
//     document.querySelector('.message').textContent = '📈 Too high!';
//   } else if (guess < secretNumber) {
//     document.querySelector('.message').textContent = '📉 Too low!';
//   }
// });