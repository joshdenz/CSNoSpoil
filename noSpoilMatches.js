(function () {
    //get all instances of visible scores from a given match page
    var scoresWon = Array.from(document.getElementsByClassName('won'));
    var scoresLost = Array.from(document.getElementsByClassName('lost'));
    var livescore = Array.from(document.getElementsByClassName('livescore'));
    var results = Array.from(document.getElementsByClassName('results'));
    //replacement text
    var sanitizedReplacementTextHyphen = DOMPurify.sanitize('-');
    var sanitizedReplacementTextSpace = DOMPurify.sanitize('');
    
    scoresWon.forEach(function (item) {
        item.innerHTML = sanitizedReplacementTextHyphen;
        item.style.color = 'black';
    });

    scoresLost.forEach(function (item) {
        item.innerHTML = sanitizedReplacementTextHyphen;
        item.style.color = 'black';
    });

    results.forEach(function (item) {
        item.innerHTML = sanitizedReplacementTextSpace;
    })

    livescore.forEach(function(item){
        item.innerHTML = sanitizedReplacementTextHyphen;
    })
})();