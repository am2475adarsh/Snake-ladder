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


let timeout = 0;

// dice roll
document.querySelector('.dice').addEventListener('click', function () {

    // clearTimeout(timeout);

    document.querySelector('.reset').addEventListener('click', function () { location.reload() });

    document.querySelector('.dice').style.backgroundColor = '#232031';
    document.querySelector('.dice').style.color = '#c8c8c8';

    // number generator
    const number = Math.trunc(Math.random() * 6) + 1;
    console.log(number, i);
    // document.write(number, i);
    document.getElementById('player-roll').innerHTML = "Player: " + `${i + 1}` + "<br>" + "Dice : " + number;

    // timeout = setTimeout(function () {
    //     document.getElementById('player-roll').innerHTML = "Player: " + `${i + 1}` + "<br>" + "Roll the dice";
    // },
    //     1300)


    if (number === 6) {
        // if player still  in lobby
        if (cell_count[i] === -1) {
            // move player to home
            cell_count[i] = 0;


        }
        else {

            if (cell_count[0] > -1) document.querySelector('.grid-item' + (cell_count[0] ? cell_count[0] : cell_count[0] + 1)).style.backgroundColor = '#757373';

            if (cell_count[1] > -1) document.querySelector('.grid-item' + (cell_count[1] ? cell_count[1] : cell_count[1] + 1)).style.backgroundColor = '#757373';

            if (cell_count[2] > -1) document.querySelector('.grid-item' + (cell_count[2] ? cell_count[2] : cell_count[2] + 1)).style.backgroundColor = '#757373';

            if (cell_count[3] > -1) document.querySelector('.grid-item' + (cell_count[3] ? cell_count[3] : cell_count[3] + 1)).style.backgroundColor = '#757373';



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



            if (cell_count[0] > -1) document.querySelector('.grid-item' + (cell_count[0] ? cell_count[0] : cell_count[0] + 1)).style.backgroundColor = '#757373';

            if (cell_count[1] > -1) document.querySelector('.grid-item' + (cell_count[1] ? cell_count[1] : cell_count[1] + 1)).style.backgroundColor = '#757373';

            if (cell_count[2] > -1) document.querySelector('.grid-item' + (cell_count[2] ? cell_count[2] : cell_count[2] + 1)).style.backgroundColor = '#757373';

            if (cell_count[3] > -1) document.querySelector('.grid-item' + (cell_count[3] ? cell_count[3] : cell_count[3] + 1)).style.backgroundColor = '#757373';


            // if player not in lobby and not six
            // if player reached 100th or not.
            cell_count[i] = cell_count[i] + number > 100 ? cell_count[i] : cell_count[i] + number;

            if (cell_count[0] > -1) document.querySelector('.grid-item' + (cell_count[0])).style.backgroundColor = '#60b347';


            if (cell_count[1] > -1) document.querySelector('.grid-item' + (cell_count[1])).style.backgroundColor = '#ff0000';


            if (cell_count[2] > -1) document.querySelector('.grid-item' + (cell_count[2])).style.backgroundColor = '#be0095';

            if (cell_count[3] > -1) document.querySelector('.grid-item' + (cell_count[3])).style.backgroundColor = '#d0df04';

            if (cell_count[0] > -1) document.querySelector('.grid-item' + (cell_count[0] ? cell_count[0] : cell_count[0] + 1)).style.backgroundColor = '#757373';

            if (cell_count[1] > -1) document.querySelector('.grid-item' + (cell_count[1] ? cell_count[1] : cell_count[1] + 1)).style.backgroundColor = '#757373';

            if (cell_count[2] > -1) document.querySelector('.grid-item' + (cell_count[2] ? cell_count[2] : cell_count[2] + 1)).style.backgroundColor = '#757373';

            if (cell_count[3] > -1) document.querySelector('.grid-item' + (cell_count[3] ? cell_count[3] : cell_count[3] + 1)).style.backgroundColor = '#757373';



            // SNAKE PART !!!!! ---------------------------------------------------

            // snake for 22 to 19.
            if (cell_count[i] === 22) {
                cell_count[i] = 19;
            }

            // snake for 17 to 3.
            if (cell_count[i] === 17) {
                cell_count[i] = 3;
            }

            // snake for 31 to 12.
            if (cell_count[i] === 31) {
                cell_count[i] = 12;
            }

            // snake for 35 to 14.
            if (cell_count[i] === 35) {
                cell_count[i] = 14;
            }

            // snake for 45 to 26
            if (cell_count[i] === 45) {
                cell_count[i] = 26;
            }

            // snake for 77 to 24.
            if (cell_count[i] === 77) {
                cell_count[i] = 24;
            }

            // snake for 58 to 40.
            if (cell_count[i] === 58) {
                cell_count[i] = 40;
            }

            // snake for 72 to 54.
            if (cell_count[i] === 72) {
                cell_count[i] = 54;
            }

            // snake for 95 to 66.
            if (cell_count[i] === 95) {
                cell_count[i] = 66;
            }

            // snake for 99 to 2. (The ultimate!)
            if (cell_count[i] === 99) {
                cell_count[i] = 2;
            }

            // LADDER PART !!!-------------------------------------------------------

            // ladder from 2 to 18.
            if (cell_count[i] === 3) {
                cell_count[i] = 18;
            }

            // ladder from 8 to 28.
            if (cell_count[i] === 8) {
                cell_count[i] = 28;
            }

            // ladder from 11 to 30.
            if (cell_count[i] === 11) {
                cell_count[i] = 30;
            }

            // ladder from 32 to 52.
            if (cell_count[i] === 32) {
                cell_count[i] = 52;
            }

            // ladder from 56 to 76.
            if (cell_count[i] === 56) {
                cell_count[i] = 76;
            }

            // ladder from 79 to 82.
            if (cell_count[i] === 79) {
                cell_count[i] = 82;
            }

            // ladder from 71 to 91.
            if (cell_count[i] === 71) {
                cell_count[i] = 91;
            }

            // ladder from 74 to 94.
            if (cell_count[i] === 74) {
                cell_count[i] = 94;
            }

            // Ladder end ---------------------------------------------------------


            if (cell_count[0] > -1) document.querySelector('.grid-item' + (cell_count[0] ? cell_count[0] : cell_count[0] + 1)).style.backgroundColor = '#757373';

            if (cell_count[1] > -1) document.querySelector('.grid-item' + (cell_count[1] ? cell_count[1] : cell_count[1] + 1)).style.backgroundColor = '#757373';

            if (cell_count[2] > -1) document.querySelector('.grid-item' + (cell_count[2] ? cell_count[2] : cell_count[2] + 1)).style.backgroundColor = '#757373';

            if (cell_count[3] > -1) document.querySelector('.grid-item' + (cell_count[3] ? cell_count[3] : cell_count[3] + 1)).style.backgroundColor = '#757373';


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