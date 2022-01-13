'use strict';

const button_check_btn = document.querySelector('.btn.check');
const input_guess = document.querySelector('.guess');
const p_message = document.querySelector('.message');
const span_score = document.querySelector('.score');
const button_btn_again = document.querySelector('.btn.again');
const body = document.querySelector('body');
const div_number = document.querySelector('.number');
const span_highscore = document.querySelector('.highscore');

let answer,
    score = 20,
    highscore = 0;

span_highscore.textContent = highscore;

/**
 * Function to set random number
 */
function setRandomNumber() {
    answer = Math.floor(Math.random() * 20) + 1;
}

/**
 * Function to reset all the style
 */
function reset() {
    setRandomNumber();
    body.style.backgroundColor = '#222';
    score = 20;
    span_score.textContent = score;
    div_number.style.width = '15rem';
    p_message.textContent = 'Start guessing...';
    div_number.textContent = '?';
    input_guess.value = '';
}

button_check_btn.addEventListener('click', () => {
    const value = Number(input_guess.value);
    if (!value) {
        p_message.textContent = '🤬 Not a number';
    } else if (value == answer && score > 0) {
        p_message.textContent = 'Correct Answer';
        body.style.backgroundColor = '#60b347';
        div_number.style.width = '35rem';
        div_number.textContent = answer;
        if (score > highscore) {
            highscore = score;
            span_highscore.textContent = highscore;
        }
    } else {
        if (score > 0) {
            p_message.textContent = value > answer ? '📈Too High' : '📉Too Low';
            --score;
        }
        if (score == 0) {
            p_message.textContent = '😭You Lost';
        }
        span_score.textContent = score;
    }
});

button_btn_again.addEventListener('click', reset);

setRandomNumber();
