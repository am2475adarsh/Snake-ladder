// 'use strict';
let players = ["player_1", "player_2", "player_3", "player_4"];
let cell_count = [-1, -1, -1, -1];
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


        }
        else {

            if (cell_count[0] > -1) document.querySelector('.grid-item' + (cell_count[0] ? cell_count[0] : cell_count[0] + 1)).style.backgroundColor = '#0000ff';

            if (cell_count[1] > -1) document.querySelector('.grid-item' + (cell_count[1] ? cell_count[1] : cell_count[1] + 1)).style.backgroundColor = '#0000ff';

            if (cell_count[2] > -1) document.querySelector('.grid-item' + (cell_count[2] ? cell_count[2] : cell_count[2] + 1)).style.backgroundColor = '#0000ff';

            if (cell_count[3] > -1) document.querySelector('.grid-item' + (cell_count[3] ? cell_count[3] : cell_count[3] + 1)).style.backgroundColor = '#0000ff';



            // if player not in lobby
            // cell_count[i] = cell_count[i] + 6;
            cell_count[i] = cell_count[i] + 6 > 100 ? cell_count[i] : cell_count[i] + 6;


            if (cell_count[0] > -1) document.querySelector('.grid-item' + (cell_count[0])).style.backgroundColor = '#60b347';


            if (cell_count[1] > -1) document.querySelector('.grid-item' + (cell_count[1])).style.backgroundColor = '#ff0000';


            if (cell_count[2] > -1) document.querySelector('.grid-item' + (cell_count[2])).style.backgroundColor = '#be0095';

            if (cell_count[3] > -1) document.querySelector('.grid-item' + (cell_count[3])).style.backgroundColor = '#d0df04';

            if (cell_count[i] == 100) {
                alert(`Game Over hehe!
${i + 1} Won`);
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

            if (cell_count[0] > -1) document.querySelector('.grid-item' + (cell_count[0] ? cell_count[0] : cell_count[0] + 1)).style.backgroundColor = '#0000ff';

            if (cell_count[1] > -1) document.querySelector('.grid-item' + (cell_count[1] ? cell_count[1] : cell_count[1] + 1)).style.backgroundColor = '#0000ff';

            if (cell_count[2] > -1) document.querySelector('.grid-item' + (cell_count[2] ? cell_count[2] : cell_count[2] + 1)).style.backgroundColor = '#0000ff';

            if (cell_count[3] > -1) document.querySelector('.grid-item' + (cell_count[3] ? cell_count[3] : cell_count[3] + 1)).style.backgroundColor = '#0000ff';


            // if player not in lobby and not six
            // cell_count[i] = cell_count[i] + number;
            cell_count[i] = cell_count[i] + number > 100 ? cell_count[i] : cell_count[i] + number;
            // console.log('.grid-item grid-item' + (cell_count[i]));


            if (cell_count[0] > -1) document.querySelector('.grid-item' + (cell_count[0])).style.backgroundColor = '#60b347';


            if (cell_count[1] > -1) document.querySelector('.grid-item' + (cell_count[1])).style.backgroundColor = '#ff0000';


            if (cell_count[2] > -1) document.querySelector('.grid-item' + (cell_count[2])).style.backgroundColor = '#be0095';

            if (cell_count[3] > -1) document.querySelector('.grid-item' + (cell_count[3])).style.backgroundColor = '#d0df04';


            if (cell_count[i] == 100) {
                alert(`Game Over hehe!
${i + 1} Won`);
            }
        }

        i = (++i) % 4;

    }

    console.log(cell_count);
})
