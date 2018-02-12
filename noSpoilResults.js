(function(){
    var scoresWon = Array.from(document.getElementsByClassName('score-won'));
    var scoresLost = Array.from(document.getElementsByClassName('score-lost'));
    var sanitizedReplacementTextHyphen = DOMPurify.sanitize('-');
    scoresWon.forEach(function (item) {
        item.innerHTML = sanitizedReplacementTextHyphen;
        item.style.color = 'black';
    });

    scoresLost.forEach(function (item) {
        item.innerHTML = sanitizedReplacementTextHyphen;
        item.style.color = 'black';
    });
})();