// 'use strict';
let players = ["player_1", "player_2", "player_3", "player_4"];
let cell_count = [-1, -1, -1, -1];
console.log(cell_count);
let i = 0;

// Kaafi kaam ki cheez hehe 

// ladder ka script.
document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('ladder').setAttribute('x1', document.querySelector('.grid-item18').getBoundingClientRect().left + 10);
    document.getElementById('ladder').setAttribute('y1', document.querySelector('.grid-item18').getBoundingClientRect().top + 20);
    document.getElementById('ladder').setAttribute('x2', document.querySelector('.grid-item3').getBoundingClientRect().left + 10);
    document.getElementById('ladder').setAttribute('y2', document.querySelector('.grid-item3').getBoundingClientRect().top + 20);

    document.getElementById('ladder1').setAttribute('x1', document.querySelector('.grid-item18').getBoundingClientRect().left + 35);
    document.getElementById('ladder1').setAttribute('y1', document.querySelector('.grid-item18').getBoundingClientRect().top + 20);
    document.getElementById('ladder1').setAttribute('x2', document.querySelector('.grid-item3').getBoundingClientRect().left + 35);
    document.getElementById('ladder1').setAttribute('y2', document.querySelector('.grid-item3').getBoundingClientRect().top + 20);

    document.getElementById('ladder1_line1').setAttribute('x1', document.querySelector('.grid-item18').getBoundingClientRect().left + 10);
    document.getElementById('ladder1_line1').setAttribute('y1', document.querySelector('.grid-item18').getBoundingClientRect().top + 30);
    document.getElementById('ladder1_line1').setAttribute('x2', document.querySelector('.grid-item18').getBoundingClientRect().left + 35);
    document.getElementById('ladder1_line1').setAttribute('y2', document.querySelector('.grid-item18').getBoundingClientRect().top + 30);

    document.getElementById('ladder1_line2').setAttribute('x1', document.querySelector('.grid-item3').getBoundingClientRect().left + 10);
    document.getElementById('ladder1_line2').setAttribute('y1', document.querySelector('.grid-item3').getBoundingClientRect().top + 10);
    document.getElementById('ladder1_line2').setAttribute('x2', document.querySelector('.grid-item3').getBoundingClientRect().left + 35);
    document.getElementById('ladder1_line2').setAttribute('y2', document.querySelector('.grid-item3').getBoundingClientRect().top + 10);

    // for 8 - 28

    document.getElementById('ladder_2').setAttribute('x1', document.querySelector('.grid-item28').getBoundingClientRect().left + 10);
    document.getElementById('ladder_2').setAttribute('y1', document.querySelector('.grid-item28').getBoundingClientRect().top + 20);
    document.getElementById('ladder_2').setAttribute('x2', document.querySelector('.grid-item8').getBoundingClientRect().left + 10);
    document.getElementById('ladder_2').setAttribute('y2', document.querySelector('.grid-item8').getBoundingClientRect().top + 20);

    document.getElementById('ladder2').setAttribute('x1', document.querySelector('.grid-item28').getBoundingClientRect().left + 35);
    document.getElementById('ladder2').setAttribute('y1', document.querySelector('.grid-item28').getBoundingClientRect().top + 20);
    document.getElementById('ladder2').setAttribute('x2', document.querySelector('.grid-item8').getBoundingClientRect().left + 35);
    document.getElementById('ladder2').setAttribute('y2', document.querySelector('.grid-item8').getBoundingClientRect().top + 20);

    document.getElementById('ladder2_line1').setAttribute('x1', document.querySelector('.grid-item28').getBoundingClientRect().left + 10);
    document.getElementById('ladder2_line1').setAttribute('y1', document.querySelector('.grid-item28').getBoundingClientRect().top + 30);
    document.getElementById('ladder2_line1').setAttribute('x2', document.querySelector('.grid-item28').getBoundingClientRect().left + 35);
    document.getElementById('ladder2_line1').setAttribute('y2', document.querySelector('.grid-item28').getBoundingClientRect().top + 30);

    document.getElementById('ladder2_line2').setAttribute('x1', document.querySelector('.grid-item8').getBoundingClientRect().left + 10);
    document.getElementById('ladder2_line2').setAttribute('y1', document.querySelector('.grid-item8').getBoundingClientRect().top + 10);
    document.getElementById('ladder2_line2').setAttribute('x2', document.querySelector('.grid-item8').getBoundingClientRect().left + 35);
    document.getElementById('ladder2_line2').setAttribute('y2', document.querySelector('.grid-item8').getBoundingClientRect().top + 10);

    // for 11-30.

    document.getElementById('ladder_3').setAttribute('x1', document.querySelector('.grid-item30').getBoundingClientRect().left + 10);
    document.getElementById('ladder_3').setAttribute('y1', document.querySelector('.grid-item30').getBoundingClientRect().top + 20);
    document.getElementById('ladder_3').setAttribute('x2', document.querySelector('.grid-item11').getBoundingClientRect().left + 10);
    document.getElementById('ladder_3').setAttribute('y2', document.querySelector('.grid-item11').getBoundingClientRect().top + 20);

    document.getElementById('ladder3').setAttribute('x1', document.querySelector('.grid-item30').getBoundingClientRect().left + 35);
    document.getElementById('ladder3').setAttribute('y1', document.querySelector('.grid-item30').getBoundingClientRect().top + 20);
    document.getElementById('ladder3').setAttribute('x2', document.querySelector('.grid-item11').getBoundingClientRect().left + 35);
    document.getElementById('ladder3').setAttribute('y2', document.querySelector('.grid-item11').getBoundingClientRect().top + 20);

    document.getElementById('ladder3_line1').setAttribute('x1', document.querySelector('.grid-item30').getBoundingClientRect().left + 10);
    document.getElementById('ladder3_line1').setAttribute('y1', document.querySelector('.grid-item30').getBoundingClientRect().top + 30);
    document.getElementById('ladder3_line1').setAttribute('x2', document.querySelector('.grid-item30').getBoundingClientRect().left + 35);
    document.getElementById('ladder3_line1').setAttribute('y2', document.querySelector('.grid-item30').getBoundingClientRect().top + 30);

    document.getElementById('ladder3_line2').setAttribute('x1', document.querySelector('.grid-item11').getBoundingClientRect().left + 10);
    document.getElementById('ladder3_line2').setAttribute('y1', document.querySelector('.grid-item11').getBoundingClientRect().top + 10);
    document.getElementById('ladder3_line2').setAttribute('x2', document.querySelector('.grid-item11').getBoundingClientRect().left + 35);
    document.getElementById('ladder3_line2').setAttribute('y2', document.querySelector('.grid-item11').getBoundingClientRect().top + 10);


    // for 32-52.
    document.getElementById('ladder_4').setAttribute('x1', document.querySelector('.grid-item52').getBoundingClientRect().left + 10);
    document.getElementById('ladder_4').setAttribute('y1', document.querySelector('.grid-item52').getBoundingClientRect().top + 20);
    document.getElementById('ladder_4').setAttribute('x2', document.querySelector('.grid-item32').getBoundingClientRect().left + 10);
    document.getElementById('ladder_4').setAttribute('y2', document.querySelector('.grid-item32').getBoundingClientRect().top + 20);

    document.getElementById('ladder4').setAttribute('x1', document.querySelector('.grid-item52').getBoundingClientRect().left + 35);
    document.getElementById('ladder4').setAttribute('y1', document.querySelector('.grid-item52').getBoundingClientRect().top + 20);
    document.getElementById('ladder4').setAttribute('x2', document.querySelector('.grid-item32').getBoundingClientRect().left + 35);
    document.getElementById('ladder4').setAttribute('y2', document.querySelector('.grid-item32').getBoundingClientRect().top + 20);

    document.getElementById('ladder4_line1').setAttribute('x1', document.querySelector('.grid-item52').getBoundingClientRect().left + 10);
    document.getElementById('ladder4_line1').setAttribute('y1', document.querySelector('.grid-item52').getBoundingClientRect().top + 30);
    document.getElementById('ladder4_line1').setAttribute('x2', document.querySelector('.grid-item52').getBoundingClientRect().left + 35);
    document.getElementById('ladder4_line1').setAttribute('y2', document.querySelector('.grid-item52').getBoundingClientRect().top + 30);

    document.getElementById('ladder4_line2').setAttribute('x1', document.querySelector('.grid-item32').getBoundingClientRect().left + 10);
    document.getElementById('ladder4_line2').setAttribute('y1', document.querySelector('.grid-item32').getBoundingClientRect().top + 10);
    document.getElementById('ladder4_line2').setAttribute('x2', document.querySelector('.grid-item32').getBoundingClientRect().left + 35);
    document.getElementById('ladder4_line2').setAttribute('y2', document.querySelector('.grid-item32').getBoundingClientRect().top + 10);


    // for 56-76.
    document.getElementById('ladder_5').setAttribute('x1', document.querySelector('.grid-item76').getBoundingClientRect().left + 10);
    document.getElementById('ladder_5').setAttribute('y1', document.querySelector('.grid-item76').getBoundingClientRect().top + 20);
    document.getElementById('ladder_5').setAttribute('x2', document.querySelector('.grid-item56').getBoundingClientRect().left + 10);
    document.getElementById('ladder_5').setAttribute('y2', document.querySelector('.grid-item56').getBoundingClientRect().top + 20);

    document.getElementById('ladder5').setAttribute('x1', document.querySelector('.grid-item76').getBoundingClientRect().left + 35);
    document.getElementById('ladder5').setAttribute('y1', document.querySelector('.grid-item76').getBoundingClientRect().top + 20);
    document.getElementById('ladder5').setAttribute('x2', document.querySelector('.grid-item56').getBoundingClientRect().left + 35);
    document.getElementById('ladder5').setAttribute('y2', document.querySelector('.grid-item56').getBoundingClientRect().top + 20);

    document.getElementById('ladder5_line1').setAttribute('x1', document.querySelector('.grid-item76').getBoundingClientRect().left + 10);
    document.getElementById('ladder5_line1').setAttribute('y1', document.querySelector('.grid-item76').getBoundingClientRect().top + 30);
    document.getElementById('ladder5_line1').setAttribute('x2', document.querySelector('.grid-item76').getBoundingClientRect().left + 35);
    document.getElementById('ladder5_line1').setAttribute('y2', document.querySelector('.grid-item76').getBoundingClientRect().top + 30);

    document.getElementById('ladder5_line2').setAttribute('x1', document.querySelector('.grid-item56').getBoundingClientRect().left + 10);
    document.getElementById('ladder5_line2').setAttribute('y1', document.querySelector('.grid-item56').getBoundingClientRect().top + 10);
    document.getElementById('ladder5_line2').setAttribute('x2', document.querySelector('.grid-item56').getBoundingClientRect().left + 35);
    document.getElementById('ladder5_line2').setAttribute('y2', document.querySelector('.grid-item56').getBoundingClientRect().top + 10);

    // for 71-91.
    document.getElementById('ladder_6').setAttribute('x1', document.querySelector('.grid-item91').getBoundingClientRect().left + 10);
    document.getElementById('ladder_6').setAttribute('y1', document.querySelector('.grid-item91').getBoundingClientRect().top + 20);
    document.getElementById('ladder_6').setAttribute('x2', document.querySelector('.grid-item71').getBoundingClientRect().left + 10);
    document.getElementById('ladder_6').setAttribute('y2', document.querySelector('.grid-item71').getBoundingClientRect().top + 20);

    document.getElementById('ladder6').setAttribute('x1', document.querySelector('.grid-item91').getBoundingClientRect().left + 35);
    document.getElementById('ladder6').setAttribute('y1', document.querySelector('.grid-item91').getBoundingClientRect().top + 20);
    document.getElementById('ladder6').setAttribute('x2', document.querySelector('.grid-item71').getBoundingClientRect().left + 35);
    document.getElementById('ladder6').setAttribute('y2', document.querySelector('.grid-item71').getBoundingClientRect().top + 20);

    document.getElementById('ladder6_line1').setAttribute('x1', document.querySelector('.grid-item91').getBoundingClientRect().left + 10);
    document.getElementById('ladder6_line1').setAttribute('y1', document.querySelector('.grid-item91').getBoundingClientRect().top + 30);
    document.getElementById('ladder6_line1').setAttribute('x2', document.querySelector('.grid-item91').getBoundingClientRect().left + 35);
    document.getElementById('ladder6_line1').setAttribute('y2', document.querySelector('.grid-item91').getBoundingClientRect().top + 30);

    document.getElementById('ladder6_line2').setAttribute('x1', document.querySelector('.grid-item71').getBoundingClientRect().left + 10);
    document.getElementById('ladder6_line2').setAttribute('y1', document.querySelector('.grid-item71').getBoundingClientRect().top + 10);
    document.getElementById('ladder6_line2').setAttribute('x2', document.querySelector('.grid-item71').getBoundingClientRect().left + 35);
    document.getElementById('ladder6_line2').setAttribute('y2', document.querySelector('.grid-item71').getBoundingClientRect().top + 10);

    // for 79-82.
    document.getElementById('ladder_7').setAttribute('x1', document.querySelector('.grid-item82').getBoundingClientRect().left + 10);
    document.getElementById('ladder_7').setAttribute('y1', document.querySelector('.grid-item82').getBoundingClientRect().top + 20);
    document.getElementById('ladder_7').setAttribute('x2', document.querySelector('.grid-item79').getBoundingClientRect().left + 10);
    document.getElementById('ladder_7').setAttribute('y2', document.querySelector('.grid-item79').getBoundingClientRect().top + 20);

    document.getElementById('ladder7').setAttribute('x1', document.querySelector('.grid-item82').getBoundingClientRect().left + 35);
    document.getElementById('ladder7').setAttribute('y1', document.querySelector('.grid-item82').getBoundingClientRect().top + 20);
    document.getElementById('ladder7').setAttribute('x2', document.querySelector('.grid-item79').getBoundingClientRect().left + 35);
    document.getElementById('ladder7').setAttribute('y2', document.querySelector('.grid-item79').getBoundingClientRect().top + 20);

    document.getElementById('ladder7_line1').setAttribute('x1', document.querySelector('.grid-item82').getBoundingClientRect().left + 10);
    document.getElementById('ladder7_line1').setAttribute('y1', document.querySelector('.grid-item82').getBoundingClientRect().top + 30);
    document.getElementById('ladder7_line1').setAttribute('x2', document.querySelector('.grid-item82').getBoundingClientRect().left + 35);
    document.getElementById('ladder7_line1').setAttribute('y2', document.querySelector('.grid-item82').getBoundingClientRect().top + 30);

    document.getElementById('ladder7_line2').setAttribute('x1', document.querySelector('.grid-item79').getBoundingClientRect().left + 10);
    document.getElementById('ladder7_line2').setAttribute('y1', document.querySelector('.grid-item79').getBoundingClientRect().top + 10);
    document.getElementById('ladder7_line2').setAttribute('x2', document.querySelector('.grid-item79').getBoundingClientRect().left + 35);
    document.getElementById('ladder7_line2').setAttribute('y2', document.querySelector('.grid-item79').getBoundingClientRect().top + 10);



})

//     for (let j = 1; j <= 100; j++) {
//         let div = document.createElement("div");
//         div.className = "grid-item grid-item" + j;
//         document.querySelector('.grid-container').appendChild(div);
//     }
// })

// Two player conincide waali galti.


let timeout = 0;

// dice roll
document.querySelector('.dice').addEventListener('click', function () {

    // for delaying players turn.
    // disabling.
    document.querySelector('.dice').disabled = true;

    clearTimeout(timeout);

    // reset on click
    document.querySelector('.reset').addEventListener('click', function () { location.reload() });

    // dice css.
    document.querySelector('.dice').style.backgroundColor = '#232031';
    document.querySelector('.dice').style.color = '#c8c8c8';

    // number generator
    const number = Math.trunc(Math.random() * 6) + 1;
    console.log(number, i);


    // showing players turn and dice outcome.
    document.getElementById('player-roll').innerHTML = "Player: " + `${i + 1}` + "<br>" + "Dice : " + number;

    // showing players turn.
    timeout = setTimeout(function () {
        document.getElementById('player-roll').innerHTML = "Player: " + `${i + 1}` + "<br>" + "Roll the dice";

        // enabling the dice button.
        document.querySelector('.dice').disabled = false;
    },
        1000)


    // if dice value is 6
    if (number === 6) {
        // if player still  in lobby
        if (cell_count[i] === -1) {
            // move player to home
            cell_count[i] = 0;
            add_color();
        }
        else {

            remove_color();


            let yeh = cell_count[i];
            let arr = [];
            // if player not in lobby
            // if player reached 100th or incrementing value.
            cell_count[i] = cell_count[i] + 6 > 100 ? cell_count[i] : cell_count[i] + 6;


            // for the trail orange line.
            for (let k = yeh; k < cell_count[i]; k++) {

                if (cell_count[i] > -1) document.querySelector('.grid-item' + (k ? k : k + 1)).style.backgroundColor = 'orange';

                arr.push(k);
            }

            // for putting back orange to grey.
            let yo = setInterval(function () {
                if (arr.length == 0) clearInterval(yo);
                let position = arr.shift();

                // for changing back color and checking of element overlapping another or not.
                if (position > -1) document.querySelector('.grid-item' + (position ? position : position + 1)).style.backgroundColor = cell_count.includes(position) ? add_color() : '#757373';

                console.log("yo", arr);

            }, 130)

            // updating the colour of the player in the grid. 
            add_color();

            // check if win.
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

            remove_color();
            // if player not in lobby and not six

            let yeh = cell_count[i];
            let arr = [];

            // if player reached 100th or not.
            cell_count[i] = cell_count[i] + number > 100 ? cell_count[i] : cell_count[i] + number;
            // cell_count[i] = cell_count[i] + number;

            // making orange trail.
            for (let k = yeh; k < cell_count[i]; k++) {

                if (cell_count[i] > -1) document.querySelector('.grid-item' + (k ? k : k + 1)).style.backgroundColor = 'orange';

                arr.push(k);
            }

            // special test case for grid position 1.
            if (arr[0] != 1) {
                let yo = setInterval(function () {
                    if (arr.length == 0) clearInterval(yo);
                    let position = arr.shift();

                    // for changing back color and checking of element overlapping another or not.
                    if (position > -1) document.querySelector('.grid-item' + (position ? position : position + 1)).style.backgroundColor = cell_count.includes(position) ? add_color() : '#757373';

                    console.log("yo", arr);

                }, (arr[0] == 1 ? 1000 : 130))
            }


            // updating the color of players in grid.
            add_color();

            // SNAKE PART !!!!! ---------------------------------------------------

            // snake for 22 to 19.
            if (cell_count[i] === 22) {
                setTimeout(function () {
                    document.querySelector('.grid-item22').style.backgroundColor = '#757373';
                }, 400)

                cell_count[i] = 19;

                setTimeout(function () {
                    add_color();
                }, 550)

            }

            // snake for 17 to 3.
            if (cell_count[i] === 17) {
                setTimeout(function () {
                    document.querySelector('.grid-item17').style.backgroundColor = '#757373';
                }, 400)

                cell_count[i] = 3;

                setTimeout(function () {
                    add_color();
                }, 550)
            }

            // snake for 31 to 12.
            if (cell_count[i] === 31) {
                setTimeout(function () {
                    document.querySelector('.grid-item31').style.backgroundColor = '#757373';
                }, 400)

                cell_count[i] = 12;

                setTimeout(function () {
                    add_color();
                }, 550)
            }

            // snake for 35 to 14.
            if (cell_count[i] === 35) {
                setTimeout(function () {
                    document.querySelector('.grid-item35').style.backgroundColor = '#757373';
                }, 400)

                cell_count[i] = 14;
                setTimeout(function () {
                    add_color();
                }, 550)
            }

            // snake for 45 to 26
            if (cell_count[i] === 45) {
                setTimeout(function () {
                    document.querySelector('.grid-item45').style.backgroundColor = '#757373';
                }, 400)

                cell_count[i] = 26;
                setTimeout(function () {
                    add_color();
                }, 550)
            }

            // snake for 77 to 24.
            if (cell_count[i] === 77) {
                setTimeout(function () {
                    document.querySelector('.grid-item77').style.backgroundColor = '#757373';
                }, 400)

                cell_count[i] = 24;
                setTimeout(function () {
                    add_color();
                }, 550)
            }

            // snake for 58 to 40.
            if (cell_count[i] === 58) {
                setTimeout(function () {
                    document.querySelector('.grid-item58').style.backgroundColor = '#757373';
                }, 400)

                cell_count[i] = 40;
                setTimeout(function () {
                    add_color();
                }, 550)
            }

            // snake for 72 to 54.
            if (cell_count[i] === 72) {
                setTimeout(function () {
                    document.querySelector('.grid-item72').style.backgroundColor = '#757373';
                }, 400)

                cell_count[i] = 54;
                setTimeout(function () {
                    add_color();
                }, 550)
            }

            // snake for 95 to 66.
            if (cell_count[i] === 95) {
                setTimeout(function () {
                    document.querySelector('.grid-item95').style.backgroundColor = '#757373';
                }, 400)

                cell_count[i] = 66;
                setTimeout(function () {
                    add_color();
                }, 550)
            }

            // snake for 99 to 2. (The ultimate!)
            if (cell_count[i] === 99) {
                setTimeout(function () {
                    document.querySelector('.grid-item99').style.backgroundColor = '#757373';
                }, 400)

                cell_count[i] = 2;
                setTimeout(function () {
                    add_color();
                }, 550)
            }

            // LADDER PART !!!-------------------------------------------------------

            // ladder from 3 to 18.
            if (cell_count[i] === 3) {

                // making ladder visible
                document.getElementById('ladder').style.opacity = 1;
                document.getElementById('ladder1').style.opacity = 1;
                document.getElementById('ladder1_line1').style.opacity = 1;
                document.getElementById('ladder1_line2').style.opacity = 1;

                setTimeout(function () {
                    document.querySelector('.grid-item3').style.backgroundColor = '#757373';
                }, 400)

                cell_count[i] = 18;

                setTimeout(function () {
                    add_color();
                    // making ladder vanish.
                    document.getElementById('ladder').style.opacity = 0;
                    document.getElementById('ladder1').style.opacity = 0;
                    document.getElementById('ladder1_line1').style.opacity = 0;
                    document.getElementById('ladder1_line2').style.opacity = 0;
                }, 550)
                // break;
            }

            // ladder from 8 to 28.
            if (cell_count[i] === 8) {
                document.getElementById('ladder_2').style.opacity = 1;
                document.getElementById('ladder2').style.opacity = 1;
                document.getElementById('ladder2_line1').style.opacity = 1;
                document.getElementById('ladder2_line2').style.opacity = 1;
                setTimeout(function () {
                    document.querySelector('.grid-item8').style.backgroundColor = '#757373';
                }, 400)

                cell_count[i] = 28;
                setTimeout(function () {
                    add_color();
                    document.getElementById('ladder_2').style.opacity = 0;
                    document.getElementById('ladder2').style.opacity = 0;
                    document.getElementById('ladder2_line1').style.opacity = 0;
                    document.getElementById('ladder2_line2').style.opacity = 0;
                }, 550)
            }

            // ladder from 11 to 30.
            if (cell_count[i] === 11) {

                document.getElementById('ladder_3').style.opacity = 1;
                document.getElementById('ladder3').style.opacity = 1;
                document.getElementById('ladder3_line1').style.opacity = 1;
                document.getElementById('ladder3_line2').style.opacity = 1;
                setTimeout(function () {
                    document.querySelector('.grid-item11').style.backgroundColor = '#757373';
                }, 400)

                cell_count[i] = 30;
                setTimeout(function () {
                    add_color();
                    document.getElementById('ladder_3').style.opacity = 0;
                    document.getElementById('ladder3').style.opacity = 0;
                    document.getElementById('ladder3_line1').style.opacity = 0;
                    document.getElementById('ladder3_line2').style.opacity = 0;
                }, 550)
            }

            // ladder from 32 to 52.
            if (cell_count[i] === 32) {

                document.getElementById('ladder_4').style.opacity = 1;
                document.getElementById('ladder4').style.opacity = 1;
                document.getElementById('ladder4_line1').style.opacity = 1;
                document.getElementById('ladder4_line2').style.opacity = 1;
                setTimeout(function () {
                    document.querySelector('.grid-item32').style.backgroundColor = '#757373';
                }, 400)

                cell_count[i] = 52;
                setTimeout(function () {
                    add_color();
                    document.getElementById('ladder_4').style.opacity = 0;
                    document.getElementById('ladder4').style.opacity = 0;
                    document.getElementById('ladder4_line1').style.opacity = 0;
                    document.getElementById('ladder4_line2').style.opacity = 0;
                }, 550)
            }

            // ladder from 56 to 76.
            if (cell_count[i] === 56) {
                document.getElementById('ladder_5').style.opacity = 1;
                document.getElementById('ladder5').style.opacity = 1;
                document.getElementById('ladder5_line1').style.opacity = 1;
                document.getElementById('ladder5_line2').style.opacity = 1;
                setTimeout(function () {
                    document.querySelector('.grid-item56').style.backgroundColor = '#757373';
                }, 400)

                cell_count[i] = 76;
                setTimeout(function () {
                    add_color();
                    document.getElementById('ladder_5').style.opacity = 0;
                    document.getElementById('ladder5').style.opacity = 0;
                    document.getElementById('ladder5_line1').style.opacity = 0;
                    document.getElementById('ladder5_line2').style.opacity = 0;
                }, 550)
            }

            // ladder from 79 to 82.
            if (cell_count[i] === 79) {
                document.getElementById('ladder_7').style.opacity = 1;
                document.getElementById('ladder7').style.opacity = 1;
                document.getElementById('ladder7_line1').style.opacity = 1;
                document.getElementById('ladder7_line2').style.opacity = 1;
                setTimeout(function () {
                    document.querySelector('.grid-item79').style.backgroundColor = '#757373';
                }, 400)

                cell_count[i] = 82;
                setTimeout(function () {
                    add_color();
                    document.getElementById('ladder_7').style.opacity = 0;
                    document.getElementById('ladder7').style.opacity = 0;
                    document.getElementById('ladder7_line1').style.opacity = 0;
                    document.getElementById('ladder7_line2').style.opacity = 0;
                }, 550)
            }

            // ladder from 71 to 91.
            if (cell_count[i] === 71) {
                document.getElementById('ladder_6').style.opacity = 1;
                document.getElementById('ladder6').style.opacity = 1;
                document.getElementById('ladder6_line1').style.opacity = 1;
                document.getElementById('ladder6_line2').style.opacity = 1;
                setTimeout(function () {
                    document.querySelector('.grid-item71').style.backgroundColor = '#757373';
                }, 400)

                cell_count[i] = 91;
                setTimeout(function () {
                    add_color();
                    document.getElementById('ladder_6').style.opacity = 0;
                    document.getElementById('ladder6').style.opacity = 0;
                    document.getElementById('ladder6_line1').style.opacity = 0;
                    document.getElementById('ladder6_line2').style.opacity = 0;
                }, 550)
            }

            // ladder from 74 to 94.
            if (cell_count[i] === 74) {
                setTimeout(function () {
                    document.querySelector('.grid-item74').style.backgroundColor = '#757373';
                }, 400)

                cell_count[i] = 94;
                setTimeout(function () {
                    add_color();
                }, 550)
            }

            // Ladder end ---------------------------------------------------------

            if (cell_count[i] == 100) {
                alert(`Game Over hehe!
${i + 1} Won`);


            }
        }

        let colour;
        if (i == 0) {
            colour = "#60b347";
        }
        else if (i == 1) {
            colour = "#ff0000";
        }

        else if (i == 2) {
            colour = "#be0095";
        }
        else if (i == 3) {
            colour = "#d0df04";
        }

        document.getElementById('player-roll').style.color = colour;

        i = (++i) % 4;





    }

    function remove_color() {

        if (cell_count[0] > -1) document.querySelector('.grid-item' + (cell_count[0] ? cell_count[0] : cell_count[0] + 1)).style.backgroundColor = '#757373';

        if (cell_count[1] > -1) document.querySelector('.grid-item' + (cell_count[1] ? cell_count[1] : cell_count[1] + 1)).style.backgroundColor = '#757373';

        if (cell_count[2] > -1) document.querySelector('.grid-item' + (cell_count[2] ? cell_count[2] : cell_count[2] + 1)).style.backgroundColor = '#757373';

        if (cell_count[3] > -1) document.querySelector('.grid-item' + (cell_count[3] ? cell_count[3] : cell_count[3] + 1)).style.backgroundColor = '#757373';

    }

    function add_color() {

        if (cell_count[0] > -1) document.querySelector('.grid-item' + (cell_count[0] ? cell_count[0] : cell_count[0] + 1)).style.backgroundColor = '#60b347';


        if (cell_count[1] > -1) document.querySelector('.grid-item' + (cell_count[1] ? cell_count[1] : cell_count[1] + 1)).style.backgroundColor = '#ff0000';


        if (cell_count[2] > -1) document.querySelector('.grid-item' + (cell_count[2] ? cell_count[2] : cell_count[2] + 1)).style.backgroundColor = '#be0095';

        if (cell_count[3] > -1) document.querySelector('.grid-item' + (cell_count[3] ? cell_count[3] : cell_count[3] + 1)).style.backgroundColor = '#d0df04';

    }

    console.log(cell_count);

})
