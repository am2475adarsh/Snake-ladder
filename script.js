'use strict';
let players = ["player_1", "player_2", "player_3", "player_4"];
let cell_count = [-1, -1, -1, -1];
let six_case = 0;
console.log(cell_count);
let i = 0;

// Kaafi kaam ki cheez hehe 
// document.addEventListener('DOMContentLoaded', function () {
//     for (let j = 1; j <= 100; j++) {
//         let div = document.createElement("div");
//         div.className = "grid-item grid-item" + j;
//         document.querySelector('.grid-container').appendChild(div);
//     }
// })


// start the game fr
document.querySelector('.start').addEventListener('click', function () {
    document.querySelector('.start').style.backgroundColor = '#60b347';

    // dice roll
    document.querySelector('.dice').addEventListener('click', function () {
        document.querySelector('.dice').style.backgroundColor = '#c7600c';

        // number generator
        const number = Math.trunc(Math.random() * 6) + 1;
        console.log(number, i);

        if (number === 6) {
            // if player still  in lobby
            if (cell_count[i] === -1) {

                // move player to home
                cell_count[i] = 0;
                six_case = cell_count[i];

            }
            else {
                // if player not in lobby
                cell_count[i] = cell_count[i] + 6;
                if (cell_count[i] == 100) {
                    alert("Game Over hehe!");
                }
            }
            // We'll only need to increment i value if the player didn't get 6 cause if its a 6 he needs to repeat the value till the number is not = 6 
        }

        // If we didn't get 6 in dice roll.
        if (number != 6) {

            // if player in lobby and not six
            if (cell_count[i] === -1) {
                cell_count[i] = -1;
            }
            else {

                // if player not in lobby and not six
                cell_count[i] = cell_count[i] + number;
                if (cell_count[i] == 100) {
                    alert("Game Over hehe!");
                }
            }

            i = (++i) % 4;

        }

        console.log(cell_count);
    })

})