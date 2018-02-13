(function () {
    //get all instances of visible scores from a given match page
    var scoresWon = Array.from(document.getElementsByClassName('won'));
    var scoresLost = Array.from(document.getElementsByClassName('lost'));
    var livescore = Array.from(document.getElementsByClassName('livescore'));
    var results = Array.from(document.getElementsByClassName('results'));

    scoresWon.forEach(function (item) {
        if (nodeCheck(item)) {
            return;
        }
        item.style.display = 'none';
    });

    scoresLost.forEach(function (item) {
        if (nodeCheck(item)) {
            return;
        }
        item.style.display = 'none';
    });

    results.forEach(function (item) {
        if (nodeCheck(item)) {
            return;
        }
        item.style.display = 'none';
    })

    livescore.forEach(function (item) {
        if (nodeCheck(item)) {
            return;
        }
        item.style.display = 'none';
    })
})();

function nodeCheck(node) {
    if (node.nodeName == 'SPAN') {
        return true;
    }
    if (node.nodeName == 'DIV') {
        return false;
    }
}