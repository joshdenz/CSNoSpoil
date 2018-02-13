(function(){
    //get all instances of visible scores from the results page
    Array.from(document.getElementsByClassName('score-won')).forEach(function(item){item.style.display = 'none'});
    Array.from(document.getElementsByClassName('score-lost')).forEach(function(item){item.style.display = 'none'});
})();