(function () {
    var scoresWon = Array.from(document.getElementsByClassName('won'));
    var scoresLost = Array.from(document.getElementsByClassName('lost'));
    var livescore = Array.from(document.getElementsByClassName('livescore'));
    var results = Array.from(document.getElementsByClassName('results'));

    scoresWon.forEach(function (item) {
        item.innerHTML = '-';
        item.style.color = 'black';
    });

    scoresLost.forEach(function (item) {
        item.innerHTML = '-';
        item.style.color = 'black';
    });

    results.forEach(function (item) {
        item.innerHTML = '';
    })

    livescore.forEach(function(item){
        item.innerHTML = '-';
    })
})();