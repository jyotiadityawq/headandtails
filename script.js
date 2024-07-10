window.onload = function() {
    const resultText = document.getElementById('result-text');
    const coinImage = document.getElementById('coin-image');
    const headsOrTails = Math.random() < 0.5 ? 'HEADS' : 'TAILS';
    
    if (headsOrTails === 'HEADS') {
        resultText.innerText = 'Congrats! Head Won!';
        coinImage.src = 'heads.png'; 
    } else {
        resultText.innerText = 'Congrats! Tail Won!';
        coinImage.src = 'tails.png'; 
    }
};
