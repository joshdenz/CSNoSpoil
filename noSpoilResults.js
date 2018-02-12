(function(){
    var scoresWon = Array.from(document.getElementsByClassName('score-won'));
    var scoresLost = Array.from(document.getElementsByClassName('score-lost'));

    scoresWon.forEach(function(item){
        item.innerHTML = "-";
    })

    scoresLost.forEach(function(item){
        item.innerHTML = "-";
    })
    
}); 