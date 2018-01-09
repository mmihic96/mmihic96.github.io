var selectedFields = [];
var player = 1;
var errorMessage = '';
var gameResult = '';
var gameFinished = false;
var X = [];
var O = [];
/**
 * Function select field in table
 * @param {Integer} selectedField Field position in table
 */
function selectField(selectedField) {
    removeMessages();
    if (!gameFinished) {
        if (!selectedFields.includes(selectedField)) {
            selectedFields.push(selectedField);
            var parent = document.getElementById('field_' + selectedField);
            var simbol = document.createTextNode((player === 1) ? "X" : "O");
            parent.appendChild(simbol);
            (player === 1) ? (X.push(selectedField)) : (O.push(selectedField))
            player = (player === 1) ? (player = 0) : (player = 1);
        } else {
            var parent = document.getElementById('errorMessage');
            var errorText = document.createTextNode('Field already chosen, please take another field!');
            parent.appendChild(errorText);
        }
        var winner = checkWinner(X, O);

        if (selectedFields.length === 9 && winner === null) {
            var parent = document.getElementById('gameResultMessage');
            var gameResult = document.createTextNode('Draw!');
            parent.appendChild(gameResult);
            gameFinished = true;
        } else if (winner) {
            var parent = document.getElementById('gameResultMessage');
            var gameResult = document.createTextNode(winner);
            parent.appendChild(gameResult);
            gameFinished = true;
        }
    } else {
        var parent = document.getElementById('errorMessage');
        var errorText = document.createTextNode('Please reset game to start new!');
        parent.appendChild(errorText);
    }
}

/**
 * Remove errors if have
 */
function removeMessages() {
    var err = document.getElementById('errorMessage');
    var result = document.getElementById('gameResultMessage');
    if (err.firstChild) {
        err.removeChild(err.firstChild);
    }
    if (result.firstChild) {
        result.removeChild(result.firstChild);
    }
}

/**
 * Reset fields
 */
function resetFields() {
    for (let i = 0; i < selectedFields.length; i++) {
        var field = document.getElementById('field_' + selectedFields[i]);
        if (field.firstChild) {
            document.getElementById('field_' + selectedFields[i]).style.color = 'black';
            field.removeChild(field.firstChild);
        }
    }
    selectedFields = [];
    X = [];
    O = [];
    gameFinished = false;
    removeMessages();
}

function checkWinner(x, o) {
    var xWins = checkForX(x);
    var oWins = checkForO(o);
    if (xWins) {
        return 'Winner is X!';
    } else if (oWins) {
        return 'Winner is O!';
    }
    return null;
}

function checkForX(x) {
    if (checkArrays(x, [1, 2, 3])) {
        document.getElementById('field_1').style.color = 'green';
        document.getElementById('field_2').style.color = 'green';
        document.getElementById('field_3').style.color = 'green';
        return true;
    } else if (checkArrays(x, [4, 5, 6])) {
        document.getElementById('field_4').style.color = 'green';
        document.getElementById('field_5').style.color = 'green';
        document.getElementById('field_6').style.color = 'green';
        return true;
    } else if (checkArrays(x, [7, 8, 9])) {
        document.getElementById('field_9').style.color = 'green';
        document.getElementById('field_8').style.color = 'green';
        document.getElementById('field_7').style.color = 'green';
        return true;
    } else if (checkArrays(x, [1, 4, 7])) {
        document.getElementById('field_1').style.color = 'green';
        document.getElementById('field_4').style.color = 'green';
        document.getElementById('field_7').style.color = 'green';
        return true;
    } else if (checkArrays(x, [2, 5, 8])) {
        document.getElementById('field_2').style.color = 'green';
        document.getElementById('field_5').style.color = 'green';
        document.getElementById('field_8').style.color = 'green';
        return true;
    } else if (checkArrays(x, [3, 6, 9])) {
        document.getElementById('field_3').style.color = 'green';
        document.getElementById('field_6').style.color = 'green';
        document.getElementById('field_9').style.color = 'green';
        return true;
    } else if (checkArrays(x, [1, 5, 9])) {
        console.log('test')
        document.getElementById('field_1').style.color = 'green';
        document.getElementById('field_5').style.color = 'green';
        document.getElementById('field_9').style.color = 'green';
        return true;
    } else if (checkArrays(x, [3, 5, 7])) {
        document.getElementById('field_3').style.color = 'green';
        document.getElementById('field_5').style.color = 'green';
        document.getElementById('field_7').style.color = 'green';
        return true;
    }
    return false;
}

function checkForO(o) {

    if (checkArrays(o, [1, 2, 3])) {
        document.getElementById('field_1').style.color = 'green';
        document.getElementById('field_2').style.color = 'green';
        document.getElementById('field_3').style.color = 'green';
        return true;
    } else if (checkArrays(o, [4, 5, 6])) {
        document.getElementById('field_4').style.color = 'green';
        document.getElementById('field_5').style.color = 'green';
        document.getElementById('field_6').style.color = 'green';
        return true;
    } else if (checkArrays(o, [7, 8, 9])) {
        document.getElementById('field_9').style.color = 'green';
        document.getElementById('field_8').style.color = 'green';
        document.getElementById('field_7').style.color = 'green';
        return true;
    } else if (checkArrays(o, [1, 4, 7])) {
        document.getElementById('field_1').style.color = 'green';
        document.getElementById('field_4').style.color = 'green';
        document.getElementById('field_7').style.color = 'green';
        return true;
    } else if (checkArrays(o, [2, 5, 8])) {
        document.getElementById('field_2').style.color = 'green';
        document.getElementById('field_5').style.color = 'green';
        document.getElementById('field_8').style.color = 'green';
        return true;
    } else if (checkArrays(o, [3, 6, 9])) {
        document.getElementById('field_3').style.color = 'green';
        document.getElementById('field_6').style.color = 'green';
        document.getElementById('field_9').style.color = 'green';
        return true;
    } else if (checkArrays(o, [1, 5, 9])) {
        console.log('test')
        document.getElementById('field_1').style.color = 'green';
        document.getElementById('field_5').style.color = 'green';
        document.getElementById('field_9').style.color = 'green';
        return true;
    } else if (checkArrays(o, [3, 5, 7])) {
        document.getElementById('field_3').style.color = 'green';
        document.getElementById('field_5').style.color = 'green';
        document.getElementById('field_7').style.color = 'green';
        return true;
    }
}

function checkArrays(array1, array2) {
    var have = 0;
    for (let i = 0; i < array1.length; i++) {
        if (array2.includes(array1[i])) {
            have++;
        }
    }
    return (have === 3) ? true : false;
}