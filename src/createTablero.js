function createTablero() {

    const ifCreated = document.getElementById('tablero').childElementCount;

    if (ifCreated === 0) {

        let countUntil8 = 1;

        for (let i = 0; i < 64; i++) {
            const parentDiv = document.getElementById('tablero');

            let col = '';
            let deI = i + 1;
            let round = Math.ceil(deI / 8);
            switch (round) {
                case 2:
                    col = 'b';
                    break;
                case 3:
                    col = 'c';
                    break;
                case 4:
                    col = 'd';
                    break;
                case 5:
                    col = 'e';
                    break;
                case 6:
                    col = 'f';
                    break;
                case 7:
                    col = 'g';
                    break;
                case 8:
                    col = 'h';
                    break;
                default:
                    col = 'a';
                    break;
            }

            const rows = `<div class='${col}${countUntil8} ${col}'></div>`;

            countUntil8 += 1;

            if (countUntil8 === 9) {
                countUntil8 = 1;
            }

            parentDiv.insertAdjacentHTML('afterbegin', rows);
        }
    }
}

function startGame() {
    let { white, black } = pieces;

    // Pawn Start
    let pawnRowWhite = document.querySelectorAll(`.b`);
    let indexPawnWHite = 1;
    for (index of pawnRowWhite) {
        index.insertAdjacentHTML('beforeend', `<img class='piece' id='pawn${indexPawnWHite}' src='./img/white/pawn.png' alt='pawn white piece'>`);
        indexPawnWHite++;
    }

    //Backline Start
    for (index in white[1]) {
        let backlinePositionWhite = document.querySelector(`.a${white[1][index][2]}`);

        switch (white[1][index][2]) {
            case '1':
                backlinePositionWhite.insertAdjacentHTML('beforeend', "<img class='piece' id='" + white[1][index][0] + "' src='./img/white/tower.png' alt='tower white piece'>");
                break;
            case '2':
                backlinePositionWhite.insertAdjacentHTML('beforeend', "<img class='piece' id='" + white[1][index][0] + "' src='./img/white/horse.png' alt='horse white piece'>");
                break;
            case '3':
                backlinePositionWhite.insertAdjacentHTML('beforeend', "<img class='piece' id='" + white[1][index][0] + "' src='./img/white/bishop.png' alt='bishop white piece'>");
                break;
            case '4':
                backlinePositionWhite.insertAdjacentHTML('beforeend', "<img class='piece' id='" + white[1][index][0] + "' src='./img/white/king.png' alt='king white piece'>");
                break;
            case '5':
                backlinePositionWhite.insertAdjacentHTML('beforeend', "<img class='piece' id='" + white[1][index][0] + "' src='./img/white/queen.png' alt='queen white piece'>");
                break;
            case '6':
                backlinePositionWhite.insertAdjacentHTML('beforeend', "<img class='piece' id='" + white[1][index][0] + "' src='./img/white/bishop.png' alt='bishop white piece'>");
                break;
            case '7':
                backlinePositionWhite.insertAdjacentHTML('beforeend', "<img class='piece' id='" + white[1][index][0] + "' src='./img/white/horse.png' alt='horse white piece'>");
                break;
            case '8':
                backlinePositionWhite.insertAdjacentHTML('beforeend', "<img class='piece' id='" + white[1][index][0] + "' src='./img/white/tower.png' alt='tower white piece'>");
                break;
        }
    }
    let backlineRowWhite = document.querySelectorAll(`.a`);

    let backlineIndex = 1;
    for (index in backlineRowWhite) {

    }
}
