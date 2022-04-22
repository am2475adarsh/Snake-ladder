// var player_1, player_2, player_3, player_4;
let players = ["player_1", "player_2", "player_3", "player_4"];
let cell_count = [-1, -1, -1, -1];
let six_case = 0;

// start the game fr
document.querySelector('.start').addEventListener('click', function () {

    var i = 0;

    // check if any player completed tabhi dice roll karo 
    while (cell_count[0] != 100 || cell_count[1] != 100 || cell_count[2] != 100 || cell_count[3] != 100) {

        // to alternate the players
        for (i = 0; i < 3; i++) {

            // dice roll
            document.querySelector('.dice').addEventListener('click', function () {

                // number generator
                const number = Math.trunc(Math.random() * 6) + 1;

                function number_six(six_case) {
                    document.querySelector('.dice').addEventListener('click', function () {

                        const number = Math.trunc(Math.random() * 6) + 1;
                        if (number === 6) {
                            six_case = six_case + number;
                            number_six(six_case);
                        }
                        else {
                            six_case = six_case + number;
                        }

                    })
                    return six_case;
                }

                if (number === 6) {
                    // if player still  in lobby
                    if (cell_count[i] === -1) {

                        // move player to lobby
                        cell_count[i] = 0;
                        six_case = cell_count[i];

                        // function six called 
                        number_six(six_case);
                    }
                    else {
                        // if player not in lobby
                        cell_count[i] = cell_count + 6;
                        number_six(six_case);
                    }

                }

                if (number != 6) {

                    // if player in lobby and not six
                    if (cell_count[i] === -1) {
                        cell_count[i] === -1;
                    }
                    else {

                        // if player not in lobby and not six
                        cell_count[i] = cell_count[i] + number;
                    }
                }
            })
        }
    }

})